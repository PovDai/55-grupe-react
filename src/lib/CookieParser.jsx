import { useEffect } from "react";

export function CookieParser() {
  useEffect(() => {
    const cookies = parseCookies();
    console.log("Slapukai:", cookies);
    console.log("authToken:", cookies.authToken);
  }, []);

  return <h1>React Cookies Parser</h1>;
}