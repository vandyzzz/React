import React, {useState} from "react"
import { 
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
    Container,
} from "reactstrap"
import { v4 } from "uuid"
import Todos from "./Todos"

const TodoForm = (addTodos) => {
    const [todoString, setTodoString] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if (todoString ===""){
            return alert("please fill some value")
        }

        const todo = {
            todoString,
            id: v4()

        };
        
        addTodos(todo);
        setTodoString("");
    }
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id="todo"
                placeholder="enter a Todo string"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Button 
                color="success">Add TODO</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}

export default TodoForm;