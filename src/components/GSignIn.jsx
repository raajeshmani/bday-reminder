import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import CalendarPermisssion from "./CalendarPermisssion";

const GSignIn = ({ accessToken, setAccessToken }) => {
  const [tokenResponse, setTokenResponse] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setAccessToken(tokenResponse.access_token);
      setTokenResponse(tokenResponse);
    },
    scope: "https://www.googleapis.com/auth/calendar.events",
  });

  return (
    <div>
      {!accessToken && (
        <button className="button" onClick={() => login()}>
          Connect with Google
        </button>
      )}
      <CalendarPermisssion tokenResponse={tokenResponse} />
    </div>
  );
};

export default GSignIn;
