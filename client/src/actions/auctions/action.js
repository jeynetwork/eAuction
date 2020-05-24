import {ADD_AUCTION, READ_AUCTIONS, EDIT_AUCTION, DELETE_AUCTION} from "./types";

export const add_Auction = (auction)=>{
    return {
        type: ADD_AUCTION,
        payload:auction
    }
}
export const read_Auctions = ()=>{
    return {
        type: READ_AUCTIONS
    }
}
export const edit_Auction = ()=>{
    return {
        type: EDIT_AUCTION
    }
}
export const delete_Auction = (id)=>{
    return {
        type: DELETE_AUCTION,
        payload:id
    }
}