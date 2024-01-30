import { Store } from "@/models/Store";
import { mockedStores } from "../mocks/offers";

/**
 * Retrieves the store identified by `id`, fails
 * when not found.
 *
 * @param id The id of the store to find
 * @throws {Error} When not found
 * @returns
 */
// TODO: make this a promise
export function getStore(id: string): Store {
  const result = mockedStores.find((store) => store.id === id);
  if (!result) {
    throw new Error(`Store with ID "${id}" not found`);
  }

  return result;
}
