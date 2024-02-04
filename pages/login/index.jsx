import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/");
    } else {
      if (response.status === 401) {
        setError("Wrong email or password");
      }
    }
  }

  return (
    <section className="login-page">
      <h1>Sign in or create an account</h1>
      <div className="form-container">
        <p>* indicates required field</p>
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <input placeholder="*Email address" name="email" required />
            <input
              type="password"
              placeholder="*Password"
              name="password"
              required
            />
          </div>
          {error && <p>{error}</p>}
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}
