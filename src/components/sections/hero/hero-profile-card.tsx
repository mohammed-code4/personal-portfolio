import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profileLinks } from "@/data/profile";
import SocialButton from "@/components/common/social-button";

export const HeroProfileCard = () => {
  return (
    <div className="flex h-full min-h-105 items-center justify-center rounded-3xl bg-linear-to-br from-primary/10 via-secondary/50 to-background p-6">
      <Card className="w-full max-w-sm  border-none! ring-0  bg-background/90 shadow-none! backdrop-blur-sm">
        <CardContent className="flex flex-col items-center  p-8 text-center">
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-primary to-primary/70 text-3xl font-extrabold text-primary-foreground shadow-md">
            MH
          </div>

          <Badge
            variant="outline"
            className="text-xs font-semibold uppercase text-primary"
          >
            Front-end developer
          </Badge>

          <h2 className="mt-3 text-2xl font-bold text-foreground">
            Mohammed Hussein
          </h2>

          <div className="mt-6 flex items-center gap-2">
            <SocialButton
              label="LinkedIn"
              variant="default"
              icon={<FaLinkedin className="h-3.5 w-3.5" />}
              href={profileLinks.linkedin}
            />
            <SocialButton
              label="GitHub"
              icon={<FaGithub className="h-3.5 w-3.5" />}
              href={profileLinks.github}
            />
            <SocialButton
              label="Email"
              icon={<HiOutlineMail className="h-4 w-4" />}
              href={`mailto:${profileLinks.email}`}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroProfileCard;
