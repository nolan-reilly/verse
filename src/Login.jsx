import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white lg-flex vh-100 relative overflow-hidden">
      <div className="container py-32 lg-px-64 flex flex-col gap-32">
        {/* Logo */}
        <div className="flex flex-row justify-end">
          <img className="width-48" src="./star.svg" alt="Star" />
        </div>

        {/* Form Content */}
        <div className="flex flex-col align-center gap-44 flex-1">
          <p className="color-black text-large weight-700">Verse</p>

          <div className="flex flex-row justify-around bg-black full-width p-4 border-radius">
            <div
              className={`flex-1 p-2 cursor-pointer transition-all ${
                isLogin ? "bg-white rounded-left" : "bg-black"
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
              className={`flex-1 p-2 cursor-pointer transition-all ${
                !isLogin ? "bg-white rounded-right" : "bg-black"
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
              className="text-input"
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
                className="text-input"
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
                className="text-input"
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
