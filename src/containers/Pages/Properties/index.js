import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderValues } from "../../providers/HeaderValues";
import imoveis from "../../imoveis/imoveis.json"
import imagem from "../../imoveis/imovel61.jpg"
import {Division, PItem, SelectOrder, ImagePropertie, InfoWrapper, PropertiesWrapper, Wrapper, Title, PropertiesLength, ButtonOrder, TitleItem, DescriptionItem, ItemWrapper } from "./style"

function Properties() {
  const { headerValues, setHeaderValues } = HeaderValues()
  useEffect(() => {
    const newHeaderValues = headerValues
    setHeaderValues({
      ...newHeaderValues,
      filterSwitch: true
    })
  }, [])

  console.log(imoveis)

  return (
    <Wrapper>
      <InfoWrapper>
        <div>
          <Title>Todos os imóveis</Title>
          <PropertiesLength>6 imóveis</PropertiesLength>
        </div>
        <SelectOrder>
          <option>
            Ordenar
          </option>
        </SelectOrder>
      </InfoWrapper>
      <PropertiesWrapper>
        {
          imoveis.map((propertie, index) => {
            return (
              <ItemWrapper>
                <Link to="/propriedades/detalhe">
                  <ImagePropertie src={propertie.image} key={propertie.name} />
                  <TitleItem>{propertie.name}</TitleItem>
                  <DescriptionItem>{propertie.description}</DescriptionItem>
                  <PItem><p>Máximo de hóspedes</p><p>{propertie.maxGuests}</p></PItem>
                  <Division />
                  <PItem><p>Taxa de limmpeza</p><p>R${propertie.cleaningFee.toFixed(2)}</p></PItem>
                  <Division />
                  <PItem><p>Caução</p><p>R${propertie.guarantee.toFixed(2)}</p></PItem>
                  <Division />
                  <PItem><p>Bairro</p><p>{propertie.district}</p></PItem>
                </Link>
              </ItemWrapper>
            )
          })
        }
      </PropertiesWrapper>
    </Wrapper>
  );
}

export default Properties;