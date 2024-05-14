import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import React from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Section({ children }: LayoutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
