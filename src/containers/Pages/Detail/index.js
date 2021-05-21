import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imoveis from "../../imoveis/imoveis.json"
import { HeaderValues } from "../../providers/HeaderValues";
import { StatusFalse, StatusTrue, Detail2, Title, SubTitle, Detail1, BoxBorder, Division, DetailWrapper, ImagePropertieDetailWrapper, PropertieDetailWrapper, ImagePropertieDetail, LiConvenience, LiYes, LiNo, UlConvenience } from "./style"

function Detail() {
  const { headerValues, setHeaderValues } = HeaderValues()
  useEffect(() => {
    const newHeaderValues = headerValues
    setHeaderValues({
      ...newHeaderValues,
      filterSwitch: true
    })
  }, [])
  const { id } = useParams();

  const propertieDetail = imoveis.find(propertie => propertie.id === Number(id))
  return (
    <PropertieDetailWrapper>
      <ImagePropertieDetailWrapper>
        <ImagePropertieDetail src={propertieDetail?.image} />
        <h3>Localização</h3>
        <p>{propertieDetail?.description}</p>
        <a>Ver localização</a>
      </ImagePropertieDetailWrapper>
      <DetailWrapper>
        <div>
          <Title>{propertieDetail?.name}</Title>
          <SubTitle>
            {propertieDetail?.district}
            <ul>
              <li>
                {propertieDetail?.status ? <StatusTrue>ativo</StatusTrue> : <StatusFalse>desativado</StatusFalse>}
              </li>
            </ul>
          </SubTitle>

        </div>
        <div>
          <Division />
          <Detail1>
            <BoxBorder>
              <p>Máx de hóspedes</p>
              <p>{propertieDetail?.maxGuests}</p>
            </BoxBorder>
            <BoxBorder>
              <p>Taxa de limpeza</p>
              <p>R${propertieDetail?.cleaningFee}</p>
            </BoxBorder>
            <BoxBorder>
              <p>Caução</p>
              <p>R${propertieDetail?.guarantee}</p>
            </BoxBorder>
          </Detail1>
          <h3>Comodidades</h3>
          <Division />
          <Detail2>
            <UlConvenience>
              <LiConvenience>
                <li>Estacionamento</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Estacionamento"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Elevador</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Elevador"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Porteiro</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Porteiro"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Piscina Privada</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Piscina Privada"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Geladeira</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Geladeira"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Ar Condicionado</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Ar condicionado"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Internet</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Internet"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              {/* A PARTIR DAQUI */}
              <LiConvenience>
                <li>Wi-fi</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Wi-fi"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Canais a Cabo</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Canais a Cabo"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Jacuzzi</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Jacuzzi"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Microondas</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Microondas"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Sofá</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Sofá"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Cozinha Completa</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Cozinha Completa"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>TV</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "TV"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Cabides</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Cabides"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Itens Básicos de Banheiro</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Itens Básicos de Banheiro"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                <li>Toalhas</li>
                {
                  propertieDetail?.convenience.find(
                    convenience => convenience === "Toalhas"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
            </UlConvenience>
          </Detail2>
        </div>
      </DetailWrapper>
    </PropertieDetailWrapper>
  );
}

export default Detail;