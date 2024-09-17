"use client";

import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import { useEffect } from "react";

const ProgressBar = () => {
  NProgress.configure({ easing: "ease", speed: 800 });
  const pathname = usePathname();
  useEffect(() => {
    NProgress.start();
    NProgress.done();

    return () => {
      NProgress.done();
    };
  }, [pathname]);

  return null;
};
export default ProgressBar;
