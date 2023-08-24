import React from "react"

const NavButton = ({text, link}) => {
    return (<a style={styles.button} href={link}>{text}</a>)
}

export default NavButton

const styles = {
    button: {
        backgroundColor: "white",
        color: "black",
        padding: 10
    }
}