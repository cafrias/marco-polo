import { faker } from "@faker-js/faker";
import { Money } from "../../models/Money";
import { SupportedCurrencies } from "../../models/SupportedCurrencies";
import { FAKER_SEED } from "./config";

faker.seed(FAKER_SEED);

export function generateMoney(): Money {
  return new Money({
    currency: SupportedCurrencies.ARS,
    amount: faker.number.int({ min: 500, max: 150_000 }),
  });
}
