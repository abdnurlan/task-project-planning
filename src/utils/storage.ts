export function getAccessToken() {
  return (
    localStorage.getItem("auth_access_token") ||
    sessionStorage.getItem("auth_access_token")
  );
}

export function getRefreshToken() {
  return (
    localStorage.getItem("auth_refresh_token") ||
    sessionStorage.getItem("auth_refresh_token")
  );
}

export function setTokens(accessToken: string, refreshToken: string) {
  const storage = localStorage.getItem("auth_refresh_token")
    ? localStorage
    : sessionStorage;
  storage.setItem("auth_access_token", accessToken);
  storage.setItem("auth_refresh_token", refreshToken);
}
