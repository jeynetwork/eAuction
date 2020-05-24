import React from 'react';
import { Table } from 'reactstrap';
import "../public/css/auctions.css";
import {connect} from "react-redux";
import {read_Auctions} from "../actions/auctions/action";
import img from "../public/img/abc.jpg";

function AuctionsTable(props) {
  return (
    <div className="rightSideDiv">
        <div className="filterDiv" >
          <h5>Filter by category</h5>
          <form>
            <select>
              <option>categoryOne</option>
            </select>
            <i className="ion-funnel" ></i>
          </form>
        </div>
        <Table cellSpacing="0">
            <thead>
                <tr>
                <th></th>
                <th>Date</th>
                <th>Seller</th>
                <th>Auction ends</th>
                <th>Auction Item</th>
                <th>Auction Image</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            
                {
                    props.allAuctions.map((auction)=>(
                      <tr key={auction.id}>
                        <th scope="row">#</th>
                        <td>{auction.auctionStart}</td>
                        <td>{auction.seller}</td>
                        <td>{auction.auctionEnds}</td>
                        <td>{auction.productName}</td>
                        <td>
                          <img src={img} alt="itemImage"/>
                        </td>
                        <td>
                          <button>
                            <i className="ion-eye" ></i>
                            View auction
                          </button>
                        </td>
                      </tr>
                    ))
                }
            </tbody>
        </Table>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    allAuctions:state.auctions.auctions
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    readAuctions:dispatch(read_Auctions)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsTable);