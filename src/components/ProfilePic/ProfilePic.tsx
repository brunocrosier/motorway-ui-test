import { type ImageType } from "@/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfilePic = ({ image }: { image: ImageType }) => {
  return (
    <Avatar>
      <AvatarImage src={image.user.profile_image} />
      <AvatarFallback>
        {image.user.first_name[0]}
        {image.user?.last_name?.[0]}
      </AvatarFallback>
    </Avatar>
  );
};
