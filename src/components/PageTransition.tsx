import { useEffect } from "react";
import { useLocation } from "wouter";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div className="page-transition" key={location}>{children}</div>;
}
