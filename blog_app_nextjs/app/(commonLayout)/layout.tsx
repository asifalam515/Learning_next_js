import { Navbar } from "@/components/layout/Navbar";
import { ReactNode } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar></Navbar>
      <h1>This is Layout components</h1>
      {children}
    </div>
  );
}
