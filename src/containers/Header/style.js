import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperMenu = styled.div`
    background-color: #151925;
    height: 52px;
    display: flex;
    align-items: center;
    width: 100%;
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
    padding: 0 2% 0 2%;
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
    justify-content: space-between;
    @media (min-width: 1024px) {
        width: 1024px;
    }
`
export const WrapperHeader = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`
export const FilterTitleLabel = styled.h3`
 margin-bottom: 9px;
 font-size: 12pt;
 font-weight: 700;
`
export const Select = styled.select`
    padding: 12px 23% 12px 7px;
    width: fit-content;
    border-radius: 10px;
    border-color: #E0E1E1;
    color: #828787;
    font-weight: 700;
`
export const Date = styled.input`
    padding: 10px 0 11px 7px;
    width: fit-content;
    border: 1px solid #E0E1E1;
    border-radius: 10px;
    color: #828787;
    font-weight: 700;
`
export const FilterDiv = styled.div`
    padding: 8px 6% 6px 7px;
    width: 100px;
    border: 1px solid #E0E1E1;
    border-radius: 10px;
    color: #828787;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
`
export const ButtonIncrement = styled.button`
    border-radius: 50%;
    border: 1px solid #E0E1E1;
    background-color: transparent;
    color: #828787;
    font-size: 16pt;
    font-weight: 500;
    padding: 0 9px 0 9px;
    cursor: pointer;
`
export const ButtonFind = styled.button`
    background-color: #e83f3c;
    height: fit-content;
    padding: 8px 24px 11px 24px;
    border: solid 1px transparent;
    border-radius: 12px;
    color: white;
    font-size: 14pt;
    font-weight: 400;
`
export const ButtonMoreFilter = styled.a`
    color: #e83f3c;
    font-weight: 700;
    height: fit-content;
`
export const ButtonFindWrapper = styled.div`
    align-self: flex-end;
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Division = styled.div`
    border-bottom: 1px solid black;
    border-color: #E0E1E1;
    width: 100%;
    margin-top: 20px;
`