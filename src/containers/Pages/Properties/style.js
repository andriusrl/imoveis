import styled from "styled-components";

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    /* justify-self: c; */
    h2 {

    }
    @media (min-width: 1024px) {
        width: 1024px;
    }
`
export const ImagePropertie = styled.img`
  object-fit: none;
  object-position: center;
  height: 100px;
  width: 320px;
  border-radius: 9px;
`
export const PropertiesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`