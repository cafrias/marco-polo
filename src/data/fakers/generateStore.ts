import { faker } from "@faker-js/faker";
import { FAKER_SEED } from "./config";
import type { Store } from "../../models/Store";

faker.seed(FAKER_SEED);

export function generateStore(): Store {
  return {
    id: faker.string.uuid(),
    location: {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    },
    name: faker.company.name(),
    urls: [
      {
        type: "facebook",
        url: faker.internet.url(),
      },
    ],
    address: faker.location.streetAddress(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };
}
