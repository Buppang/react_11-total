import styled from "styled-components";
import { Panel, Form as BaseForm, Input as BaseInput, Button } from "./CommonStyle";

export const Container = styled(Panel)`
    max-width: 480px;
    margin: 80px auto;
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 20px;
    text-align: center;
`;

export const Form = styled(BaseForm)`
    margin-bottom: 20px;
`;

export const Input = styled(BaseInput)`
    padding: 12px 20px;
    border-width: 2px;
`;

export const SubmitButton = styled(Button)`
    font-weight: 600;
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
    background-color: ${({ theme }) => theme.background};
    border-radius: 8px;
    margin-bottom: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.hover};
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

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;
