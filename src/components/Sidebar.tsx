import styled from "styled-components";

const Container = styled.aside<{
    $collapsed: boolean;
}>`
    width: ${({ $collapsed }) => ($collapsed ? "64px" : "240px")};

    flex-shrink: 0;
    overflow: hidden;

    transition: width 0.3s ease;
`;

type SidebarProps = {
    collapsed: boolean;
    onToggle: () => void;
};

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
    return (
        <Container $collapsed={collapsed}>
            <button onClick={onToggle}>{collapsed ? "펼치기" : "접기"}</button>

            {!collapsed && (
                <nav>
                    <p>홈</p>
                    <p>소개</p>
                    <p>설정</p>
                </nav>
            )}
        </Container>
    );
};

export default Sidebar;