import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import "./App.css";
import AddEventToCalendar from "./components/AddEventToCalendar";
import GSignIn from "./components/GSignIn";
import UserInfo from "./components/UserInfo";

const BDAY_REMINDER_CLIENT_ID =
  "179964905007-i6pajb5ior8a5ppk2irp7jen9gefr1ku.apps.googleusercontent.com";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <GoogleOAuthProvider clientId={BDAY_REMINDER_CLIENT_ID}>
          {accessToken ? (
            <>
              <UserInfo
                email={email}
                setEmail={setEmail}
                accessToken={accessToken}
              />
              <AddEventToCalendar email={email} accessToken={accessToken} />
            </>
          ) : (
            <GSignIn
              accessToken={accessToken}
              setAccessToken={setAccessToken}
            />
          )}
        </GoogleOAuthProvider>
      </header>
      <footer className="App-footer">
        <span>Github — bday-reminder</span>
        <span>@raajeshmani</span>
      </footer>
    </div>
  );
}

export default App;
