import React from 'react';

export default function InputPersonalDetails({data, onChange}){
    return(
        <div className="input-fieldsDiv">
            <input name="name" value={data.name} onChange={onChange} key="1" />
            <input name="email" value={data.email} onChange={onChange} key="2" />
            <input name="contact" value={data.contact} onChange={onChange} key="3" />
        </div>
    )
}