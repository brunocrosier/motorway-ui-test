import { useParams } from "react-router-dom";
import { useImagesQuery } from "../queries/images";
import { CarImage } from "../components/Card/CarImage";
import { AnimatedLink } from "../components/AnimatedLink";
import { dayjs } from "@/lib/dayjs";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon, HeartIcon } from "@radix-ui/react-icons";
import { ProfilePic } from "@/components/ProfilePic/ProfilePic";

export const SingleImage = () => {
  const { id } = useParams();

  const { data: images } = useImagesQuery();

  const image = images?.find((image) => image.id === id);

  return image ? (
    <div className="flex flex-col">
      <AnimatedLink to="/">
        <div className="aspect-[5/3]">
          <CarImage image={image} className="aspect-[5/3] rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-150" />
        </div>
      </AnimatedLink>
      <div className="flex gap-4 my-4 bg-slate-200 py-5 px-8 rounded-md">
        <ProfilePic image={image} />
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">
            {image.user.first_name} {image.user.last_name}
          </h4>
          <p className="text-sm">{image.description}</p>
          <div className="flex items-center pt-2">
            <HeartIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">{image.likes}</span>
          </div>
          <div className="flex items-center pt-2">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              Uploaded {dayjs(image.description).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Skeleton className="w-full aspect-[5/3] rounded-sm" />
      <Skeleton className="my-4 rounded-sm aspect-[8/1]" />
    </>
  );
};
