import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin-top: 14px;
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
  width: 310px;
  border-radius: 9px;
 `
export const PropertiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-self: center;
  a:link{
    text-decoration: none;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
`
export const Title = styled.h2`
  margin: 0 0 12px 0;
  font-weight: 700;
`
export const PropertiesLength = styled.p`
    color: #828787;
    margin-top: 0;
`
export const SelectOrder = styled.select`
    padding: 12px 24px 12px 7px;
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    border-color: #E0E1E1;
    color: #828787;
    font-weight: 700;
`
export const TitleItem = styled.h3`
  color: #2a2d33;
  font-weight: 600;
`
export const DescriptionItem = styled.p`
  color: #2a2d33;
  font-size: 10pt;
  font-weight: 400;
  margin-top: 0;
`
export const  PItem = styled.div`
  color: #2a2d33;
  font-size: 11pt;
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
  }
`
export const Division = styled.div`
    border-bottom: 1px dotted #E0E1E1;
    width: 100%;
    margin: 6px 0 6px 0;
`
export const ItemWrapper = styled.div`
  margin: 12px 0 56px 0;
`