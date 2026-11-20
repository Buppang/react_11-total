import styled from "styled-components";
import {
    MdAutoAwesomeMotion,
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
    MdLocalMovies,
    MdDarkMode,
    MdLightMode
} from "react-icons/md";
import { FcOpenedFolder } from "react-icons/fc";
import { Link } from "react-router";
import { FaCoins, FaCopyright } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";

type SidebarProps = {
    collapsed: boolean;
    onToggle: () => void;
    isDark: boolean;
    onThemeToggle: () => void;
};

const Container = styled.aside<{
    $collapsed: boolean;
}>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${({ theme }) => theme.sidebar};

    width: ${({ $collapsed }) => ($collapsed ? "64px" : "260px")};
    height: 100%;
    box-sizing: border-box;

    padding: ${({ $collapsed }) => ($collapsed ? "5px" : "15px")};

    flex-shrink: 0;
    overflow: hidden;

    transition: width 0.3s ease;
`;

const SideHeader = styled.header<{
    $collapsed: boolean;
}>`
    display: flex;
    flex-direction: ${({ $collapsed }) => ($collapsed ? "column" : "row")};

    align-items: center;
    justify-content: ${({ $collapsed }) => ($collapsed ? "center" : "space-between")};

    min-height: 100px;
    padding: ${({ $collapsed }) => ($collapsed ? "5px" : "15px")};
    gap: 10px;

    border-bottom: 1px solid ${({ theme }) => theme.border};

    white-space: nowrap;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    
    gap: 12px;
`;

const LogoTitle = styled.span`
    font-weight: bold;
    font-size: 18px;
`

const ToggleButton = styled.button`
    flex-shrink: 0;
    
    border: none;
    border-radius: 4px;
    padding-top: 6px;

    background-color: transparent;
    color: ${({ theme }) => theme.text};
`;

const ContentContainer = styled.nav`
    display: flex;
    flex-direction: column;

    flex: 1;
    min-height: 0;
`;

const SideContent = styled(Link)<{
    $collapsed: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ $collapsed }) => ($collapsed ? "center" : "flex-start")};

    min-height: 65px;
    gap: 15px;
    padding: ${({ $collapsed }) => ($collapsed ? "5px" : "15px")};

    flex-shrink: 0;
    white-space: nowrap;

    > svg {
        flex-shrink: 0;
    }
`;

const ThemeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    min-height: 45px;
    margin-bottom: 10px;

    background-color: transparent;
    color: ${({ theme }) => theme.text};

    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.hover};
    }
`;

const SideFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 50px;
    margin-top: auto;

    white-space: nowrap;
    border-top: 1px solid ${({ theme }) => theme.border};
`;

const Sidebar = ({ collapsed, onToggle, isDark, onThemeToggle }: SidebarProps) => {
    return (
        <Container $collapsed={collapsed}>
            <SideHeader $collapsed={collapsed}>
                <LogoContainer>
                    <FcOpenedFolder size={collapsed ? 35 : 60} />
                    {!collapsed && <LogoTitle>Portfolio</LogoTitle>}
                </LogoContainer>

                <ToggleButton onClick={onToggle}>
                    {collapsed ? (
                        <MdKeyboardDoubleArrowRight size={25} />
                    ) : (
                        <MdKeyboardDoubleArrowLeft size={25} />
                    )}
                </ToggleButton>
            </SideHeader>

            <ContentContainer>
                <SideContent to={"/"} $collapsed={collapsed}>
                    <IoMdHome size={25} />
                    {!collapsed && <span>Home</span>}
                </SideContent>

                <SideContent to={"/TodoList"} $collapsed={collapsed}>
                    <MdAutoAwesomeMotion size={25} />
                    {!collapsed && <span>ToDoList</span>}
                </SideContent>

                <SideContent to={"/Coin"} $collapsed={collapsed}>
                    <FaCoins size={25} />
                    {!collapsed && <span>Coin</span>}
                </SideContent>

                <SideContent to={"/Movie"} $collapsed={collapsed}>
                    <MdLocalMovies size={25} />
                    {!collapsed && <span>Movie</span>}
                </SideContent>

                <SideContent to={"/Product"} $collapsed={collapsed}>
                    <FaBoxArchive size={25} />
                    {!collapsed && <span>Product</span>}
                </SideContent>

                <SideContent to={"/Board"} $collapsed={collapsed}>
                    <IoPeople size={25} />
                    {!collapsed && <span>Board</span>}
                </SideContent>
            </ContentContainer>

            <ThemeButton onClick={onThemeToggle}>
                {isDark ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}

                {!collapsed && <span>{isDark ? "Light Mode" : "Dark Mode"}</span>}
            </ThemeButton>

            <SideFooter>
                {!collapsed ? <span>Copyright 2026 Practice</span> : <FaCopyright />}
            </SideFooter>
        </Container>
    );
};

export default Sidebar;
