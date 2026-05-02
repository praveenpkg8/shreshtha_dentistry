"use client";

import * as React from "react";
import BookingModal from "./BookingModal";
import BookBar from "./BookBar";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const BookingCtx = React.createContext<Ctx>({ open: () => {}, close: () => {}, isOpen: false });

export const useBooking = () => React.useContext(BookingCtx);

export default function BookingHost({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = React.useState(false);
  const value = React.useMemo<Ctx>(
    () => ({ open: () => setOpen(true), close: () => setOpen(false), isOpen }),
    [isOpen]
  );
  return (
    <BookingCtx.Provider value={value}>
      {children}
      <BookBar />
      <BookingModal open={isOpen} close={() => setOpen(false)} />
    </BookingCtx.Provider>
  );
}
