import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Native scroll to top
    window.scrollTo(0, 0);
    
    // If we were using a global lenis instance, we would call lenis.scrollTo(0) here.
    // Since this is a simple implementation, native scrollTo usually works with Lenis 
    // if lenis is bound to window (which it is).
  }, [pathname]);

  return null;
};

export default ScrollToTop;
