import React, {useState} from 'react';
import {add_Auction} from "../actions/auctions/action";
import {connect} from "react-redux";

function NewAuction(props) {

    const [values, setValues] = useState({
        seller:"",
        itemName:"",
        image:"",
        quantity:"",
        minPrice:"",
        auctionStart:"",
        auctionEnd:"",
        auctionDescription:""
    })
    const onChangeData = (e)=>{
        let key = e.target.id;
        let value = e.target.value;
        setValues(values=>({
            ...values,
            [key]:value
        }))
    }
    const onSubmittedAuction=()=>{
        console.log(values);
        add_Auction(values);
    }
    return (
        <div>
        <h5>New Auction</h5> 
        <form>
            <label>Seller</label>
            <input type="text" id="seller" onChange={onChangeData} />
            <label>product Name</label>
            <input type="text" id="itemName" onChange={onChangeData} />
            <label>Image</label>
            <input type="text" id="image" onChange={onChangeData} />
            <label>Quantity</label>
            <input type="text" id="quantity" onChange={onChangeData} />
            <label>Price</label>
            <input type="text" id="minPrice" onChange={onChangeData} />
            <label>Start</label>
            <input type="text" id="auctionStart" onChange={onChangeData} />
            <label>deadline</label>
            <input type="text" id="auctionEnd" onChange={onChangeData} />
            <label>Description</label>
            <input type="text" id="auctionDescription" onChange={onChangeData} />
            <div className="buttons">
                <button type="button" onClick={onSubmittedAuction} >
                    New Auction
                </button>
            </div>
        </form>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        allAuctions: state.auctions.auctions
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addAuction:(data)=>{
            dispatch(add_Auction(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAuction)
