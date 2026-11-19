import styled from "styled-components";

export const Container = styled.div`
    max-width: 480px;
    margin: 80px auto;
    padding: 30px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    flex: 1;
    padding: 12px 20px;
    font-size: 1rem;
    border: 2px solid #e1e1e1;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: #6366f1;
    }
`;

export const SubmitButton = styled.button`
    padding: 12px 20px;
    background-color: #6366f1;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #4f46e5;
    }
`;

export const Divider = styled.hr`
    border: none;
    height: 1px;
    background-color: #eaeaea;
    margin: 20px 0;
`;

export const List = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: #f9fafb;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f3f4f6;
    }
`;

export const TodoText = styled.span<{ $completed: boolean }>`
    flex: 1;
    font-size: 1rem;
    color: ${({ $completed }) => ($completed ? "#9ca3af" : "#1f2937")};
    word-break: break-all;
    margin-right: 10px;
    text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
`;

export const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 6px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;
