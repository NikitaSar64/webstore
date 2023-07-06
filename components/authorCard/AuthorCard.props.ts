import { HTMLAttributes } from "react";

export interface AuthorCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  view?: boolean;
  avatar: string;
  name: string;
  userId: number;
}
