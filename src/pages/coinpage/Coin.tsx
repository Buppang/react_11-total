import styled from "styled-components";
import { useEffect, useState } from "react";

type Coin = {
    market: string;
    korean_name: string;
    english_name: string;
};

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 60px auto;
    padding: 30px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

    h1 {
        font-size: 1.6rem;
        color: #1f2937;
        margin-bottom: 15px;
        text-align: center;
    }

    hr {
        border: none;
        height: 1px;
        background-color: #e5e7eb;
        margin: 20px 0;
    }

    select {
        width: 100%;
        padding: 12px 16px;
        font-size: 1.6rem;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        outline: none;
        background-color: #fafafb;
        color: #1f2937;
        cursor: pointer;
        transition:
            border-color 0.2s,
            background-color 0.2s;
    }

    select:hover {
        background-color: #f3f4f6;
    }

    select:focus {
        border-color: #3b82f6;
        background-color: white;
    }
`;

function Coin() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const firstThen = (response: Response): Promise<Coin[]> => {
        return response.json();
    };

    const secondThen = (json: Coin[]) => {
        setCoins(json);
    };

    useEffect(() => {
        fetch("https://api.upbit.com/v1/market/all")
            .then(firstThen)
            .then(secondThen)
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log("알수 없는 에러가 발생했습니다." + error);
                }
            });
    }, []);

    return (
        <Container>
            <h1>업비트 목록 ({coins.length}개)</h1>
            <hr />
            <select style={{ padding: "8px", fontSize: 16, minWidth: "200px" }}>
                {coins.map((coin, index) => {
                    return (
                        <option key={index} value={coin.market}>
                            {coin.korean_name} ({coin.market})
                        </option>
                    );
                })}
            </select>
        </Container>
    );
}

export default Coin;
