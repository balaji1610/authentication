"use client";
import { useUserContext } from "./context/userContext";
import Login from "@/app/components/login";
export default function Home() {
  const { user } = useUserContext();

  return (
    <div>
      <Login />
    </div>
  );
}
