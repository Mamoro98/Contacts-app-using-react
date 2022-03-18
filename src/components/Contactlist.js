import React from "react";
import Contactcard from "./Contactcard"

const Contactlist = (props) => {
    console.log(props);
    const deletecontact = (id) => {
        props.getcontactid(id);
    }
    const renderlist = props.contact.map((contact) => {
        return (
            <Contactcard contact={contact} clickhandler={deletecontact} key={contact.id} />
        );
    });
    return <div className='ui celled list'>{renderlist}</div>;
};


export default Contactlist;