import { RxCrossCircled } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: data.fullName,
        photoURL:
          "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
      })
        .then(() => {
          toast.success("Sign up successfully");
          localStorage.setItem("SignInEmail", data.email);
          localStorage.setItem("SignInPassword", data.password);
          navigate("/signin");
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error);
          setLoading(false);
        });
    });
  }

  useEffect(() => {
    if (localStorage.getItem("SignUpEmail")) {
      setValue("email", localStorage.getItem("SignUpEmail"));
    }
    return () => {
      localStorage.removeItem("SignUpEmail");
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-full min-h-[100vh] bg-bg-home shadow-[inset_0px_20px_50px_50px_#000]">
      <div className="w-full min-h-full bg-black/40 absolute inset-0 flex justify-center items-center">
        <div className="w-[450px] h-fit bg-black/80 p-16 mt-10">
          <p className="text-white text-4xl font-bold">Sign Up</p>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="pt-8 pb-4 flex flex-col justify-center items-start gap-4"
          >
            <label htmlFor="fullName" className="w-full">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter Full name"
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "Please enter Full name.",
                  },
                })}
                className="bg-[rgba(255,255,255,0)] border border-netflixLine rounded-md text-white placeholder:text-opacity-80 w-full p-[16px]"
              />
              {errors?.fullName && (
                <span className="text-netflix flex items-center gap-x-2">
                  <RxCrossCircled /> {errors?.fullName?.message}
                </span>
              )}
            </label>
            <label htmlFor="email" className="w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email or Phone number"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter a valid email or phone number.",
                  },
                })}
                className="bg-[rgba(255,255,255,0)] border border-netflixLine rounded-md text-white placeholder:text-opacity-80 w-full p-[16px]"
              />
              {errors?.email && (
                <span className="text-netflix flex items-center gap-x-2">
                  <RxCrossCircled /> {errors?.email?.message}
                </span>
              )}
            </label>
            <label htmlFor="password" className="w-full">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter a valid password.",
                  },
                })}
                className="bg-[rgba(255,255,255,0)] border border-netflixLine rounded-md text-white placeholder:text-opacity-80 w-full p-[16px]"
              />
              {errors?.password && (
                <span className="text-netflix flex items-center gap-x-2">
                  <RxCrossCircled /> {errors?.password?.message}
                </span>
              )}
            </label>
            <button
              type="submit"
              className="text-white bg-netflix py-2 px-4 font-medium rounded-md w-full hover:bg-netflixDark transition-all duration-200"
            >
              {loading ? "Loading..." : "Sign up"}
            </button>
          </form>
          <p className="text-white/50 text-base my-4">
            Already an account?{" "}
            <Link
              to="/signin"
              className="text-white hover:underline transition-all duration-200"
            >
              Sign in
            </Link>
          </p>
          <p className="text-white/50 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue cursor-pointer hover:underline transition-all duration-200">
              Learn more.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
