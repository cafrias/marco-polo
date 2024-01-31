import { Store } from "@/models/Store";
import { mockedStores } from "../mocks/offers";
import { wait } from "@/utils/wait";

/**
 * Retrieves the store identified by `id`, fails
 * when not found.
 *
 * @param id The id of the store to find
 * @throws {Error} When not found
 * @returns
 */
export function getStore(id: string): Store {
  // await wait(1500);

  const result = mockedStores.find((store) => store.id === id);
  if (!result) {
    throw new Error(`Store with ID "${id}" not found`);
  }

  return result;
}
