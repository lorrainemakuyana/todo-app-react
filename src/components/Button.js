import React from "react"

class Button extends React.Component {

    onClick() {
        const newtodo = document.getElementById("new-todo").value;
        if (newtodo !== "") {
            this.props.onClick(newtodo)
        }
        document.getElementById("new-todo").value = ""
    }
    
    render() {
        
        const clicked = this.onClick.bind(this)

        const buttonStyle = {
            border: "1px solid lightgray",
            backgroundColor: "lightgreen",
            padding: "10px",
            borderRadius: "4px", 
            float: "right"
        }

        return (
            <button style={buttonStyle} onClick={clicked}>Add Item</button>
        )
    }

}

export default Button