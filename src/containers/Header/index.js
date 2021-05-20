import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderValues } from "../providers/HeaderValues";
import { WrapperFilter, Item, Logo, WrapperMenu } from "./style"

function Header() {
  const { headerValues, setHeaderValues } = HeaderValues()
  console.log(headerValues)


  const showFilter = () => {
    if (headerValues.filterSwitch === true) {
      return (
        <WrapperFilter>
          <div>
            <p>Localização</p>
            <select name="localization">
              <option>Florianópolis</option>
            </select>
          </div>
          <div>
            <p>Preço</p>
            <select name="localization">
              <option>300-10000</option>
            </select>
          </div>
          <div>
            <p>Check-in</p>
            <input type="date" />
          </div>
          <div>
            <p>Check-out</p>
            <input type="date" />
          </div>
          <div>
            <p>N° de hóspedes</p>
            <div>2</div>
          </div>
        </WrapperFilter>
      )
    }
  }
  return (
    <div>
      <WrapperMenu>
        <Logo>seazone</Logo>
        <Item>Calendário</Item>
        <Item>Clientes</Item>
        <Item>Orçamentos</Item>
        <Item>Propriedades</Item>
        <Item>Controle</Item>
      </WrapperMenu>
      {showFilter()}
    </div>
  );
}

export default Header;