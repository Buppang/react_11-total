import styled from "styled-components";

export const StyledPrice = styled.p`
    font-weight: bold;
    color: ${({ theme }) => theme.price};
`;

export const StyledDetailPrice = styled(StyledPrice)`
    font-size: 18px;
`;