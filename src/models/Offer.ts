import type { Brand } from "./Brand";
import type { SerializedMoney } from "./Money";
import type { Store } from "./Store";

export interface Offer {
  id: string;
  name: string;
  price: SerializedMoney;
  brand: Brand;
  qty: number;
  expirationDate: string;
  pictureUrl: string;
  store: Pick<Store, "id" | "name">;
}
