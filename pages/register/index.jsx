import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  const schema = yup
    .object({
      email: yup.string().email("must be a valid email").required(),
      password: yup
        .string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .matches(/(?=.*[A-Z])/, "Password must consist of one Capital letter.")
        .matches(/(?=.*\d)/, "Password must consist of one digit.")
        .required("No password provided."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    const { email, password } = data;

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log(email);
      setUser(email);
      router.push("/");
    } else {
      if (response.status === 409) {
        setError("User with this email already exists");
      }
    }
  }

  return (
    <section className="login-page">
      <h1>Sign in or create an account</h1>
      <div className="form-container">
        <p>* indicates required field</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-fields">
            <input
              placeholder="*Email address"
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.email && <p>{errors.email?.message}</p>}
            <input
              type="password"
              placeholder="*Password"
              {...register("password", { pattern: passwordRegex })}
            />
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
          {error && <p>{error}</p>}
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}
