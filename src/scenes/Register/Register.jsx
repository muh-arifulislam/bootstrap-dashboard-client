import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import useToken from "../../hooks/useToken";
import auth from "../../firebase.init";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
  const [error1, setError1] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const token = useToken(user);
  if (token) {
    navigate("/");
  }
  const onSubmit = async (data, e) => {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      data;
    const displayName = firstName + lastName;
    const passValidate =
      /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    if (!passValidate.test(password)) {
      setError1(
        "You should add minimum 1 uppercase, 1 lowercase, 1 digit and password must be minimum 8 character"
      );
    } else {
      if (password !== confirmPassword) {
        setError1("Your password and confirm password did not matched!!");
      } else {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
      }
    }
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="border border-1 rounded shadow-sm p-5 custom-w-login">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                {...register("firstName")}
                placeholder="First Name"
                className="input input-bordered"
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                {...register("lastName")}
                placeholder="Last name"
                className="input input-bordered"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                {...register("phone")}
                type="tel"
                placeholder="Phone"
                pattern="[0-9]{11}"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                {...register("password")}
                required
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                {...register("confirmPassword")}
                required
                type="password"
                placeholder="ConfirmPassword"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" className="w-100">
            Register
          </Button>
          {/* <!-- Register buttons --> */}
          <div class="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
