import { z } from 'zod'

export const imageSchema = z.object({
    id: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    color: z.string(),
    description: z.string().nullable(),
    alt_description: z.string(),
    categories: z.array(z.unknown()),
    likes: z.number(),
    user: z.object({
        id: z.string(),
        updated_at: z.string(),
        username: z.string(),
        name: z.string(),
        first_name: z.string(),
        last_name: z.string().nullable(),
        bio: z.string(),
        location: z.string().nullable(),
        profile_image: z.string(),
        total_collections: z.number(),
        total_likes: z.number(),
        total_photos: z.number()
    }),
    url: z.string()
})

export type ImageType = z.infer<typeof imageSchema>

export const imagesSchema = z.array(imageSchema)

export const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    dob: z.object({
        day: z.string().refine(val => (parseInt(val) >= 1) && (parseInt(val) <= 31)),
        month: z.string().refine(val => (parseInt(val) >= 1) && (parseInt(val) <= 12)),
        year: z.string().refine(val => (parseInt(val) >= 1900))
    }),
    favouriteColour: z.string(),
    salaryRange: z.tuple([z.number(), z.number()])
})

export type FormSchema = z.infer<typeof formSchema>