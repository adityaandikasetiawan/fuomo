"use client";
import { useRouter } from "next/navigation";
import { HomePage } from "@components/home/HomePage";
import { useEffect, useState } from "react";
import { listCreators } from "@lib/api";
import type { Creator } from "@lib/api/types";

export default function HomePageAdapter() {
  const router = useRouter();
  const [creators, setCreators] = useState<Creator[] | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    let mounted = true;
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
      if (token) {
        setIsAuthenticated(true);
      }
    } catch {}
    listCreators()
      .then((data) => { if (mounted) setCreators(data); })
      .catch(() => { /* noop */ });
    return () => { mounted = false; };
  }, []);
  const handleLogout = () => {
    try { localStorage.removeItem("auth_token"); } catch {}
    router.push("/signin");
  };
  return (
    <HomePage 
      onNavigateToSignIn={() => router.push("/signin")} 
      onNavigateToSignUp={() => router.push("/signup")} 
      creatorsData={creators}
      isAuthenticated={isAuthenticated}
      onLogout={handleLogout}
    />
  );
}