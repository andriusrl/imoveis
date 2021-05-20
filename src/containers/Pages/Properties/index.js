import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderValues } from "../../providers/HeaderValues";

function Properties() {
  const { headerValues, setHeaderValues } = HeaderValues()
  useEffect(() => {
    const newHeaderValues = headerValues
    setHeaderValues({
      ...newHeaderValues,
      filterSwitch: true
    })
  },[])

  return (
    <div>

    </div>
  );
}

export default Properties;