
"use client";

import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    const logoutUser = async () => {
      try {
        // ✅ Call backend logout
        const res = await fetch("http://localhost/nextlogin/backend/logout.php", {
          method: "POST",
          credentials: "include", // important for session-based logout
        });

        const data = await res.json();

        if (data.success) {
          alert("You have been logged out successfully!");
        } else {
          console.warn("Logout failed:", data.message);
        }

        // ✅ Redirect to login page
        window.location.href = "/login";
      } catch (err) {
        console.error("Logout error:", err);
        window.location.href = "/login";
      }
    };

    logoutUser();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Logging out...</h2>
        <p className="text-sm text-gray-500">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Logout;
