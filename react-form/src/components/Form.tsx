import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number({ invalid_type_error: "Age field is required." }).min(18),
});

type FormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      {errors.name && <p className="text-danger">{errors.name.message}</p>}
      <div className="bm-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          id="age"
          className="form-control"
        />
      </div>

      {errors.age && <p className="text-danger">{errors.age.message}</p>}

      <div>
        <button
          disabled={!isValid}
          className="btn btn-primary mt-3"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
