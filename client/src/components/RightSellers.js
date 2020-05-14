import React from 'react'

function RightSellers() {
    return (
        <div className="rightSideDiv" >
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
    )
}

export default RightSellers
