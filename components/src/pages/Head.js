import Contact from "./Contact";

function Head() {

    const textToPass = "String redirected to Contact.js";
    const functionToPass = () => {
        alert("Welcome in fuction");
    }

    return (
        <>
            <h2>This is Head Page</h2>
            <Contact xxx={functionToPass} />
        </>
    )
}

export default Head