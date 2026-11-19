import styled from "styled-components";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FcFlowChart } from "react-icons/fc";
import { Link } from "react-router";
import { FaCopyright } from "react-icons/fa";

const Container = styled.aside<{
    $collapsed: boolean;
}>`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: ${({ $collapsed }) => ($collapsed ? "64px" : "260px")};
    height: 100vh;
    box-sizing: border-box;
    
    padding: 15px;

    flex-shrink: 0;
    overflow: hidden;

    border-right: 1px solid black;
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
    gap: 10px;
    
    border-bottom: black solid 1px;

    white-space: nowrap;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    
    gap: 10px;
`;

const ToggleButton = styled.button`
    flex-shrink: 0;
    
    border: none;
    border-radius: 4px;
    padding-top: 2px;
`;

const ContentContainer = styled.nav`
    display: flex;
    flex-direction: column;

    flex: 1;
    min-height: 0;
`;

const SideContent = styled.div<{
    $collapsed: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ $collapsed }) => ($collapsed ? "center" : "flex-start")};

    min-height: 65px;
    padding: 0 15px;
    gap: 15px;

    flex-shrink: 0;
    white-space: nowrap;
`;

const SideFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 50px;
    margin-top: auto;
    
    border-top: black solid 1px;
`;

type SidebarProps = {
    collapsed: boolean;
    onToggle: () => void;
};

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
    return (
        <Container $collapsed={collapsed}>
            <SideHeader $collapsed={collapsed}>
                <LogoContainer>
                    <FcFlowChart size={65} />
                    {!collapsed && <span>Portfolio</span>}
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
                <SideContent $collapsed={collapsed}>
                    <span>🏠</span>
                    {!collapsed && <Link to={"/"}>홈</Link>}
                </SideContent>

                <SideContent $collapsed={collapsed}>
                    <span>📊</span>
                    {!collapsed && <Link to={"/TodoList"}>ToDoList</Link>}
                </SideContent>

                <SideContent $collapsed={collapsed}>
                    <span>🛒</span>
                    {!collapsed && <span>Coin</span>}
                </SideContent>

                <SideContent $collapsed={collapsed}>
                    <span>💰</span>
                    {!collapsed && <span>Movie</span>}
                </SideContent>

                <SideContent $collapsed={collapsed}>
                    <span>🪙</span>
                    {!collapsed && <span>Product</span>}
                </SideContent>

                <SideContent $collapsed={collapsed}>
                    <span>📋</span>
                    {!collapsed && <span>Board</span>}
                </SideContent>
            </ContentContainer>

            <SideFooter>
                {!collapsed ? <span>Copyright 2026 Practice</span> : <FaCopyright />}
            </SideFooter>
        </Container>
    );
};

export default Sidebar;
