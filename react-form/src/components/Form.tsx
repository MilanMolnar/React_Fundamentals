import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      {errors.name?.type === "minLength" && (
        <p className="text-danger">Name field needs to be 3 chars long!</p>
      )}
      {errors.name?.type === "required" && (
        <p className="text-danger">Name field is required!</p>
      )}
      <div className="bm-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true })}
          type="number"
          id="age"
          className="form-control"
        />
      </div>

      {errors.age?.type === "required" && (
        <p className="text-danger">Age field is required!</p>
      )}

      <div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
