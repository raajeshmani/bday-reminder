import React, { useCallback, useEffect, useState } from "react";

const UserInfo = ({ email, setEmail, accessToken }) => {
  const [name, setName] = useState("");

  const getUserInfo = useCallback(() => {
    fetch(
      "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setName(data?.names[0]?.displayName);
        setEmail(data?.emailAddresses[0]?.value);
      });
  }, [accessToken, setEmail]);

  useEffect(() => {
    accessToken && getUserInfo();
  }, [accessToken, getUserInfo]);

  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "0 1rem" }}>
      <span className="text" style={{ marginRight: "0.5rem" }}>{`Hi, ${
        name ? name : "Guest user"
      }!`}</span>
      <span className="text">{`${email && ` @ ${email}`}`}</span>
    </div>
  );
};

export default UserInfo;
