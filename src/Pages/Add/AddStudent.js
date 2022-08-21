import React from "react";
import { useForm } from "react-hook-form";
import classes from "./Add.module.css";

export default function AddStudent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // Category List here
  const categories = [
    { value: "web_dev", name: "Web Development" },
    { value: "android", name: "Android" },
    { value: "physics", name: "Physics" },
    { value: "chemistry", name: "Chemistry" },
    { value: "blockchain", name: "Blockchain" },
  ];

  return (
    <div className="mx-5 mt-5">
      <h1 className="text-[20px] font-semibold">Request a lesson</h1>
      <br />
      <p className="text-sm">[Please fill out the form to request a lesson]</p>
      <br />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-start items-start gap-2"
        noValidate
      >
        {/* Titlte of class  */}
        <input
          className={classes.txt__input}
          placeholder="Title"
          type="text"
          {...register("title", { required: "You must fill this field!" })}
        />
        <p className={classes.error_msg}>{errors.title?.message}</p>

        {/* Description  */}
        <textarea
          className={classes.txt__input}
          placeholder="Details"
          {...register("description", { required: false, maxLength: 100 })}
        ></textarea>
        <p></p>
        {/* Category  */}
        <select
          className={classes.selection}
          {...register("category", {
            required: "You must fill this field!",
            minLength: { value: 2, message: "You must fill this field!" },
          })}
          defaultValue="0"
        >
          <option disabled value="0">
            Select a category
          </option>
          {categories.map((category) => (
            <option value={category.value} key={category.value}>
              {category.name}
            </option>
          ))}
        </select>
        <p className={classes.error_msg}>{errors.level?.message}</p>
        {/* Level   */}
        <select
          className={classes.selection}
          {...register("level", {
            required: "You must fill this field!",
            minLength: { value: 3, message: "You must fill this field!" },
          })}
          defaultValue="0"
        >
          <option disabled value="0">
            Select your level
          </option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advance">Advance</option>
        </select>
        <p className={classes.error_msg}>{errors.level?.message}</p>
        {/* Select lesson type  */}
        <select
          className={classes.selection}
          {...register("type", {
            required: "You must fill this field!",
            minLength: { value: 3, message: "You must fill this field!" },
          })}
          defaultValue="0"
        >
          <option disabled value="0">
            Select lesson type
          </option>
          <option value="individual">Individual</option>
          <option value="groupA">Group (3-5)Peoples</option>
          <option value="groupB">Group (5-10)Peoples</option>
          <option value="groupC">Group (10-15)Peoples</option>
          <option value="groupZ">Group of Unlimited Peoples</option>
        </select>
        <p className={classes.error_msg}>{errors.type?.message}</p>
        {/* Price  */}
        <input
          className={classes.txt__input}
          placeholder="Price"
          type="number"
          {...register("price", {
            required: "You must fill this field!",
            min: { value: 1, message: "Price must be greater than zero!" },
          })}
        />
        <p className={classes.error_msg}>{errors.price?.message}</p>
        {/* Input Date and time  */}
        <input
          className={classes.txt__input}
          placeholder="Date"
          type="date"
          {...register("date", {
            required: "You must fill this field!",
            min: {
              value: disablePastDate(),
              message: "You can't input previous date!",
            },
          })}
        />
        <p className={classes.error_msg}>{errors.date?.message}</p>
        <input
          className={classes.txt__input}
          placeholder="Time"
          type="time"
          step="900"
          {...register("time", { required: "You must fill this field!" })}
        />
        <p className={classes.error_msg}>{errors.time?.message}</p>
        {/* Submit button  */}
        <input
          className={`btn-gradient ${classes.button}`}
          type="submit"
          value="Request"
        />
      </form>
    </div>
  );
}
