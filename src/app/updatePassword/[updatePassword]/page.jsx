"use client";
import UpdatePwd from "@/app/components/updatePwd";
import { useParams } from "next/navigation";
export default function UpdatePassword() {
  const { updatePassword } = useParams();
  return (
    <div>
      {updatePassword}

      <hr />
      <UpdatePwd />
    </div>
  );
}
