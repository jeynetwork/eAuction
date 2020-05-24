import React from 'react';
import Calendar from "./Calendar";
import { calendarFormat } from 'moment';
import "../public/css/side.css";
import "../public/css/Account.css";
import img from "../public/img/abc.jpg";

function AccountDetails() {
    return (
        <div className="sideDiv" >
            <div className="accountDetails" >
                <h5>Account holder</h5>
                <div className="holderImage" >
                    <div className="img" >
                        <img src={img} alt="himg"/>
                    </div>
                    <div>
                        <p>email : jeymwira@gmail.com</p>
                        <p>contact : 070 65 63347</p>
                        <p>Address : Kampala/Uganda</p>
                    </div>
                </div>
                <div className="buttons" >
                    <button>
                        <i className="ion-edit" ></i>
                        Edit profile
                    </button>
                </div>
            </div>
            <Calendar/>
        </div>
    )
}

export default AccountDetails
