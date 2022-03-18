import React from "react";

const Contactcard = (props) => {
    return (
        <div className='item'>
                <div className='content'>
                    <div className='header'>{props.contact.name}</div>
                    <div>{props.contact.email}</div>
                </div>
            <i className='trash alternate outline icon'
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.clickhandler(props.contact.id) }    ></i>
        </div>

    );
}

export default Contactcard;