function Contact(props) {

    const textToDisplay = "This text is modified by extern function from Head.js file"
    return (
        <>
            <h3>This is Contact Pages with text from Head Page: </h3>
            {props.setTxt(textToDisplay)}
        </>
    )
}

export default Contact;