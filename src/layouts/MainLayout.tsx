import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.tsx";
import styled, { ThemeProvider } from "styled-components";
import { Outlet } from "react-router";
import GlobalStyle from "../styles/GlobalStyle.ts";
import { darkTheme, lightTheme } from "../contexts/theme/Theme.ts";

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

    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

    const handleToggle = () => {
        setCollapsed(prev => !prev);
    };

    const handleThemeToggle = () => {
        setIsDark(prev => !prev);
    };

    useEffect(() => {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Layout>
                <Sidebar
                    collapsed={collapsed}
                    onToggle={handleToggle}
                    isDark={isDark}
                    onThemeToggle={handleThemeToggle}
                />
                <Main>
                    <Outlet />
                </Main>
            </Layout>
        </ThemeProvider>
    );
}

export default MainLayout;
