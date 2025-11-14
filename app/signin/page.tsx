"use client";
import { useRouter } from "next/navigation";
import { Header } from "@components/common/Header";
import { SignIn } from "@components/auth/SignIn";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <Header 
        onNavigateToSignIn={() => router.push("/signin")} 
        onNavigateToSignUp={() => router.push("/signup")} 
        showAuthButtons={false} 
      />
      <SignIn onSwitchToSignUp={() => router.push("/signup")} onSuccess={() => router.push("/")} />
    </div>
  );
}