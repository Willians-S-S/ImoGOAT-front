"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Verifica se é a página de login
  const isLoginPage = pathname === "/login";
  return (
    <>
      {!isLoginPage && <Header />}
      <div className={`m-auto min-h-screen ${isLoginPage ? "w-full" : "sm:w-11/12 w-97p"}`}>
        {children}
      </div>
      {!isLoginPage && <Footer />}
    </>
  );
}