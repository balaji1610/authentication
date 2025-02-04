import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/userContext";
import {
  createAccountRequest,
  verfiyEmailRequest,
  userLoginRequest,
  findAccountRequest,
  updatePwdverifyBeforeEmailRequest,
  updatePasswordRequest,
} from "../../../services/service";
export default function UserService() {
  const router = useRouter();
  const {
    userCrendential,
    newUserCrendential,
    setIsLoginLoadingButton,
    setIsVerifyEmail,
    setVerifyMessage,
    setUpdatePwdCrendential,
    updatePwdCrendential,
  } = useUserContext();

  const createAccount = async () => {
    try {
      setIsLoginLoadingButton(true);
      const response = await createAccountRequest(newUserCrendential);
      if (response.status === 201) {
        toast.success(response?.data.message ?? "Account Created");
        setIsLoginLoadingButton(false);
      }
    } catch (err) {
      console.log(err);
      toast.error(response.data.message ?? "Login Failed");
      setIsLoginLoadingButton(false);
    }
  };

  const sendVerificationEmail = async (verificationToken) => {
    try {
      setIsVerifyEmail(true);
      const response = await verfiyEmailRequest(verificationToken);
      if (response.status === 201) {
        setVerifyMessage(
          response?.data.message ??
            "Email verified successfully. You can now log in"
        );
        setIsVerifyEmail(false);
      }
    } catch (err) {
      console.log(err);
      setVerifyMessage("Invalid or expired token Something Wrong");
      setIsVerifyEmail(false);
    }
  };
  const userLogin = async () => {
    try {
      setIsLoginLoadingButton(true);
      const response = await userLoginRequest(userCrendential);
      if (response.status === 200) {
        toast.success(response.data.message ?? "Login Success");
        setIsLoginLoadingButton(false);
      }
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
      setIsLoginLoadingButton(false);
      toast.error(err.response.data.message ?? "Login Failed");
    }
  };

  const findAccount = async (email) => {
    try {
      setIsLoginLoadingButton(true);
      const response = await findAccountRequest(email);
      if (response.status === 201) {
        toast.success(response.data.message);
        setIsLoginLoadingButton(false);
      }
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
      setIsLoginLoadingButton(false);
      toast.error(err.response.data.message ?? "Something Wrong");
    }
  };

  const updatePasswordVerifyEmail = async (verificationToken) => {
    try {
      setIsVerifyEmail(true);
      const response = await updatePwdverifyBeforeEmailRequest(
        verificationToken
      );
      if (response.status === 201) {
        setVerifyMessage(
          response.data.message ??
            "Email verified successfully. You can now UpdatePassword"
        );

        setIsVerifyEmail(false);
        setUpdatePwdCrendential((prev) => {
          return { ...prev, ...response.data.result };
        });
      }
    } catch (err) {
      console.log(err);
      setIsVerifyEmail(false);
      setVerifyMessage("Invalid or expired token Something Wrong");
    }
  };

  const updateUserPassword = async () => {
    try {
      setIsLoginLoadingButton(true);
      const response = await updatePasswordRequest(updatePwdCrendential);
      if (response.status === 201) {
        setIsLoginLoadingButton(false);
        toast.success(response.data.message ?? "SucessFully Update Password !");
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
      toast.error(err.response.data.message ?? "User Not Found");
      setIsLoginLoadingButton(false);
    }
  };
  return {
    createAccount,
    sendVerificationEmail,
    userLogin,
    findAccount,
    updatePasswordVerifyEmail,
    updateUserPassword,
  };
}
