import Contact from "./Contact";

function Head() {

    const textToPass = "String redirected to Contact.js";

    return (
        <>
            <h2>This is Head Page</h2>
            <Contact passedText={textToPass} />
        </>
    )
}

export default Head