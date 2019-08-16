import React from "react";

const InlineError = props =>{
    return (
        <div className="inlineError">
            { props.message }
        </div>
    );
};


export default InlineError;