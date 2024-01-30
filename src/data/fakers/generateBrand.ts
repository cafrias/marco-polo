import { faker } from "@faker-js/faker";
import type { Brand } from "../../models/Brand";
import { FAKER_SEED } from "./config";

faker.seed(FAKER_SEED);

export function generateBrand(): Brand {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
  };
}
