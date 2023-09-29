import { cn } from "@/lib/utils";
import { ImageType } from "@/schema";

export const CarImage = ({
  image,
  className,
}: {
  image: ImageType;
  className?: string;
}) => {
  return (
    <img
      src={image.url}
      className={cn("h-full w-full object-cover", className)}
      alt={image.alt_description}
      style={{
        viewTransitionName: image.id,
      }}
    />
  );
};
