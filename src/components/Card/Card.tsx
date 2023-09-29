import { ImageType } from "@/schema";
import { AnimatedLink } from "@/components/AnimatedLink";
import { CarImage } from "./CarImage";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarIcon } from "@radix-ui/react-icons";
import { dayjs } from "@/lib/dayjs";
import { ProfilePic } from "@/components/ProfilePic/ProfilePic";

export const Card = ({ image }: { image: ImageType }) => {
  return (
    <AnimatedLink to={`/images/${image.id}`}>
      <article>
        <div className="overflow-hidden group relative rounded-md aspect-[3/4] hover:drop-shadow-lg transition-all">
          <CarImage
            image={image}
            className="transition-all group-hover:scale-105 duration-200"
          />
          <HoverOverlay color={image.color} />
        </div>
        <HoverCard>
          <HoverCardTrigger>@{image.user.username}</HoverCardTrigger>
          <HoverCardContent align="start" className="w-80">
            <div className="flex gap-4">
              <ProfilePic image={image} />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">
                  {image.user.first_name} {image.user.last_name}
                </h4>
                <p className="text-sm">{image.user.bio}</p>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Last update: {dayjs(image.user.updated_at).fromNow()}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </article>
    </AnimatedLink>
  );
};

const HoverOverlay = ({ color }: { color: string }) => (
  <div
    className="absolute bottom-0 w-full h-full opacity-0 group-hover:opacity-40 transition-all duration-200"
    style={{
      backgroundColor: color,
    }}
  />
);
