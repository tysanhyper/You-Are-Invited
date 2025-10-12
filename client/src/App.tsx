import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import WeddingPage from "@/pages/WeddingPage";
import RsvpAdmin from "@/pages/RsvpAdmin";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={WeddingPage} />
      <Route path="/admin" component={RsvpAdmin} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
