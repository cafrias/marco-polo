import { API_URL } from "@/config";

export function resolveApiUrl(path: string): string {
  return `${API_URL}${path}`;
}
