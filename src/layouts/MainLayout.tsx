import { useState } from "react";
import Sidebar from "../components/Sidebar.tsx";
import styled from "styled-components";
import { Outlet } from "react-router";

const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 100dvh;
    overflow: hidden;
`;

const Main = styled.main`
    flex: 1;
    min-width: 0;
    overflow-y: auto;
`;

function MainLayout() {
    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <Layout>
            <Sidebar collapsed={collapsed} onToggle={handleToggle} />
            <Main>
                <Outlet />
            </Main>
        </Layout>
    );
}

export default MainLayout;
