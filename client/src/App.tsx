import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Capabilities from "./pages/Capabilities";
import InfoPage from "./pages/InfoPage";
import NotFound from "./pages/NotFound";

/** CIVIC PRECISION — a light, accessible route system with global enterprise navigation. */
function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/capabilities/:slug" component={Capabilities} />
    <Route path="/capabilities" component={Capabilities} />
    <Route path="/government" component={InfoPage} />
    <Route path="/capability-statement" component={InfoPage} />
    <Route path="/industries" component={InfoPage} />
    <Route path="/about" component={InfoPage} />
    <Route path="/dofiling" component={InfoPage} />
    <Route path="/careers" component={InfoPage} />
    <Route path="/contact" component={InfoPage} />
    <Route path="/insights" component={InfoPage} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
