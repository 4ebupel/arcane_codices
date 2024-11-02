import { Stats } from "fs";
import { BaseUser } from "./BaseUser";
import { Quote } from "./Quote";
import { Warcrime } from "./Warcrime";

export interface User extends BaseUser {
  email?: string;
  aliases: string[];
  role: string;
  personality: string;
  facts: string[];
  avatar: { url: string };
  quotes?: Quote[];
  warcrimes?: Warcrime[];
  stats?: Stats[];
}