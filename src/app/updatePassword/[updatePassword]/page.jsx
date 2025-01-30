"use client";
import UpdatePwd from "@/app/components/updatePwd";
import UserService from "@/app/service/userService";
import CircularProgress from "@mui/material/CircularProgress";
import { useUserContext } from "@/app/context/userContext";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function UpdatePassword() {
  const { updatePassword } = useParams();
  const { updatePasswordVerifyEmail } = UserService();
  const {
    isVerifyEmail,
    setIsVerifyEmail,
    verifyMessage,
    setVerifyMessage,
    updatePwdCrendential,
  } = useUserContext();

  useEffect(() => {
    if (updatePassword) {
      updatePasswordVerifyEmail(updatePassword);
      setIsVerifyEmail(true);
    }
  }, []);
  useEffect(() => {
    verifyMessage;
  }, [setVerifyMessage, verifyMessage]);

  const isSuccess = verifyMessage.includes("successfully");
  return (
    <div>
      {isVerifyEmail ? (
        <CircularProgress />
      ) : (
        <Typography
          variant="h6"
          color={isSuccess ? "primary" : "error"}
          align="center"
        >
          {verifyMessage}
        </Typography>
      )}

      <hr />
      {updatePwdCrendential._id && <UpdatePwd />}
    </div>
  );
}
