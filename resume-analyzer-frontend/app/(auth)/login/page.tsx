import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { LoginForm } from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthHeader title="Welcome back" subtitle="Log in to continue analyzing your resume." />
      <LoginForm />
    </AuthLayout>
  );
}