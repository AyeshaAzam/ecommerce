import React from "react";
import "./checkout.style.scss";
import Buttonpay from "../../components/stripeinte/stripe.component";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.select";
import { connect } from "react-redux";
import Check from "../../components/checkout/checkoutitem.component";
import emptycart from "./emptycart.svg";

const check = ({ cartItems, Total }) => (
  <div>
    {cartItems.length ? (
      <div className="checkpage">
        <div className="checkheader">
          <div className="checkitems">
            {" "}
            <h3>product</h3>
          </div>
          <div className="checkitems">
            {" "}
            <h3>description </h3>
          </div>
          <div className="checkitems">
            {" "}
            <h3>quantity</h3>
          </div>
          <div className="checkitems">
            {" "}
            <h3>price </h3>
          </div>
          <div className="checkitems">
            {" "}
            <h3>remove </h3>
          </div>
        </div>
        <div>
          {cartItems.map((cartItem) => (
            <Check key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div style={{ width: "100", display: "flex" }}>
          <h3 style={{ marginLeft: "auto" }}>Total:${Total}</h3>
        </div>

        <Buttonpay price={Total} />

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "red",
            marginBottom: "20px",
          }}
        >
          <p>
            "test payment using demo card
            <br />
            4242 4242 4242 4242
            <br />
            01/2022 cvv:123"
          </p>
        </div>
      </div>
    ) : (
      <div className="emptycart">
        <h1 className="empty-title">Your Cart Is Empty</h1>
        <img className="empty-img" src={emptycart} alt="emptycart" />
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  Total: selectCartItemsTotal(state),
});

export default connect(mapStateToProps)(check);
