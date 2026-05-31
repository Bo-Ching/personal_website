import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: CardProps) {
  return <div className={cn("ui-card", className)}>{children}</div>;
}

export function CardInteractive({ className, children }: CardProps) {
  return <div className={cn("ui-card ui-card-interactive", className)}>{children}</div>;
}
