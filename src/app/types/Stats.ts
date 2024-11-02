import { BaseUser } from "./BaseUser";

export interface Stats {
  id: number;
  created_at: number;
  hp: string;
  hp_regen: string;
  stamina: string;
  stamina_regen: string;
  intelligence: string;
  agility: string;
  strength: string;
  user: BaseUser;
}