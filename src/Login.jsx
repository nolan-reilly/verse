import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    document.body.classList.add("login-body");
    return () => document.body.classList.remove("login-body");
  }, []);

  return (
    <div className="login-page">
      <div className="container login-card py-24 flex flex-col gap-16">
        {/* Logo */}
        <div className="flex flex-row justify-end">
          <img className="width-48" src="./star.svg" alt="Star" />
        </div>

        {/* Form Content */}
        <div className="flex flex-col align-center gap-32 flex-1">
          <p className="color-black text-large weight-700">Verse</p>

          <div className="flex flex-row justify-around bg-black full-width p-8 py-8 rounded">
            <div
              className={`flex-1 py-8 font-bold ${
                isLogin ? "bg-white rounded" : "bg-black"
              }`}
              onClick={() => setIsLogin(true)}
            >
              <p
                className={`text-center weight-500 ${
                  isLogin ? "color-black" : "color-white"
                }`}
              >
                Login
              </p>
            </div>

            <div
              className={`flex-1 py-8 font-bold ${
                !isLogin ? "bg-white rounded" : "bg-black"
              }`}
              onClick={() => setIsLogin(false)}
            >
              <p
                className={`text-center weight-500 ${
                  !isLogin ? "color-black" : "color-white"
                }`}
              >
                Register
              </p>
            </div>
          </div>

          <div className="flex flex-col full-width gap-4">
            <label className="color-black weight-300" htmlFor="email">
              Email address
            </label>
            <input
              className="login-text-input"
              type="text"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>

          <div className="flex flex-col full-width gap-16">
            <div className="flex flex-col gap-4">
              <label className="color-black weight-300" htmlFor="password">
                Password
              </label>
              <input
                className="login-text-input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <p className="color-black">Forgot Password?</p>
              </div>
            )}
          </div>

          {!isLogin && (
            <div className="flex flex-col full-width gap-4">
              <label
                className="color-black weight-300"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="login-text-input"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          )}

          <Link className="full-width login-btn" to="home">
            {isLogin ? "Login" : "Register"}
          </Link>

          <div className="flex flex-col gap-16">
            <p className="color-black weight-300">Other sign in options</p>

            <div className="flex flex-row gap-8">
              <img
                className="width-48"
                src="facebook.svg"
                alt="facebook logo"
              />
              <img className="width-48" src="github.svg" alt="Github logo" />
              <img
                className="width-48"
                src="linkedin.svg"
                alt="Linkedin logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
