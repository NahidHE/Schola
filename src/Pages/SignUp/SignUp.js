import React from "react";
import Title from "../../Components/Title";
import { useForm } from "react-hook-form";
import image from "../../Assets/Images/signup.png";
import classes from "./SignUp.module.css";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mx-10 mt-5">
      <Title></Title>
      <section className="signup flex justify-around align-center">
        <div className="image-container w-[40%]">
          <img src={image} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-1/2 justify-center items-center gap-2"
          noValidate
        >
          <h1 className="text-xl font-semibold py-2">SignUp</h1>
          {/* full name input */}
          <input
            className={classes.txt__input}
            placeholder="Full Name"
            type="text"
            {...register("name", { required: "You must fill this field!" })}
          />
          <p className={classes.error_msg}>{errors.name?.message}</p>
          {/* email address input */}
          <input
            className={classes.txt__input}
            placeholder="Email Address"
            type="email"
            {...register("email", {
              required: "You must fill this field!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address!",
              },
            })}
          />
          <p className={classes.error_msg}>{errors.email?.message}</p>
          {/* password  input */}
          <input
            className={classes.txt__input}
            placeholder="Password"
            type="password"
            {...register("password", { required: "You must fill this field!" })}
          />
          <p className={classes.error_msg}>{errors.password?.message}</p>

          <input type="submit" className={`btn-gradient ${classes.button}`} />
        </form>
      </section>
    </div>
  );
}
