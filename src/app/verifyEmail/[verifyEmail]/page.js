"use client";

import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
export default function VerifyEmail() {
  const { verifyEmail } = useParams();
  return (
    <div>
      <h1>verifyEmail</h1>

      {JSON.stringify(verifyEmail)}
    </div>
  );
}
