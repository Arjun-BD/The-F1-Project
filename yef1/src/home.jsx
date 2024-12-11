import React from "react";
import { useAuth } from "./contexts/authContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div>Hello, you ae now logged in, your email is {currentUser.email}</div>
  );
};

export default Home;
