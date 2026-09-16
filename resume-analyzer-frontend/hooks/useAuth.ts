import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  fullName: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: RegisterPayload) => {
      const response = await api.post("/users/register", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      router.push("/login");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Registration failed");
    },
  });
}

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const response = await api.post("/users/login", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Logged in successfully");
      router.push("/dashboard");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });
}

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await api.post("/users/logout");
    },
    onSuccess: () => {
      queryClient.clear();
      toast.success("Logged out");
      router.push("/login");
    },
  });
}