import { BaseUser } from "./BaseUser";

export interface Warcrime {
  id: number;
  created_at: number;
  title: string;
  description: string;
  num_of_occurrences: number;
  user: BaseUser;
}