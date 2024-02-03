import { API_URL } from "@/config";
import { Offer } from "@/models/Offer";
import { GetManyResponse } from "@/models/api/GetManyResponse";

export const DEFAULT_SEARCH_LIMIT = 10;

export interface SearchOffersOptions {
  page?: number;
  limit?: number;
}

export async function searchOffers(
  term: string,
  { limit = DEFAULT_SEARCH_LIMIT, page }: SearchOffersOptions = {}
): Promise<GetManyResponse<Offer>> {
  const params = new URLSearchParams({
    q: term,
    limit: `${limit}`,
    page: page ? `${page}` : "",
  });

  const res = await fetch(`${API_URL}/api/offers/search?${params.toString()}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch (code ${res.status})`);
  }

  return res.json();
}
