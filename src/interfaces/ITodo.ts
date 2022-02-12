import { EProgress } from "../enums/EProgress";

export interface ITodo {
  id: number;
  created: string;
  updated: string;
  title: string;
  text: string;
  progress: EProgress;
  category: string;
}
