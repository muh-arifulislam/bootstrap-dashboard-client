import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const token = useToken(user || gUser);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="border border-1 rounded shadow-sm p-5 custom-w-login">
        <form onSubmit={handleLogin}>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <h2 className="fs-3 m-0">Sign In</h2>
            <div>
              <button
                onClick={() => signInWithGoogle()}
                type="button"
                class="btn btn-outline-secondary btn-sm rounded-pill mx-1"
              >
                <span>
                  <i class="bi bi-google"></i>
                </span>
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm rounded-pill mx-1"
              >
                <span>
                  <i class="bi bi-facebook"></i>
                </span>
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm rounded-pill mx-1"
              >
                <span>
                  <i class="bi bi-twitter"></i>
                </span>
              </button>
            </div>
          </div>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input ref={emailRef} type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input ref={passwordRef} type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
            <div class="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-primary btn-block mb-4 w-100">
            Sign in
          </button>

          {/* <!-- Register buttons --> */}
          <div class="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
