import { API_URL } from "@/config";
import { Offer } from "@/models/Offer";
import { GetManyResponse } from "@/models/api/GetManyResponse";

export const DEFAULT_LATEST_LIMIT = 10;

export interface GetLatestOffersOptions {
  page?: number;
  limit?: number;
}

export async function getLatestOffers({
  limit = DEFAULT_LATEST_LIMIT,
  page,
}: GetLatestOffersOptions = {}): Promise<GetManyResponse<Offer>> {
  const params = new URLSearchParams({
    limit: `${limit}`,
    page: page ? `${page}` : "",
  });

  const res = await fetch(`${API_URL}/api/offers/latest?${params.toString()}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch (code ${res.status})`);
  }

  return res.json();
}
