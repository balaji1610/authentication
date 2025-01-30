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
    `${process.env.NEXT_PUBLIC_VERIFY_EMAIL_ENDPOINT}/${token}`
  );
  return response;
};

export const findAccountRequest = async (user) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_FIND_ACCOUNT_ENDPOINT}`,
    user
  );
  return response;
};

export const updatePwdverifyBeforeEmailRequest = async (token) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_UPDATE_PWD_BEFORE_VERIFY_EMAIL_ENDPOINT}/${token}`
  );
  return response;
};

export const updatePasswordRequest = async (userNewPwd) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_FIND_ACCOUNT_ENDPOINT}`,
    userNewPwd
  );
  return response;
};
