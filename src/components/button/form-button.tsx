
import {  useFormStatus } from "react-dom";
import { ReactNode } from "react";
import { cn } from "@/utils";

interface FormButtonProps {
    classNames?: string;
    children?: ReactNode;
}


export function FormButton({children,classNames}:FormButtonProps) {
    const { pending } = useFormStatus();
    return (
      <button
        className={cn(
            classNames,
          "flex h-10   items-center justify-center space-x-2 rounded-xl border text-sm transition-all focus:outline-none sm:h-10",
          pending
            ? "cursor-not-allowed border-stone-200 bg-stone-100 text-stone-400 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
            : "border-black bg-black text-white hover:bg-white hover:text-black dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800",
        )}
        disabled={pending}
      >
        {pending ? "..." : <p>{children ?? "save"}</p>}
      </button>
    );
  }

