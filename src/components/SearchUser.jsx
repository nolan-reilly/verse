import { Link } from "react-router-dom";

export default function SearchUser({userName, userPic}) {
    return(
        <div className="align-center full-width margin-16 rounded-box">
            <div className="bg-medium-black gap-8 flex flex-row align-center full-width">
                {/*User profile picture*/}
                <img
                    className="width-48 rounded-full margin-16 large-circle-icon"
                    src={userPic}
                    alt="User"
                />

                {/*User name*/}
                <div className="flex flex-col">
                    <p>user</p>
                    <p className="text-small weight-700">{userName}</p>
                </div>
            </div>
        </div>
    );
}