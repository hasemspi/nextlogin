"use client";
import { useState } from "react";
import Footersection from "../componets/footer/page";
import Navber from "../componets/navber/page";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
// console.log(email,password);
  const handleLogin = async (e) => {
   
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost/nextlogin/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

      
      const data = await res.json();

      if (data.success) {
        // alert("Hello Dashboard");
        console.log("User:", data.user);
        // 🔹 Example: Redirect user
        window.location.href = "/about";
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navber />

      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <form
          onSubmit={handleLogin}
          className="card bg-base-100 w-96 shadow-sm"
        >
          <div className="card-body">
            <h2 className="card-title">User Login</h2>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Email</label>
              <input
                type="email"
                 value={email}
                className="input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className={`btn btn-neutral mt-4 ${loading ? "loading" : ""}`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </fieldset>
          </div>
        </form>
      </div>

      <Footersection />
    </div>
  );
};

export default LoginForm;
