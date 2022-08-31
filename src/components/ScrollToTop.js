import { useEffect } from "react";
import { useLocation } from "react-router";

//scroll to top on the signIn page 

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
