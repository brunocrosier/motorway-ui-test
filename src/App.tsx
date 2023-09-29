import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/Header/Header";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex gap-8 flex-col bg-primary-foreground">
        <Header />
        <main className="max-w-5xl w-[90%] self-center">
          <Outlet />
        </main>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
};
