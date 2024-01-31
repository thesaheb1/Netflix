import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RxCrossCircled } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";

const HomeForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    localStorage.setItem("SignUpEmail", data.email);
    navigate("/signup");
  }
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-[65%] justify-center items-start gap-x-4 text-xl font-bold"
    >
      <label htmlFor="email" className="w-[50%] min-w-[400px]">
        <input
          className="w-full placeholder:text-base placeholder:font-[300] text-white px-4 py-3 bg-black border-2 border-netflixLine rounded-sm"
          placeholder="Email address"
          type="email"
          name="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required.",
            },
          })}
        />
        {errors?.email && (
          <span className="text-netflix text-base py-2 flex items-center gap-x-2">
            <RxCrossCircled /> {errors?.email?.message}
          </span>
        )}
      </label>
      <div className="bg-netflix hover:bg-netflixDark transition-all duration-200 py-3 rounded-sm flex-shrink-0 flex text-white">
        <button
          type="submit"
          className="px-4 flex justify-center items-center gap-2"
        >
          Get Started
          <FaChevronRight className="font-bold" />
        </button>
      </div>
    </form>
  );
};

export default HomeForm;
