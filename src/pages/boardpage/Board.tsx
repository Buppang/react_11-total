import { useEffect, useState } from "react";
import { Link } from "react-router";
import styled, { css } from "styled-components";
import { StyledContainer, StyledLoading } from "../../styles/BoardStyle.tsx";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 24px;
    color: #111;
`;

const BoardTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #333;

    th,
    td {
        padding: 16px 14px;
    }

    th {
        background-color: #f8f9fa;
        font-size: 14px;
        font-weight: 600;
        color: #444;
        border-bottom: 1px solid #dee2e6;
        text-align: center;
    }

    td {
        border-bottom: 1px solid #eee;
    }
`;

const TableRow = styled.tr`
    transition: background-color 0.2s;

    &:hover {
        background-color: #f1f7ff;
    }
`;

const IdCellStyles = css`
    width: 80px;
    text-align: center;
    color: #888;
`;
const TdIdCell = styled.td`
    ${IdCellStyles}
`;
const ThIdCell = styled.td`
    ${IdCellStyles}
`;

const TitleCell = styled.td`
    text-align: left;
`;

const UserIdCell = styled.td`
    text-align: center;
    color: #666;
`;

const StyledLink = styled(Link)`
    color: #333;

    &:hover {
    }
`;

function Board() {
    const [list, setList] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((json: Post[]) => {
                setList(json);
                setLoading(false);
            })
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err);
                } else {
                    console.log("알 수 없는 에러 : " + err);
                }
            });
    }, []);

    if (loading) {
        return <StyledLoading>로딩 중 입니다.</StyledLoading>;
    }

    return (
        <>
            <StyledContainer>
                <Title>커뮤니티 게시판</Title>
                <BoardTable>
                    <thead>
                        <tr>
                            <ThIdCell>번호</ThIdCell>
                            <th>제목</th>
                            <th>작성자 ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <TableRow key={index}>
                                <TdIdCell>{item.id}</TdIdCell>
                                <TitleCell>
                                    <StyledLink to={`/Board/detail/${item.id}`}>{item.title}</StyledLink>
                                </TitleCell>
                                <UserIdCell>{item.userId}</UserIdCell>
                            </TableRow>
                        ))}
                    </tbody>
                </BoardTable>
            </StyledContainer>
        </>
    );
}

export default Board;
