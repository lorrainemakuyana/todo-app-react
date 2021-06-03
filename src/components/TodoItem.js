import React from "react"

class TodoItem extends React.Component {
    
    /* constructor() {
        super(); 
        
    } */

    render() {
        const { text, completed, id } = this.props.item;
        const { handleChange } = this.props;

        const onChange = () => {
            handleChange(id); 
        }

        const completedStyle = {
            fontStyle: 'italic', 
            color: '#cdcdcd', 
            textDecoration: 'line-through'
        }

        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={onChange}
                    
                />
                <p style={this.props.item.completed ? completedStyle : null}>{text}</p>
            </div>
        )
    }
}

export default TodoItem