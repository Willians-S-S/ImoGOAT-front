"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Verifica se a rota atual é /login ou /register
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!isAuthPage && <Header />}
      <div className={`m-auto min-h-screen ${isAuthPage ? "w-full" : "sm:w-11/12 w-97p"}`}>
        {children}
      </div>
      {!isAuthPage && <Footer />}
    </>
  );
}