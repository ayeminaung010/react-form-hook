import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  console.log(errors);
  return (
    <div className=" mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            UserName
          </label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="form-control"
            id=""
            aria-describedby="emailHelp"
          />

          <span className=" text-danger ">
            {errors.username && errors.username?.message}
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>

          <span className=" text-danger ">
            {errors.email && errors.email?.message}
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="number"
            {...register("phone", {
              required: "Phone is required",
              maxLength: {
                value: 15,
                message: "Input must be at most 15 characters long",
              },
            })}
            className="form-control"
            id="exampleInputPhone"
          />

          <span className=" text-danger ">
            {errors.phone && errors.phone?.message}
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain at least 1 letter and 1 number",
              },
            })}
            className="form-control"
            id="exampleInputPassword1"
          />

          <span className=" text-danger ">
            {errors.password && errors.password?.message}
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirm_password", {
              required: "Confirm Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain at least 1 letter and 1 number",
              }
            })}
            className="form-control"
            id="exampleInputPasswordConfirm"
          />

          <span className=" text-danger ">
            {errors.confirm_password && errors.confirm_password?.message}
          </span>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            {...register("agree_checkbox", { required: "Accept the terms" })}
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Accept the terms & conditions
          </label>

          <div className=" text-danger ">
            {errors.agree_checkbox && errors.agree_checkbox?.message}
          </div>
        </div>
        <button type="submit" className="btn btn-info">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
