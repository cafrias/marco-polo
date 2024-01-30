import { faker } from "@faker-js/faker";
import type { Offer } from "../../models/Offer";
import { FAKER_SEED } from "./config";
import { generateBrand } from "./generateBrand";
import { generateMoney } from "./generateMoney";
import type { Store } from "../../models/Store";

faker.seed(FAKER_SEED);

export function generateOffer(availableStores: Store[]): Offer {
  return {
    id: faker.string.uuid(),
    brand: generateBrand(),
    expirationDate: faker.date.future({ years: 0.5 }),
    name: faker.commerce.product(),
    pictureUrl: faker.image.urlPicsumPhotos({ width: 150, height: 150 }),
    price: generateMoney(),
    qty: faker.number.int({ min: 0, max: 12 }),
    store: faker.helpers.arrayElement(
      availableStores.map(({ id, name }) => ({ id, name }))
    ),
  };
}
