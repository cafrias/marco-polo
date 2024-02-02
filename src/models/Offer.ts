import type { Brand } from "./Brand";
import type { SerializedMoney } from "./Money";
import { Picture } from "./Picture";
import type { Store } from "./Store";

export interface Offer {
  id: string;
  name: string;
  price: SerializedMoney;
  brand: Brand;
  qty: number;
  expirationDate: string;
  pictureURL: Picture;
  store: Store;
}
