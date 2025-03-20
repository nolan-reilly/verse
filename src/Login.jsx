import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="lg-flex vh-100 relative overflow-hidden">
      <div className="gray-box"></div>

      <div className="container py-32 px-64 flex flex-col gap-32">
        {/* Logo */}
        <div className="flex flex-row justify-end">
          <img className="width-48" src="./star.svg" alt="Star" />
        </div>

        {/* Form Content */}
        <div className="flex flex-col align-center gap-44 flex-1">
          <p className="text-large weight-700">Verse</p>

          <div className="flex flex-row gap-16 justify-around bg-light-gray full-width p-4 border-radius">
            <div className="login-slider">
              <p className="text-center weight-500">Login</p>
            </div>

            <div className="flex-1">
              <p className="text-center weight-500">Register</p>
            </div>
          </div>

          <div className="flex flex-col full-width gap-4">
            <label className="weight-300" htmlFor="email">
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
              <label className="weight-300" htmlFor="password">
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

            <div className="flex justify-end">
              <p>Forgot Password?</p>
            </div>
          </div>

          <Link className="full-width login-btn" to="homepage">
            Login
          </Link>

          <div className="flex flex-col gap-16">
            <p className="weight-300">Other sign in options</p>

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
