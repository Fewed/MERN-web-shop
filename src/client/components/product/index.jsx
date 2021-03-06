import React from "react";
import { getByID, l } from "../../../utils";
import { CartControls } from "../connector";
import styles from "./index.scss";
import cnInit from "jcm-classnames";
const cn = cnInit(styles);

const Product = props => {
  const {
      store: { products },
      id
    } = props,
    { name, description, price, img } = getByID(products, id);

  return (
    <li className={cn("item")}>
      <h2>{name}</h2>
      <p className={cn("description")}>{description}</p>
      <img src={img} alt={description} />
      <p className={cn("price")}>{`${price} руб.`}</p>
      <CartControls {...{ id }} />
    </li>
  );
};

export default Product;
