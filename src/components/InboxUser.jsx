import React from "react";
import { Link } from "react-router-dom";

export default function InboxUser({ profileURL, username, lastmsg }) {
  return (
    <div className="align-center full-width margin-16 rounded-box">
      <Link to="/messaging" className="full-width text-no-underline">
        <div className="bg-medium-black gap-8 flex flex-row align-center full-width">
          {/*User profile picture*/}
          <img
            className="width-48 rounded-full margin-16 large-circle-icon"
            src={profileURL}
            alt="User"
          />

          {/*User name and last message*/}
          <div className="flex flex-col">
            <p className="text-small weight-700">{username}</p>
            <p className="text-small weight-400">{lastmsg}</p>
          </div>

          {/*Camera icon, moved all the way to the right end*/}
          <div
            className="flex flex-row align-flex-end gap-8 p-8 margin-16"
            style={{ marginLeft: "auto" }}
          >
            <img
              className="width-32 svg-white"
              src="./camera.svg"
              alt="Take Picture"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
