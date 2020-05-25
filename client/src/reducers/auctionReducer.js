import {ADD_AUCTION, READ_AUCTIONS, EDIT_AUCTION, DELETE_AUCTION, AUCTIONS_LOADING} from "../actions/auctions/types";

const initialState = {
    auctions:[],
    loading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case READ_AUCTIONS:
            return{
                ...state,
                auctions:action.payload,
                loading:false
            }
        case DELETE_AUCTION:
            return{
                ...state,
                auctions: state.auctions.filter(auction=>auction.id!==action.payload)
            }
        case ADD_AUCTION:
            return{
                ...state,
                auctions:[action.payload, ...state.auctions]
            }
        case AUCTIONS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}