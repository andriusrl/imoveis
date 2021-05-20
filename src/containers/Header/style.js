import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperMenu = styled.div`
    background-color: #151925;
    height: 52px;
    display: flex;
    align-items: center;
`
export const Logo = styled.p`
    margin: 0;
    color: #ececf6;
    font-size: 18pt;
    margin-left: 10px;;
    transform: translateY(-3px);
`
export const Item = styled.a`
    color: #ececf6;
    font-size: 13pt;
    transform: translateY(-4px);
    padding: 0 3% 0 3%;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    :hover{
        background-color: #272e41;
    }
`
export const WrapperFilter = styled.div`
    display: flex;
`