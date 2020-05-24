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
        props.deleteAuction(id);
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
                <div className="singleAuction" >
                <Table cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Auction ends</th>
                                <th>Item Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.allAuctions.map(auction=>(
                                    <tr key={auction.id}>
                                        <td>{auction.seller}</td>
                                        <td>{auction.auctionEnds}</td>
                                        <td>
                                            <img src={img} alt="itemImage"/>
                                        </td>
                                        <td>
                                            <div className="buttons">
                                                <button>
                                                    <i className="ion-android-create" ></i>
                                                    Edit
                                                </button>
                                                <button className="danger" onClick={onDeleteAuction.bind(this, auction.id)}>
                                                    <i className="ion-android-delete" ></i>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
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