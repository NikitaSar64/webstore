import { StaticImageData } from "next/image";

export interface NotificationItemProps {
  name: string;
  img: StaticImageData;
  date: string;
  status: "read" | "unread";
}
