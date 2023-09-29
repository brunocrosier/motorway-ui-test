import { flushSync } from "react-dom";
import { type ComponentPropsWithoutRef } from "react";
import { useNavigate, Link } from "react-router-dom";

export const AnimatedLink = ({
  to,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof Link>) => {
  const navigate = useNavigate();
  return (
    <Link
      to={to}
      onClick={(ev) => {
        ev.preventDefault();
        if (document.startViewTransition) {
          document?.startViewTransition(() => {
            flushSync(() => {
              navigate(to);
            });
          });
        } else {
          navigate(to)
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

declare global {
  interface Document {
    startViewTransition: (callback: () => void) => void;
  }
}
