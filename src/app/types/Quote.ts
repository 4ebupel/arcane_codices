import { BaseUser } from "./BaseUser";

export interface Quote {
  id: number;
  created_at: number;
  text: string;
  user: BaseUser;
}