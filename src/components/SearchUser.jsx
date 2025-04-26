import { Link } from "react-router-dom";

export default function SearchUser({ userName, userPic }) {
  return (
    <div className="align-center full-width rounded-box">
      <Link to="/profile" className="text-no-underline">
        <div className="bg-medium-black gap-8 flex flex-row align-center full-width">
          <img
            className="width-48 rounded-full margin-16 large-circle-icon"
            src={userPic}
            alt="User"
          />

          <div className="flex flex-col">
            <p className="text-small weight-700">{userName}</p>
            <p>@user123</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
