import React from "react";
import Link from "next/link";
import { products, cart } from "../../mock-data";
import Image from "next/image";

const CartPage = () => {
  const cartItems = cart.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.productId);
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });

  return (
    <div className="cart">
      <div className="user-info">
        <div className="avatar-name">
          <Image
            src="/assets/images/muji-logo.svg"
            alt="avatar"
            width="88"
            height="88"
          />
          <div className="name">MUJI Team</div>
        </div>
        <div className="user-data">
          <div className="user-data-item">
            <div className="value">12</div>
            <div className="label">Asset</div>
          </div>
          <div className="user-data-item">
            <div className="value">10K</div>
            <div className="label">Followers</div>
          </div>
          <div className="user-data-item">
            <div className="value">70k</div>
            <div className="label">Likes</div>
          </div>
          <div className="user-data-item">
            <div className="value">60</div>
            <div className="label">Bidding</div>
          </div>
        </div>
        <div className="user-balance">
          <div className="balance-left">
            <img
              src="/assets/images/Ethereum.svg"
              alt="ETH"
              width="32"
              height="32"
            />

            <div className="label">4,668 ETH</div>
          </div>
          <div className="balance-right">
            <div className="label">Add</div>
            <span className="material-icons">chevron_right</span>
          </div>
        </div>
      </div>
      <div className="cart-detail">
        <div className="cart-title">
          <span>Your Biddings</span>
          <span>{cartItems.length} items</span>
        </div>
        <div className="cart-item-wrapper">
          {" "}
          {cartItems.map((item, idx) => (
            <Link key={item.id} href={`/product?id=${item.id}`}>
              <div key={item.id} className="cart-item">
                <span className="cart-item-close material-icons">cancel</span>
                <div
                  className="cart-item-image"
                  style={
                    {
                      "--labubu-card-bg": item.background,
                    } as React.CSSProperties
                  }
                >
                  <img
                    src={item.image}
                    alt={item.name || ""}
                    width="72"
                    height="72"
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">
                    {item.name} #{item.id}
                    <span>7h : 4m : 8s</span>
                  </div>
                  <div className="cart-item-price">
                    {idx === 2 && (
                      <div>
                        <span>Latest bid </span> <span>5.20 ETH</span>
                      </div>
                    )}
                    <div>
                      <span>Your bid </span> <span>2.25 ETH</span>
                    </div>
                    <button>Bid more</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
