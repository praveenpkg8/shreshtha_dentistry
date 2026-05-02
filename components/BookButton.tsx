"use client";

import { useBooking } from "./BookingHost";

type Props = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function BookButton({ className = "btn btn-primary", children, style }: Props) {
  const { open } = useBooking();
  return (
    <button className={className} onClick={open} style={style}>
      {children}
    </button>
  );
}
