import { useQuery } from "@tanstack/react-query";
import { imagesSchema } from "../schema";

export function useImagesQuery(limit?: number) {
    return useQuery({
        queryKey: ['images', limit],
        queryFn: async () => {
            try {
                const res = await fetch(`/api/images?limit=${limit || 10}`)

                const data = await res.json()

                const parsed = imagesSchema.parse(data);

                // add the '.jpg' and '.webp' here to avoid needing to do it in the component
                return parsed.map(image => {
                    const cloned = structuredClone(image)

                    cloned.url = cloned.url + '.jpg'
                    cloned.user.profile_image = cloned.user.profile_image + '.webp'

                    return cloned
                })
            } catch (e) {
                if (e instanceof Error) { throw new Error(e.message) }
            }
        },
    })
} 