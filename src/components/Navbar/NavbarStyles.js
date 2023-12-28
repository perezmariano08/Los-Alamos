import styled from "styled-components";

export const NavbarTopStyles = styled.nav`
    display: flex;
    width: 100%;
    padding: 0 100px;
    justify-content: center;
    background-color: var(--secondary);
    height: 40px;

    @media (max-width: 968px) {
        display: none;
    }
`

export const NavbarTopWrapper = styled.nav`
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--primary);

    
`

export const NavbarStyles = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99;
    width: 100%;
    padding: 0 100px;
    background-color: var(--primary);
    @media (max-width: 968px) {
        padding: 0 30px;
    }
`

export const NavbarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1200px;

    img {
        height: 60%;
    }
`

export const NavbarList = styled.ul`
    display: flex;
    gap: 20px;

    li a {
        color: black;
        font-weight: 400;
    }

    li a.active {
        color: black;
        font-weight: 700;
    }

    @media (max-width: 968px) {
        display: none;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const NavbarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    span {
        color: white;
    }
`