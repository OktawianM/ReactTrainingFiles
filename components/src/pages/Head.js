import Contact from "./Contact";

function Head() {

    const textToPass = "String redirected to Contact.js";
    const functionToPass = (sampleTxt) => {
        return (<h1>{sampleTxt}</h1>);
    }

    return (
        <>
            <h2>This is Head Page</h2>
            <Contact setTxt={functionToPass} />
        </>
    )
}

export default Head