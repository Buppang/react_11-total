import { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { StyledContainer, StyledLoading } from "../../styles/CommonStyle.ts";
import { StyledPrice } from "../../styles/ProductStyle.tsx";

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    sku: string;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    images: string[];
    thumbnail: string;
};

const StyledTitle = styled.h1`
    font-size: 28px;
    margin-bottom: 24px;
`;

const StyledListWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const StyledCard = styled(Link)`
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    overflow: hidden;
    background-color: white;
    text-decoration: none;
    width: calc(25% - 15px);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }
`;

const StyledThumbnail = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    background-color: #f3f3f3;
`;

const StyledInfo = styled.div`
    padding: 12px 16px 16px;
`;

const StyledName = styled.h3`
    font-size: 16px;
    margin-bottom: 6px;
`;

function ProductList() {

    const [list, setList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=12")
            .then(res => res.json())
            .then((json: { products: Product[] }) => {
                setList(json.products);
            })
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err);
                } else {
                    console.log("에러가 발생했습니다." + err);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <StyledLoading>Loading...</StyledLoading>;
    }

    if (list.length === 0) {
        return <StyledLoading>상품을 찾을 수 없거나, 오류가 발생 되었습니다.</StyledLoading>;
    }

    return (
        <StyledContainer>
            <StyledTitle>Product List</StyledTitle>

            <StyledListWrap>
                {list.map(item => {
                    const { id, title, thumbnail, price } = item;

                    return (
                        <StyledCard to={`detail/${id}`} key={id}>
                            <StyledThumbnail src={thumbnail} alt={title} />

                            <StyledInfo>
                                <StyledName>{title}</StyledName>
                                <StyledPrice>${price}</StyledPrice>
                            </StyledInfo>
                        </StyledCard>
                    );
                })}
            </StyledListWrap>
        </StyledContainer>
    );
}

export default ProductList;
