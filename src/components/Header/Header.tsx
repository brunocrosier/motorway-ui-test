import MotorwayLogo from "@/logo.svg?react";
import { AnimatedLink } from "@/components/AnimatedLink";

export const Header = () => {
  return (
    <header className="flex gap-8 w-full justify-center items-center self-start bg-brand py-2">
      <AnimatedLink to="/">
        <MotorwayLogo />
      </AnimatedLink>
      <nav className="flex gap-2">
        <AnimatedLink to="/form">
          <p className="text-sm font-semibold">Form page</p>
        </AnimatedLink>
      </nav>
    </header>
  );
};
