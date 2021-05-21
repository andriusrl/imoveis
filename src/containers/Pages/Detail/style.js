import styled from "styled-components"

export const PropertieDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
`
export const ImagePropertieDetailWrapper = styled.div`
    margin-right: 60px;
`
export const ImagePropertieDetail = styled.img`
  object-fit: none;
  object-position: center;
  height: 300px;
  width: 320px;
`
export const DetailWrapper = styled.div`

`
export const Title = styled.h2`
    margin: 0 0 6px 0;
`
export const SubTitle = styled.p`
    margin: 0 0 12px 0;
    display: flex;
    justify-content: space-between;
    ul {
        margin: 0 9px 0 0;
        font-weight: 600;
    }
`
export const Detail1 = styled.div`
    width: 640px;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
`
export const StatusTrue = styled.li`
    color: #04be95;
`
export const StatusFalse = styled.li`
    color: #fd554a;
`
export const BoxBorder = styled.div`
    border: 1px solid black;
    width: 170px;
    border-radius: 10px;
    border-color: #E0E1E1;
    padding: 12px 0 12px 20px;
    box-sizing: border-box;
    p:nth-child(1) {
        color: #828787;
        font-weight: 600;
        margin: 0;
        width: fit-content;
    };
    p:nth-child(2) {
        font-size: 17pt;
        color: #828787;
        font-weight: 700;
        margin: 0;
        width: fit-content;
    };
`
export const Division = styled.div`
    border-bottom: 1px solid black;
    border-color: #E0E1E1;
`



export const LiConvenience = styled.li`
    display: flex;
    margin: 11px 0 11px 0;
    width: 280px;
    color: #828787;
    font-weight: 600;

    div {
        padding: 0 6px 2px 6px;
        border-radius: 5px;
        color: white;
        margin-left: 12px;
    }
`
export const LiYes = styled.div`
    background-color: #04be95;
`
export const LiNo = styled.div`
    background-color: #fd554a;
`
export const Detail2 = styled.div`
    /* height: 300px; */
    
`
export const UlConvenience = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 600px;
    padding: 20px;
    margin: 0;
`

