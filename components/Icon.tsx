import * as React from "react";

type Props = { name: string; size?: number; stroke?: number };

export default function Icon({ name, size = 24, stroke = 1.5 }: Props) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<string, React.ReactNode> = {
    sparkle: (
      <g>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
      </g>
    ),
    shield: <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />,
    tooth: (
      <path d="M12 3c-3 0-5 1.5-5 4 0 1 .5 2 .5 3 0 4-2 4-2 8 0 2 1 4 2 4s1.5-2 2-4c.5-1.5 1-3 2.5-3s2 1.5 2.5 3c.5 2 1 4 2 4s2-2 2-4c0-4-2-4-2-8 0-1 .5-2 .5-3 0-2.5-2-4-5-4z" />
    ),
    crown: (
      <g>
        <path d="M3 8l3 8h12l3-8-5 3-4-6-4 6-5-3z" />
        <path d="M5 19h14" />
      </g>
    ),
    smile: (
      <g>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <circle cx="9" cy="10" r=".5" fill="currentColor" />
        <circle cx="15" cy="10" r=".5" fill="currentColor" />
      </g>
    ),
    align: (
      <g>
        <path d="M3 6h18M3 12h12M3 18h18" />
      </g>
    ),
    drop: <path d="M12 3s7 7 7 12a7 7 0 11-14 0c0-5 7-12 7-12z" />,
    heart: <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z" />,
    spacer: (
      <g>
        <rect x="4" y="9" width="16" height="6" rx="1.5" />
        <path d="M8 9V7M12 9V5M16 9V7" />
      </g>
    ),
    bolt: <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />,
    leaf: <path d="M5 19c0-9 7-14 16-14 0 9-5 16-14 16-1 0-2-1-2-2z M5 19c2-2 5-4 9-6" />,
    arrow: (
      <g>
        <path d="M5 12h14M13 5l7 7-7 7" />
      </g>
    ),
    arrowDown: <path d="M12 5v14M5 12l7 7 7-7" />,
    check: <path d="M5 12l5 5L20 7" />,
    star: <path d="M12 3l2.7 5.5 6 .9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1L3.3 9.4l6-.9L12 3z" fill="currentColor" />,
    phone: (
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
    ),
    whatsapp: <path d="M3 21l1.7-5A8 8 0 1112 20a8 8 0 01-4-1L3 21z M9 9c0 4 3 7 7 7l1-1.5-2-1-1 1c-1 0-3-2-3-3l1-1-1-2L9 9z" />,
    map: (
      <g>
        <path d="M9 20l-6-2V5l6 2 6-2 6 2v13l-6-2-6 2z" />
        <path d="M9 7v13M15 5v13" />
      </g>
    ),
    clock: (
      <g>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </g>
    ),
    mail: (
      <g>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </g>
    ),
    menu: (
      <g>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </g>
    ),
    close: (
      <g>
        <path d="M6 6l12 12M6 18L18 6" />
      </g>
    ),
    instagram: (
      <g>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </g>
    ),
    facebook: <path d="M14 9h3V5h-3a4 4 0 00-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9z" />,
    quote: (
      <path
        d="M7 7h4v4c0 3-1 5-4 6V14H4V8a1 1 0 011-1h2zm9 0h4v4c0 3-1 5-4 6v-3h-3V8a1 1 0 011-1h2z"
        fill="currentColor"
        stroke="none"
      />
    ),
    plus: (
      <g>
        <path d="M12 5v14M5 12h14" />
      </g>
    ),
    minus: <path d="M5 12h14" />,
  };
  return <svg {...props}>{paths[name] || paths.sparkle}</svg>;
}
