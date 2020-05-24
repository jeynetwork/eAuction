import {combineReducers} from "redux";
import auctionReducer from "./auctionReducer";

export default combineReducers({
    auctions: auctionReducer
})