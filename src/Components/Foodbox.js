import React, { useContext } from 'react';
import { DataContext } from './../Context/Context'

const FoodBox = ({lang, nombre, precio}) => {

  const { foundPlace, flattened } = useContext(DataContext);

  const switchLang = (parameter) => {
    let product = flattened.find(el => el.nombre === nombre)
    let parameterEs = `${parameter}_es`;
    let parameterEn = `${parameter}_en`;
    switch (lang) {
      case "ca":
        return product[parameter];
      case "en":
        return product[parameterEn];
      case "es":
        return product[parameterEs];
      default:
        return product[parameter]
    }
  };

    return (
      <div className="food-box" >
        <div className="left-box">
          <h4 style={{color: foundPlace.color , fontFamily: "Brandon Bold"}}>{switchLang('nombre')}</h4>
          <p>{switchLang('descripcion')}</p>
        </div>
      
      </div>
    );
  }

export default FoodBox;
