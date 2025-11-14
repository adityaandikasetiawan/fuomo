"use client";
import { useRouter } from "next/navigation";
import { Header } from "@components/common/Header";
import { SignUp } from "@components/auth/SignUp";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <Header 
        onNavigateToSignIn={() => router.push("/signin")} 
        onNavigateToSignUp={() => router.push("/signup")} 
        showAuthButtons={false} 
      />
      <SignUp onSwitchToSignIn={() => router.push("/signin")} onSuccess={() => router.push("/signin")} />
    </div>
  );
}