import { Offer } from "@/models/Offer";
import { wait } from "@/utils/wait";
import { mockedOffers } from "../mocks/offers";

export async function getLatestOffers(): Promise<{ data: Offer[] }> {
  await wait(1500);
  return {
    data: mockedOffers,
  };
}
