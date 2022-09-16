import React from 'react';

export default function InputProjectDetails({data, onChange}){
    return(
        <div className="input-fieldsDiv">
            <input name="projectName" value={data.projectName} onChange={onChange} key="7" />
            <input name="madeUsing" value={data.madeUsing} onChange={onChange} key="8" />
            <input name="impLearning" value={data.impLearning} onChange={onChange} key="9" />
        </div>
    )
}