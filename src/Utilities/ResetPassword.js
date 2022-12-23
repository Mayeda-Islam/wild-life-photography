import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
const ResetPassword = () => {
  const handleResetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire(`Check email.
        Already send verification mail`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <form
          onSubmit={handleResetPassword}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <div className="text-center ">
                <h1 className="text-xl font-bold">Reset Password</h1>
              </div>
              <label className="label mt-6">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="ml-32 mb-8 ">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
