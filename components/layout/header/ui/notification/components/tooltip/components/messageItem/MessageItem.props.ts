import { StaticImageData } from "next/image";

export interface MessageItemProps {
  name: string;
  topic: string;
  img: StaticImageData;
  date: string;
  status: "reply" | "replied" | "read" | "unread";
}

// 1. Unread - the email has not been read by the recipient.
// 2. Read - the email has been read by the recipient.
// 3. Reply - the email has been opened, but no reply has been sent yet.
// 4. Replied - a reply has been sent to the email.
