"use client";

import * as React from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
};

export default function Reveal({ children, delay = 0, as = "div", style, className = "" }: Props) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
