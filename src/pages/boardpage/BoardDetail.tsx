import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Post } from "./Board.tsx";
import { StyledContainer, StyledLoading } from "../../styles/BoardStyle.tsx";
import styled from "styled-components";

const StyledBackLink = styled(Link)`
    color: #666666;
    font-size: 14px;
    margin-bottom: 32px;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: #f1f3f5;
    border: 1px solid #666;

    &:hover {
        background-color: #e9ecef;
        color: #0077ff;
    }
`;

const StyledArticle = styled.article`
    padding-top: 40px;
`;

const StyledTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    color: #111;
    margin-bottom: 24px;
`;

const StyledMeta = styled.div`
    color: #888888;
    margin-bottom: 40px;
`;

const StyledSeparator = styled.span`
    margin: 0 12px;
`;

const StyledBody = styled.div`
    font-size: 1.15rem;
    line-height: 1.8;
    white-space: pre-wrap;
`;

function BoardDetail() {
    const { id } = useParams();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then((json: Post) => {
                setPost(json);
                setLoading(false);
            })
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err);
                } else {
                    console.log("에러 남;" + err);
                }
            });
    }, []);

    if (loading) {
        return <StyledLoading>Loading...</StyledLoading>;
    }

    if (!post) {
        return <StyledLoading>no data</StyledLoading>;
    }

    return (
        <StyledContainer>
            <StyledBackLink to="/Board">&larr; 목록으로 돌아가기</StyledBackLink>

            <StyledArticle>
                <StyledTitle>{post.title}</StyledTitle>

                <StyledMeta>
                    <span>게시물 번호 : {post.id}</span>
                    <StyledSeparator>|</StyledSeparator>
                    <span>작성자 : {post.userId}</span>
                </StyledMeta>

                <StyledBody>{post.body}</StyledBody>
            </StyledArticle>
        </StyledContainer>
    );
}

export default BoardDetail;
