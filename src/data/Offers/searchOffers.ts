import { Offer } from "@/models/Offer";
import { wait } from "@/utils/wait";
import { mockedOffers } from "../mocks/offers";

export async function searchOffers(term: string): Promise<{ data: Offer[] }> {
  await wait(1500);

  const result = mockedOffers.filter((offers) => {
    return new RegExp(term, "i").test(offers.name);
  });

  return {
    data: result,
  };
}
