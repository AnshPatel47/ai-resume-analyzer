import { AuthCard } from "@/components/auth/AuthCard";
import { RegisterForm } from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthCard title="Create an account">
      <RegisterForm />
    </AuthCard>
  );
}