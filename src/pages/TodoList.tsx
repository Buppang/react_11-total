import { type ChangeEvent, type SubmitEvent, useState } from "react";
import {
    Container,
    Title,
    Form,
    Input,
    SubmitButton,
    Divider,
    List,
    ListItem,
    TodoText,
    ActionButton,
} from "../styles/TodoStyle.tsx";

type Todo = {
    text: string;
    completed: boolean;
};

function App() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [todoValue, setTodoValue] = useState<string>("");

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoValue(event.target.value);
    };

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newText = todoValue.trim();
        if (newText === "") {
            return;
        }
        setTodoList([...todoList, { text: newText, completed: false }]);
        setTodoValue("");
    };

    const handleDeleteTodo = (target: number) => {
        const result = todoList.filter((_, index) => {
            return target !== index;
        });
        setTodoList(result);
    };

    const handleToggleTodo = (index: number) => {
        const newTodoList = todoList.map((item, i) => {
            if (i !== index) {
                return item;
            }
            return { ...item, completed: !item.completed };
        });

        setTodoList(newTodoList);
    };

    return (
        <Container>
            <Title>My ToDoList ({todoList.length})</Title>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Write your to do"
                    onChange={handleOnChange}
                    value={todoValue}
                />

                <SubmitButton type="submit">Add To Do</SubmitButton>
            </Form>

            <Divider />

            <List>
                {todoList.map((item, index) => (
                    <ListItem key={index}>
                        <TodoText $completed={item.completed}>{item.text}</TodoText>

                        <ActionButton onClick={() => handleToggleTodo(index)}>
                            {item.completed ? "DONE" : "NOT"}
                        </ActionButton>

                        <ActionButton onClick={() => handleDeleteTodo(index)}>❌</ActionButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default App;