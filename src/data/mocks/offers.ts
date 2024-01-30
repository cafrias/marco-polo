import { faker } from "@faker-js/faker";
import type { Offer } from "../../models/Offer";
import { FAKER_SEED } from "../fakers/config";
import { generateOffer } from "../fakers/generateOffer";
import type { Store } from "../../models/Store";
import { generateStore } from "../fakers/generateStore";

faker.seed(FAKER_SEED);

export const mockedStores: Store[] = faker.helpers.multiple(generateStore, {
  count: 3,
});

export const mockedOffers: Array<Offer> = faker.helpers.multiple(
  () => generateOffer(mockedStores),
  {
    count: 10,
  }
);
