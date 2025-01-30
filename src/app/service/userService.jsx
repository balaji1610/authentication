import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/userContext";
import {
  createAccountRequest,
  verfiyEmailRequest,
  userLoginRequest,
  findAccountRequest,
} from "../../../services/service";
export default function UserService() {
  const router = useRouter();
  const {
    userCrendential,
    setUserCrendential,
    newUserCrendential,
    setNewUserCrendential,
    setIsLoginLoadingButton,
    isVerifyEmail,
    setIsVerifyEmail,
    verifyMessage,
    setVerifyMessage,
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
  return { createAccount, sendVerificationEmail, userLogin, findAccount };
}
