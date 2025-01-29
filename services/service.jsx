import axios from "axios";

export const createAccountRequest = async (newUser) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CREATE_ACCOUNT_ENDPOINT}`,
    newUser
  );
  return response;
};

export const userLoginRequest = async (userCrendential) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_USER_LOGIN_API_ENDPOINT}`,
    userCrendential
  );
  return response;
};

export const verfiyEmailRequest = async (token) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_VERIFY_EMAIL_ENDPOINT}/${token}`,
    userCrendential
  );
  return response;
};
