import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Spiner from "../Shared/Spiner/Spiner";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    navigate(from, { replace: true });
  };

  const handleResetEmail = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Reset email send");
    }else{
      toast("Please Provide a valid email address")
    }
  };

  if (error) {
    toast(error.message);
  }

  if (loading || sending) {
    return <Spiner></Spiner>;
  }

  const navigateToRegister = () => {
    navigate(`/register`);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="mx-auto w-25">
      <Form className="py-4" onSubmit={handleSubmitForm}>
        <h1 className="text-center fs-1 text-secondary">User Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="secondary"
          type="submit"
          className="w-50 d-block mx-auto"
        >
          Login
        </Button>
      </Form>
      <p>
        New to Genius Car?{" "}
        <Link
          className="text-danger text-decoration-none"
          to="/register"
          onClick={navigateToRegister}
        >
          Please Register
        </Link>{" "}
      </p>
      <p className="mt-2">
        Forget password?{" "}
        <button className="btn btn-link" onClick={handleResetEmail}>
          Reset password
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
