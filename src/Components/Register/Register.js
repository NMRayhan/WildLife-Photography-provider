import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Spiner from "../Shared/Spiner/Spiner";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const userNameRef = useRef("");
  const addressRef = useRef("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const userName = userNameRef.current.value;
    const address = addressRef.current.value;
    await createUserWithEmailAndPassword(email, password, {
      sendEmailVerification: true,
    });
    await updateProfile({ displayName: userName });
    alert("Updated profile");
    navigate("/");
  };
  console.log(agree);

  const navigateToLogin = () => {
    navigate(`/login`);
  };

  if (loading || updating) {
    return <Spiner></Spiner>;
  }

  if (user) {
    console.log("user ", user);
  }
  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        {error?.message} {error1?.message}
      </p>
    );
  }

  return (
    <div className="mx-auto w-25">
      <Form className="py-4" onSubmit={handleSubmitForm}>
        <h1 className="text-center fs-1 text-secondary">User Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            ref={userNameRef}
            type="text"
            placeholder="Enter User name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Control
            type="text"
            placeholder="User Address"
            ref={addressRef}
          />
        </Form.Group>
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

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
            className="form-check-input"
          />
          <label
            htmlFor="terms"
            className={
              agree
                ? "form-check-label ms-1 text-secondary"
                : "form-check-label ms-1 text-danger"
            }
          >
            Accept Terms & Conditions
          </label>
        </Form.Group>

        <Button
          variant="secondary"
          type="submit"
          className="w-50 d-block mx-auto"
          disabled={agree ? false : true}
        >
          Register
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          className="text-danger text-decoration-none"
          to="/login"
          onClick={navigateToLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      {errorElement}
      <SocialLogin />
    </div>
  );
};

export default Register;
