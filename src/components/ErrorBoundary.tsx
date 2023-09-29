import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  console.error(error);

  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm font-semibold">An Error occured</p>
      <p>{error.message}</p>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </div>
  );
};
