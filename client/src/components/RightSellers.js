import React from 'react';
import "../public/css/auctions.css";

function RightSellers() {
    return (
        <div className="rightSideDiv" >
        <div className="filterDiv" >
            <h5>Filter sellers by category</h5>
            <form>
                <select>
                <option>categoryOne</option>
                </select>
                <i className="ion-funnel" ></i>
            </form>
        </div>
        <div>
        <div className="singleBidder" >
                <div className="bidderImage" ></div>
                <div className="bidderDetails">
                    <h5>
                        <span>Seller name</span>
                        <i className="ion-android-favorite-outline" ></i>
                    </h5>
                    <span>
                        About sellerAbout sellerAbout sellerAbout sellerAbout sellerAbout sellerAbout sellerAbout sellerAbout seller
                        About sellerAbout sellerAbout sellerAbout sellerAbout sellerAbout sellerAbout sellerAbout sellerAbout seller
                    </span>
                    <div className="buttons" >
                        <button>
                            <i className="ion-android-globe" ></i>
                            Visit Seller
                        </button>
                        <button>
                            <i className="ion-thumbsup" ></i>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RightSellers
