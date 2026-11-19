import styled from "styled-components";

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 400px;
    padding: 40px;
    border-radius: 16px;
    background-color: white;
    gap: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

function Home() {
    return (
        <Main>
            <Container>
                <h1>Portfolio</h1>
                <div>use sidebar to check</div>
            </Container>
        </Main>
    );
}

export default Home;
