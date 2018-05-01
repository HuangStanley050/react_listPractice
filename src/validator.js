import React from "react";

const Validator = (props) => {
    let input_len = props.inputLen;
    var message;
    if (input_len < 5) {
        message = "Input too short";
        //console.log(input_len);
    }
    if (input_len === 5) {
        message = "Right length";
    }
    if (input_len > 5) {
        message = "Input too long";
        //console.log(input_len);
    }
    return (
        <p>
           Validate:{message}
            </p>
    );

}

export default Validator;
