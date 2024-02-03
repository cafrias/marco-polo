import { API_URL } from "@/config";
import { Store } from "@/models/Store";

/**
 * Retrieves the store identified by `id`, fails
 * when not found.
 *
 * @param id The id of the store to find
 * @throws {Error} When not found
 * @returns
 */
export async function getStore(id: string): Promise<Store> {
  const res = await fetch(`${API_URL}/api/stores/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch (code ${res.status})`);
  }

  return res.json();
}
