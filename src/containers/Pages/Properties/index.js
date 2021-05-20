import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderValues } from "../../providers/HeaderValues";
import imoveis from "../../imoveis/imoveis.json"
import imagem from "../../imoveis/imovel11.jpg"
import {ImagePropertie, InfoWrapper, PropertiesWrapper} from "./style"

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
    <div>
      <InfoWrapper>
        <h2>Todos os imóveis</h2>
        <h3>6 imóveis</h3>
        <button>Ordenar</button>
      </InfoWrapper>
      <PropertiesWrapper>
        {
          imoveis.map((propertie, index) => {
            return (
              <div key={propertie.name}>
                {/* <img src="https://i.ibb.co/xf84XyP/imovel11.jpg" /> */}
                <ImagePropertie src={imagem} />
                <h2>{propertie.name}</h2>
                <h3>{propertie.description}</h3>
                <p>{propertie.maxGuests}</p>
                <p>{propertie.cleaningFee}</p>
                <p>{propertie.guarantee}</p>
                <p>{propertie.district}</p>
              </div>
            )
          })
        }
      </PropertiesWrapper>
    </div>
  );
}

export default Properties;