import { faker } from "@faker-js/faker";
import { SerializedMoney } from "../../models/Money";
import { SupportedCurrencies } from "../../models/SupportedCurrencies";
import { FAKER_SEED } from "./config";

faker.seed(FAKER_SEED);

export function generateMoney(): SerializedMoney {
  return {
    currency: SupportedCurrencies.ARS,
    amount: faker.number.int({ min: 500, max: 150_000 }),
  };
}
