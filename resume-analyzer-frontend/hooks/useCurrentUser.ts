import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

interface CurrentUser {
  id: string;
  email: string;
}

export function useCurrentUser() {
  return useQuery<CurrentUser>({
    queryKey: ["current-user"],
    queryFn: async () => {
      const response = await api.get("/users/current-user");
      return response.data.user;
    },
    retry: false,
  });
}