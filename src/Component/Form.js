import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    <p>{JSON.stringify(data)}</p>;
    console.log(data);
  };

  const watchAll = watch(["firstname", "lastname", "age", "gender"]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>firstname</label>
        <input name="firstname" ref={register({ required: true })}></input>
        {errors.firstname && "first name is required"}
        <br />
        <label>lastname</label>
        <input name="lastname" ref={register({ required: true })}></input>
        {errors.lastname && "last name is required"}

        <br />
        <label>age</label>
        <input
          type="number"
          name="age"
          ref={register({ required: true, maxLength: 3 })}
        ></input>
        {errors.age?.type === "required" && "age is required"}
        {errors.age?.type === "maxLength" && "maxLength must be 3"}
        <br />
        <label>Gender:</label>
        <select
          id="spaceleft"
          style={{ marginTop: "20px" }}
          ref={register({ required: true })}
          name="gender"
        >
          <option value="male" name="gender.male">
            male
          </option>
          <option value="female" name="gender.female">
            female
          </option>
        </select>
        <input type="submit" />
      </form>
      <pre>{JSON.stringify(watchAll, null, 2)}</pre>
    </div>
  );
}

export default Form;
