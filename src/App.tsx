// STYLE REMINDER: Shared shell keeps every route inside the same Red Thread installation while allowing each page to have its own rhythm.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router as WouterRouter, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PageTransition from "./components/PageTransition";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import AchievementsPage from "./pages/AchievementsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:slug" component={ProjectDetail} />
        <Route path="/achievements" component={AchievementsPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route><Home /></Route>
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><PageTransition><Router /></PageTransition></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
