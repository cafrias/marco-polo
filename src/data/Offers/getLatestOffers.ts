import { Offer } from "@/models/Offer";
import { GetManyResponse } from "@/models/api/GetManyResponse";

export async function getLatestOffers(): Promise<GetManyResponse<Offer>> {
  const res = await fetch("http://localhost:3000/api/offers");
  if (!res.ok) {
    throw new Error(`Failed to fetch (code ${res.status})`);
  }

  return res.json();
}
