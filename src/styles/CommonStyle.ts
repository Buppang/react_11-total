import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 32px 20px;
`;

export const StyledLoading = styled.div`
    padding: 80px 0;
    text-align: center;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.mutedText};
`;

export const CenterLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
`;

export const Panel = styled.div`
    width: 100%;
    padding: 30px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.surface};
    box-shadow: ${({ theme }) => theme.shadow};
`;

export const CenterPanel = styled(Panel)`
    display: flex;
    flex-direction: column;
    text-align: center;

    max-width: 400px;
    padding: 40px;
    gap: 15px;
`;

export const PageTitle = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 24px;
`;

export const Form = styled.form`
    display: flex;
    gap: 10px;
`;

export const Input = styled.input`
    flex: 1;
    min-width: 0;
    padding: 12px;
    font-size: 1rem;

    background-color: ${({ theme }) => theme.input};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
`;

export const Button = styled.button`
    padding: 12px 20px;
    background-color: ${({ theme }) => theme.primary};
    color: white;

    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.primaryHover};
    }
`;