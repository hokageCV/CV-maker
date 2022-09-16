import React from 'react';

export default function InputEduDetails({data, onChange}){
    return(
        <div className="input-fieldsDiv">
            <input name="college" value={data.college} onChange={onChange} key="4" />
            <input name="degree" value={data.degree} onChange={onChange} key="5" />
            <input name="passingYear" value={data.passingYear} onChange={onChange} key="6" />
        </div>
    )
}