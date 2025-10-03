import { api } from "./client";
import { getRefreshToken, setTokens } from "../utils/storage";

export async function refreshTokens() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error("No refresh token available");

  const { data } = await api.post<{
    access_token: string;
    refresh_token: string;
  }>("/auth/refresh", { refresh_token: refreshToken });

  setTokens(data.access_token, data.refresh_token);
  return data.access_token;
}

export async function login(username: string, password: string) {
  const response = await api.post<{
    access_token: string;
    refresh_token: string;
  }>("/account/api/Account/Login", { username, password });

  if (response.status === 200) {
    const { data } = response;
    setTokens(data.access_token, data.refresh_token);

    localStorage.setItem("userData", JSON.stringify(data));

    return { status: response.status, data };
  } else {
    throw new Error("Login failed");
  }
}
