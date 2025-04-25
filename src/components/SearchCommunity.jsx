import { Link } from "react-router-dom";

export default function SearchCommunity({comName, comDesc, comPic}) {
    return(
        <div className="align-center full-width margin-16 rounded-box">
            <div className="bg-medium-black gap-8 flex flex-row align-center full-width">
                {/*User profile picture*/}
                <img
                    className="width-48 rounded-full margin-16 large-circle-icon"
                    src={comPic}
                    alt="User"
                />

                {/*User name and last message*/}
                <div className="flex flex-col">
                    <p className="text-small weight-700">{comName}</p>
                    <p className="text-small weight-400">{comDesc}</p>
                </div>

                {/*Camera icon, moved all the way to the right end*/}
                <div className="flex flex-row align-flex-end gap-8 p-8 margin-16" style={{marginLeft: 'auto'}}>
                    <button className="bg-light-black border-radius" style={{width: '120px'}}>Join</button>
                </div>
            </div>
        </div>
    );
}