import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <AuthCard title="Welcome back">
      <LoginForm />
    </AuthCard>
  );
}