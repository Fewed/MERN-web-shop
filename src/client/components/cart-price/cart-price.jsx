import l from "../../services/log";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "../../state";
import { add } from "../../services/request";
import ls from "../../services/ls";
import styles from "./cart-price.scss";
import cnInit from "jcm-classnames";
const cn = cnInit(styles);

const CartPrice = props => {
  const { products = [] } = props;
  const calcTotalPrice = () =>
    products.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

  useEffect(() => {
    (async () => {
      const fp = ls.get("MERN") || {};
      const { fingerprint = "empty" } = fp;
      l(fingerprint);
      const res = await add("/fingerprint", { fingerprint });
      l(res);
      ls.set("MERN", { ...fp, ...{ fingerprint: res } });
    })();
  }, []);

  return (
    <h2 className={cn("cartPrice white")}>
      Товаров в корзине на сумму {calcTotalPrice()} коп.
    </h2>
  );
};

export default connect(
  state => state,
  actions
)(CartPrice);
