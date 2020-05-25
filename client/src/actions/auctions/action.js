import axios from "axios";
import {ADD_AUCTION, READ_AUCTIONS, EDIT_AUCTION, DELETE_AUCTION, AUCTIONS_LOADING} from "./types";

export const add_Auction = auction=>{
    const request = axios({method:'post',data:auction,url:'eAuction/auctions'});
    return dispatch=>{
        request
            .then(res=>dispatch({
                type:ADD_AUCTION,
                payload:res.data
            }))
    }
}


export const read_Auctions = (dispatch)=>{
    dispatch(auctions_Loading());
    axios
        .get('eAuction/auctions')
        .then(res=>
            dispatch({
                type:READ_AUCTIONS,
                payload:res.data
            }))
    // dispatch
}

export const edit_Auction = ()=>{
    return {
        type: EDIT_AUCTION
    }
}
export const delete_Auction = id=>{
    const request = axios.delete(`eAuction/auctions/${id}`);
    return dispatch=>{
        request
            .then(res=>
            dispatch({
                type:DELETE_AUCTION,
                payload:res.data
            })
            .catch(err=>console.log(err))
        )
    }
}

export const auctions_Loading = ()=>{
    return{
        type:AUCTIONS_LOADING
    }
}