import React from 'react';
import { Table } from 'reactstrap';
import {read_Auctions, add_Auction, edit_Auction, delete_Auction} from "../actions/auctions/action";
import {connect} from "react-redux";
import "../public/css/Account.css";
import img from "../public/img/abc.jpg";

function AuctionsList(props) {
    // onDeleteClick=(id)=>{
    //     this.props.delete_Auction(id);
    // }
    const onDeleteAuction = (id)=>{
        delete_Auction(id);
    }
    return (
        <div>
        <div className="filterDiv" >
            <h5>Filter by Date</h5>
            <form>
                <select>
                <option>Latest</option>
                </select>
                <i className="ion-funnel" ></i>
            </form>
        </div>
        <div className="auctionList" >
                        <div className="myAuction" ></div>
                        {
                            props.allAuctions.map(auction=>(
                                <div className="myAuction" key={auction._id} >
                                    <img src={img} ></img>
                                    <div className="detailS" >
                                        <h6><b>Date</b> :{auction.auctionStart}</h6>
                                        <h6><b>item</b> :{auction.itemName}</h6>
                                        <h6><b>deadline</b> :{auction.auctionEnd}</h6>
                                    </div>                                
                                    <div className="buttonList">
                                        <button>
                                            <i className="ion-android-create" ></i>
                                        </button>
                                        <button className="danger" onClick={onDeleteAuction.bind(this, auction._id)}>
                                            <i className="ion-android-delete" ></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
        </div>
    </div>
    )
}



const mapStateToProps = (state)=>{
    return{
        allAuctions:state.auctions.auctions
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        readAuctions: dispatch(read_Auctions),
        addAuctions: (data)=>{
            dispatch(add_Auction(data))
        },
        editAuctions: (id)=>{
            dispatch(edit_Auction(id))
        },
        deleteAuction: (id)=>{
            dispatch(delete_Auction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsList);