import type { Brand } from "./Brand";
import type { Money } from "./Money";
import type { Store } from "./Store";

export interface Offer {
  id: string;
  name: string;
  price: Money;
  brand: Brand;
  qty: number;
  expirationDate: Date;
  pictureUrl: string;
  store: Pick<Store, "id" | "name">;
}
