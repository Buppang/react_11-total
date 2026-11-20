import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Product } from "./ProductList.tsx";
import styled from "styled-components";
import { StyledContainer, StyledLoading } from "../../styles/CommonStyle.ts";
import { StyledDetailPrice } from "../../styles/ProductStyle.tsx";

const StyledBackLink = styled(Link)`
    color: #666666;
    font-size: 14px;
`;

const StyledLine = styled.div`
    border: 1px #999 solid;
    margin: 12px;
`;

const StyledDetailsTop = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    align-items: flex-start;
    padding: 20px;
`;

const StyledImageContainer = styled.div`
    flex: 1;
    min-width: 0;
    height: 450px;
    background-color: #f3f3f3;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const StyledProductInfo = styled.div`
    flex: 1;
    min-width: 0;
`;

const StyledSku = styled.p`
    font-size: 10px;
    color: #666666;
`;

const StyledStuff = styled.p`
    font-size: 12px;
`;

const StyledDescription = styled.div`
    min-height: 300px;
`;

function ProductDetail() {
    const { id } = useParams(); // string | undefined

    const [post, setPost] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((json: Product) => {
                setPost(json);
            })
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err);
                } else {
                    console.log("에러가 발생했습니다." + err);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <StyledLoading>Loading...</StyledLoading>;
    }

    if (!post) {
        return <StyledLoading>상품을 찾을 수 없거나, 오류가 발생 되었습니다.</StyledLoading>;
    }

    return (
        <StyledContainer>
            <div>
                <StyledBackLink to="/Product">&larr; 목록으로 돌아가기</StyledBackLink>

                <StyledLine />

                <div key={post.id}>
                    <div>category : {post.category}</div>

                    <StyledDetailsTop>
                        <StyledImageContainer>
                            <img src={post.images?.[0]} alt={post.title} />
                        </StyledImageContainer>

                        <StyledProductInfo>
                            <h3>{post.brand}</h3>
                            <p>{post.title}</p>

                            <StyledSku>{post.sku}</StyledSku>

                            <p>Rating : {post.rating}</p>

                            <StyledDetailPrice>${post.price}</StyledDetailPrice>

                            <br />

                            <StyledStuff>{post.availabilityStatus}</StyledStuff>

                            <StyledStuff>{post.warrantyInformation}</StyledStuff>

                            <StyledStuff>{post.shippingInformation}</StyledStuff>
                        </StyledProductInfo>
                    </StyledDetailsTop>

                    <StyledLine />

                    <StyledDescription>{post.description}</StyledDescription>

                    <StyledLine />
                </div>
            </div>
        </StyledContainer>
    );
}

export default ProductDetail;
