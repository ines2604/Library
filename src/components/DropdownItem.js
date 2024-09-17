import React from "react";

function DropdownItem({item,fonction}){
    return(
        <div>
            <li><button className="btn btn-outline-success dropdown-item" onClick={() => fonction(item)} >{item}</button></li>
        </div>
    )
}

export default DropdownItem