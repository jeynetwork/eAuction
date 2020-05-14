import React from 'react'

function NewAuction() {
    return (
        <div>
           <h5>New Auction</h5> 
           <form>
            <label for="name">product Name</label>
            <input type="text" id="name"/>
            <label for="name">Minimum price</label>
            <input type="text" id="name"/>
            <label for="name">Auction start</label>
            <input type="text" id="name"/>
            <label for="name">Auction ends</label>
            <input type="text" id="name"/>
            <label for="name">Image</label>
            <input type="text" id="name"/>
            <label for="name">Description</label>
            <input type="text" id="name"/>
            <div className="buttons">
                <button>
                    New Auction
                </button>
            </div>
           </form>
        </div>
    )
}

export default NewAuction
