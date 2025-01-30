"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Stack } from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import UserService from "@/app/service/userService";
import { useUserContext } from "../context/userContext";
export default function FindAccount() {
  const router = useRouter();
  const { findAccount } = UserService();
  const { isLoginLoadingButton } = useUserContext();

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email(),
    }),

    onSubmit: (values) => {
      findAccount(values);
    },
  });

  return (
    <Box>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          sx={{
            border: "3px solid #E4E0E1",
            padding: "2rem",
            borderRadius: "20px",
          }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <Stack
            direction="column"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <HttpsIcon color="primary" fontSize="large" />
            </Box>
            <Box>
              {" "}
              <Typography variant="h6">Find Your Account</Typography>
            </Box>
            <Box>
              {" "}
              <TextField
                required
                label="Enter Your Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={(event) => {
                  formik.handleChange(event);
                }}
                helperText={formik.touched.email && formik.errors.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
            </Box>
            <Box>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isLoginLoadingButton}
                size="large"
                sx={{ width: "14rem" }}
              >
                Reset Password
              </LoadingButton>
            </Box>
            <Box>
              <Stack direction="row" spacing={1}>
                <ArrowBackIcon color="primary" />
                <Typography
                  color="primary"
                  sx={{ cursor: "pointer" }}
                  onClick={() => router.push("./")}
                >
                  Back to login
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
