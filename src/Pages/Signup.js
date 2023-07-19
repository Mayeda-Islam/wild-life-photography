import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { SignUpWithEmail } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SignUpWithEmail(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        fetch(`https://wild-life-photography-server-mu.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("photo-Token", data.token);
            console.log(data.token);
            navigate(from, { replace: true });
          });
        //
        // const user=result.user
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL,
        })
          .then((result) => {})
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid md:grid-cols-1 ">
        <div className="text-center ">
          <h1 className="text-5xl  text-center font-bold">Sign Up!</h1>
        </div>
        <form
          onSubmit={handleSignUp}
          className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl py-8  bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p className="text-center mt-5">
              Already have an account? please{" "}
              <Link className="text-purple-600" to={"/login"}>
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
