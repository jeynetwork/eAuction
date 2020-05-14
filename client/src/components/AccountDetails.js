import React from 'react';
import Calendar from "./Calendar";
import { calendarFormat } from 'moment';
import "../public/css/side.css";
import "../public/css/Account.css";

function AccountDetails() {
    return (
        <div className="sideDiv" >
            <div className="accountDetails" >
                <h5>Account holder</h5>
                <div className="holderImage" >
                    <div className="img" >
                        <img src="" alt="himg"/>
                        &emsp;<span>jeymwira@gmail.com</span>
                    </div>
                    <div>
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
