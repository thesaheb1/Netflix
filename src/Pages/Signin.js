import { RxCrossCircled } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  async function submitHandler(data) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Sign in successfully");
      navigate("/browse");
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem("SignInEmail") &&
      localStorage.getItem("SignInPassword")
    ) {
      setValue("email", localStorage.getItem("SignInEmail"));
      setValue("password", localStorage.getItem("SignInPassword"));
    }
    return () => {
      localStorage.removeItem("SignInEmail");
      localStorage.removeItem("SignInPassword");
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-full min-h-fit sm:min-h-[100vh] sm:bg-bg-home shadow-[inset_0px_20px_50px_50px_#000]">
      <div className="w-full min-h-full bg-black/40 sm:absolute sm:inset-0 flex justify-center items-center">
        <div className="w-[450px] h-fit bg-black/80 p-8 sm:p-16 mt-10">
          <p className="text-white text-4xl font-bold">Sign In</p>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="pt-8 pb-4 flex flex-col justify-center items-start gap-4"
          >
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
              disabled={loading}
              type="submit"
              className="text-white bg-netflix py-2 px-4 font-medium rounded-md w-full hover:bg-netflixDark transition-all duration-200"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          <div className="w-full flex justify-center">
            <p className="text-white cursor-pointer w-fit hover:text-white/50 hover:underline">
              Forgot Password?
            </p>
          </div>
          <div className="flex justify-start gap-2 text-white mt-8">
            <input type="checkbox" className="cursor-pointer" />
            <p>Remember me</p>
          </div>
          <p className="text-white/50 text-base my-4">
            New to Netflix?{" "}
            <Link
              to="/signup"
              className="text-white hover:underline transition-all duration-200"
            >
              Sign up now
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

export default Signin;
