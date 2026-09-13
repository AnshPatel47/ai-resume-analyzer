import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { RegisterForm } from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthHeader title="Create your account" subtitle="Start matching your resume against real job descriptions." />
      <RegisterForm />
    </AuthLayout>
  );
}