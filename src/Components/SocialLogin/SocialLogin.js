import React from "react";
import google from "../../Images/google.png";
import facebook from "../../Images/facebook.png";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import Spiner from "../Shared/Spiner/Spiner";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loading1, error1] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Spiner></Spiner>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/");
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <div className="bg-secondary w-50 m-2" style={{ height: "3px" }}></div>
        <div className="fs-2">Or</div>
        <div className="bg-secondary w-50 m-2" style={{ height: "3px" }}></div>
      </div>
      {errorElement}
      <div className="py-2">
        <div className="py-2 d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-secondary w-75"
            onClick={() => signInWithGoogle()}
          >
            <img src={google} alt="" className="mx-2" />
            <span>Continue with google</span>
          </button>
        </div>
        <div className="py-2 d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-secondary w-75"
            onClick={() => signInWithFacebook()}
          >
            <img src={facebook} alt="" className="mx-2" />
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
