import React from "react";
import Contact from "./Contact";

function Head() {

    const textToPass: string = "String redirected to Contact.js";

    return (
        <>
            <h2>This is Head Page</h2>
            <Contact passedText={textToPass} />
        </>
    )
}

export default Head