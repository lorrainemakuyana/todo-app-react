import React from "react"
import Button from "./components/Button"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            console.log(prevState.todos)
            console.log(updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    }

    handleOnClick(text) {

        const newTodo = {
            id: this.state.todos.length,
            text: text, 
            completed: false
        }
        this.setState(prevState => {
            return {
                todos: [...prevState.todos, newTodo]
            }
        })
    }
    
    render() {

        const enterStyle = {
            height: '50px', 
            width: "300px",  
            padding: "20px 10px 0 10px"
        }

        const inputStyle = {
            border: "1px solid lightgray",
            width: "200px", 
            float: "left", 
            padding: "10px"
        }

        const handleChange = this.handleChange.bind(this)
        const clicked = this.handleOnClick.bind(this)

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
                <div style={enterStyle}>
                    <input type="text" style={inputStyle} id="new-todo" placeholder="Enter new to do item here..." /> 
                    <Button onClick={clicked} />
                </div>
            </div>
        )    

    }
}

export default App