import React, { useState, useEffect } from "react";

const UserDisplay = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  const getCurrentUser = async () => {
    const url = `http://webstaging2/pjptest/api/userlookup.php`;

    try {
      const response = await fetch(url, {
        withCredentials: true,
        credentials: "include",
      });
      const responseJson = await response.json();
      console.log(responseJson);
      setUserData(responseJson);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <h1>Data loading....</h1>
      </div>
    );
  }
  if (isError || userData[0].Error) {
    return (
      <div className="text-center">
        <h1>There has been a problem loading data.</h1>
      </div>
    );
  }
  return (
    <div>
      <p>Display Name - {userData[0].displayName}</p>
      <p>Login - {userData[0].SAMAccountName}</p>
      <p>Name - {userData[0].firstname}</p>
      <p>Surname - {userData[0].lastname}</p>
      <p>Title - {userData[0].jobtitle}</p>
      <p>Office- {userData[0].office}</p>
      <p>Phone - {userData[0].telephonenumber}</p>
    </div>
  );
};
export default UserDisplay;
