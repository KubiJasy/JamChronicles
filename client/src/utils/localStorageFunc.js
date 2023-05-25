const storeAccessToken = (accessToken) =>
  localStorage.setItem("accessToken", accessToken);

const getAccessToken = () => localStorage.getItem("accessToken");

const removeAccessToken = () => localStorage.removeItem("accessToken");

export { storeAccessToken, getAccessToken, removeAccessToken };
