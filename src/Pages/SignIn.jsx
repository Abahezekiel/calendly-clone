import React, { useEffect } from "react";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  // Use the Clerk useSignIn hook to handle the sign-in process
  useEffect(() => {
    // This checks if the user is already signed in, if so, redirect them to the home page
    if (localStorage.getItem("userLoggedIn")) { // Example: you can also use Clerk's user state to determine if logged in
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className=" h-screen bg-red-500 flex justify-center items-center">
      <SignIn redirectUrl={"/Dashboard"} />
    </div>
  );
};

export default SignInPage;
