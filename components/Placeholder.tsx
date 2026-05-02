import * as React from "react";

type Props = {
  label: string;
  aspect?: string;
  className?: string;
  style?: React.CSSProperties;
  photo?: boolean;
  src?: string;
};

export default function Placeholder({
  label,
  aspect = "16/10",
  className = "",
  style = {},
  photo = true,
  src,
}: Props) {
  return (
    <div
      className={`ph ${photo ? "ph-photo" : ""} ${className}`}
      style={{ aspectRatio: aspect, ...style }}
    >
      {src ? <img src={src} alt={label} /> : <span className="ph-label">{label}</span>}
    </div>
  );
}
