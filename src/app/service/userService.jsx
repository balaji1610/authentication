import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/userContext";
import {
  createAccountRequest,
  verfiyEmailRequest,
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

  return { createAccount, sendVerificationEmail };
}
