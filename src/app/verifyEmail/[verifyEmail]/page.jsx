"use client";

import { useParams } from "next/navigation";
import UserService from "@/app/service/userService";
import CircularProgress from "@mui/material/CircularProgress";
import { useUserContext } from "@/app/context/userContext";
import { useEffect } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function VerifyEmail() {
  const { verifyEmail } = useParams();
  const { isVerifyEmail, verifyMessage, setVerifyMessage } = useUserContext();
  const { sendVerificationEmail } = UserService();

  useEffect(() => {
    if (verifyEmail) {
      sendVerificationEmail(verifyEmail);
    }
  }, []);

  useEffect(() => {
    verifyMessage;
  }, [setVerifyMessage, verifyMessage]);
  return (
    <div>
      <Box
        sx={{
          border: "1px solid gray",
          borderRadius: "10px",
          height: "10rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isVerifyEmail ? (
          <CircularProgress />
        ) : (
          <Typography
            variant="h6"
            color={verifyMessage.includes("successfully") ? "primary" : "error"}
          >
            {verifyMessage}
          </Typography>
        )}
      </Box>
    </div>
  );
}
