import { useState } from "react";
import Sidebar from "../components/Sidebar.tsx";
import styled from "styled-components";
import { Outlet } from "react-router";

const Layout = styled.div`
    display: flex;
    min-height: 100vh;
`;

const Main = styled.main`
    flex: 1;
    min-width: 0;
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