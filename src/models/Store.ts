import type { URLTypes } from "./URLTypes";

export interface Store {
  id: string;
  name: string;
  location: [number, number];
  address?: string;
  phone?: string;
  email?: string;
  urls: Array<{ type: URLTypes; url: string }>;
}
