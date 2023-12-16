"use client";


import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";
import { ModalProvider } from "@/components/modal/provider";

const ToasterProvider = () => {
  const { theme }: any = useTheme() as {
    theme: "light" | "dark";
  };
  return <Toaster theme={theme == "system" || theme == "light" ? "light" : "dark"} className=" bg-white dark:bg-black " />;
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="system"
      enableSystem
      attribute="class"
      // value={{
      //   light: "light-theme",
      //   dark: "dark-theme",
      // }}
    >
        <ToasterProvider />
        <ModalProvider>{children}</ModalProvider>
    
    </ThemeProvider>
  );
}


