import { Link } from "react-router-dom";

export default function SearchCommunity({ comName, comDesc, comPic }) {
  return (
    <div className="align-center full-width rounded-box">
      <div className="bg-medium-black gap-8 flex flex-row align-center justify-between full-width">
        <div className="flex flex-row gap-8">
          <img
            className="width-48 rounded-full margin-16 large-circle-icon"
            src={comPic}
            alt="User"
          />

          <div className="flex flex-col">
            <p className="text-small weight-700">{comName}</p>
            <p className="text-small weight-400">{comDesc}</p>
          </div>
        </div>

        <Link className="community-join-btn" to="/home">
          Join
        </Link>
      </div>
    </div>
  );
}
