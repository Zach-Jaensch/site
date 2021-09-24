import { QueryClient } from "react-query";

export function buildQueryClient(): QueryClient {
  return new QueryClient();
}
