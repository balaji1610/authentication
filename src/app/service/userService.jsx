import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/userContext";
import { createAccountRequest } from "../../../services/service";
export default function UserService() {
  const router = useRouter();
  const {
    userCrendential,
    setUserCrendential,
    newUserCrendential,
    setNewUserCrendential,
    setIsLoginLoadingButton,
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
      toast.error(response?.data.message ?? "Login Failed");
      setIsLoginLoadingButton(false);
    }
  };

  return { createAccount };
}
