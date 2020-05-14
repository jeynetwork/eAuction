import React from 'react';
import "../public/css/side.css";
import "../public/css/bidders.css";

function RightBidders() {
    return (
        <div className="rightSideDiv" >
            <div className="singleBidder" >
                <div className="bidderImage" ></div>
                <div className="bidderDetails">
                    <h5>
                        <span>Bidder name</span>
                        <i className="ion-android-favorite-outline" ></i>
                    </h5>
                    <span>
                        About bidderAbout bidderAbout bidderAbout bidderAbout bidderAbout bidderAbout bidderAbout bidderAbout bidder
                        About bidderAbout bidderAbout bidderAbout bidderAbout bidderAbout bidderAbout bidderAbout bidderAbout bidder
                    </span>
                    <div className="buttons" >
                        <button>
                            <i className="ion-android-globe" ></i>
                            Visit Bidder
                        </button>
                        <button>
                            <i className="ion-thumbsup" ></i>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBidders
