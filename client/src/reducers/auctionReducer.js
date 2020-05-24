import {ADD_AUCTION, READ_AUCTIONS, EDIT_AUCTION, DELETE_AUCTION} from "../actions/auctions/types";

const initialState = {
    auctions:[
        {
            id:1,
            seller:"jerkas",
            productName:"sample name",
            minimumPrice:"100$",
            auctionStart:"10/10/2010",
            auctionEnds:"10/12/2010",
            image:"../public/img/abc.jpg",
            description:"sampleDescription"
        },
        {
            id:2,
            seller:"mwira",
            productName:"bycicle",
            minimumPrice:"100$",
            auctionStart:"05/10/2010",
            auctionEnds:"10/05/2020",
            image:"../public/img/abc.jpg",
            description:"sampleDescription"
        }
    ]
}

export default function(state=initialState,action){
    switch(action.type){
        case READ_AUCTIONS:
            return{
                ...state,
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
        default:
            return state;
    }
}