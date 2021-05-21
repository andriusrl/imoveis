import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderValues } from "../providers/HeaderValues";
import { WrapperFilter, Item, Logo, WrapperMenu, WrapperHeader, FilterTitleLabel, Select, Date, FilterDiv, ButtonIncrement, ButtonFind, ButtonMoreFilter, ButtonFindWrapper, Division } from "./style"

function Header() {
  const { headerValues, setHeaderValues } = HeaderValues()
  console.log(headerValues)


  const showFilter = () => {
    if (headerValues.filterSwitch === true) {
      return (
        <WrapperFilter>
          <div>
            <FilterTitleLabel>Localização</FilterTitleLabel>
            <Select name="localization">
              <option>Florianópolis</option>
            </Select>
          </div>
          <div>
            <FilterTitleLabel>Preço</FilterTitleLabel>
            <Select name="localization">
              <option>300-10000</option>
            </Select>
          </div>
          <div>
            <FilterTitleLabel>Check-in</FilterTitleLabel>
            <Date type="date" />
          </div>
          <div>
            <FilterTitleLabel>Check-out</FilterTitleLabel>
            <Date type="date" />
          </div>
          <div>
            <FilterTitleLabel>N° de hóspedes</FilterTitleLabel>
            <FilterDiv>
              <ButtonIncrement>-</ButtonIncrement>
              2
              <ButtonIncrement>+</ButtonIncrement>
            </FilterDiv>
          </div>
          <ButtonFindWrapper>
            <ButtonFind>Buscar</ButtonFind>
            <ButtonMoreFilter>+ Mais filtros</ButtonMoreFilter>
          </ButtonFindWrapper>
        </WrapperFilter>
      )
    }
  }
  return (
    <WrapperHeader>
      <WrapperMenu>
        <Logo>seazone</Logo>
        <Item>Calendário</Item>
        <Item>Clientes</Item>
        <Item>Orçamentos</Item>
        <Item>Propriedades</Item>
        <Item>Controle</Item>
      </WrapperMenu>
      {showFilter()}
      <Division/>
    </WrapperHeader>
  );
}

export default Header;