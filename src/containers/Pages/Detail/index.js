import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imoveis from "../../imoveis/imoveis.json"
import { Detail2, Title, SubTitle, Detail1, BoxBorder, Division, DetailWrapper, ImagePropertieDetailWrapper, PropertieDetailWrapper, ImagePropertieDetail, LiConvenience, LiYes, LiNo } from "./style"

function Detail() {

  const id = 1;
  const propertieDetail = imoveis.find(propertie => propertie.id === id)
  console.log(propertieDetail)
  return (
    <PropertieDetailWrapper>
      <ImagePropertieDetailWrapper>
        <ImagePropertieDetail src={propertieDetail.image} />
        <h3>Localização</h3>
        <p>{propertieDetail.description}</p>
        <a>Ver localização</a>
      </ImagePropertieDetailWrapper>
      <DetailWrapper>
        <div>
          <Title>{propertieDetail.name}</Title>
          <SubTitle>{propertieDetail.district}</SubTitle>
          <p>{propertieDetail.status ? "ativo" : "desativado"}</p>
        </div>
        <div>
          <Division />
          <Detail1>
            <BoxBorder>
              <p>Máx de hóspedes</p>
              <p>{propertieDetail.maxGuests}</p>
            </BoxBorder>
            <BoxBorder>
              <p>Taxa de limpeza</p>
              <p>R${propertieDetail.cleaningFee}</p>
            </BoxBorder>
            <BoxBorder>
              <p>Caução</p>
              <p>R${propertieDetail.guarantee}</p>
            </BoxBorder>
          </Detail1>
          <h3>Comodidades</h3>
          <Division />
          <Detail2>
            <ul>
              <LiConvenience>
                Estacionamento
              {
                  propertieDetail.convenience.find(
                    convenience => convenience === "Estacionamento"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                Elevador
              {
                  propertieDetail.convenience.find(
                    convenience => convenience === "Elevador"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                Porteiro
              {
                  propertieDetail.convenience.find(
                    convenience => convenience === "Porteiro"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                Piscina Privada
              {
                  propertieDetail.convenience.find(
                    convenience => convenience === "Piscina Privada"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                Geladeira
              {
                  propertieDetail.convenience.find(
                    convenience => convenience === "Geladeira"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                Ar Condicionado
              {
                  propertieDetail.convenience.find(
                    convenience => convenience === "Ar condicionado"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
              <LiConvenience>
                Internet
              {
                  propertieDetail.convenience.find(
                    convenience => convenience === "Internet"
                  ) ? <LiYes>sim</LiYes> : <LiNo>não</LiNo>
                }
              </LiConvenience>
            </ul>
          </Detail2>
        </div>
      </DetailWrapper>
    </PropertieDetailWrapper>
  );
}

export default Detail;