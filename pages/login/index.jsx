import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState();

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
      setUser(email);
      router.push("/");
    } else {
      // Handle errors
    }
  }

  return (
    <section className="login-page">
      <h1>Sign in or create an account</h1>
      <div className="form-container">
        <p>* indicates required field</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="*Username or email address"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="*Password"
            required
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
