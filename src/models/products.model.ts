import { type } from "os";

export interface Products {
  ID: number;
  SKU: string;
  Name: string;
  Price: number;
  Weight?: number;
  Size?: number;
  Height?: number;
  Width?: number;
  Legnth?: number;
}

export type ProductType = {
  proucts: Products[];
};
