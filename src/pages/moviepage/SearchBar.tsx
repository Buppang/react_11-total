import { useNavigate } from "react-router";
import { type ChangeEvent, type SubmitEvent, useEffect, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    gap: 10px;
`;

const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const Button = styled.button`
    padding: 12px;
    background-color: #ff5959;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

function SearchBar({ keyword }: { keyword: string }) {
    const navigate = useNavigate();
    const [search, setSearch] = useState(keyword || "");

    useEffect(() => {
        setSearch(keyword);
    }, [keyword]);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    const onSubmitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const key = search.trim();

        if (!key) return;
        navigate(`/Movie/Search?keyword=${encodeURIComponent(key)}`);
    };

    return (
        <Form onSubmit={onSubmitHandler}>
            <Input onChange={onChangeHandler} value={search} placeholder="Search..." />
            <Button type="submit">Search</Button>
        </Form>
    );
}

export default SearchBar;
