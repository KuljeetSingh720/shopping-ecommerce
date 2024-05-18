import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./Order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);
// Fetching order on page reload
  useEffect(() => {
    async function fetchData() {
      const email = localStorage.getItem("email");
      try {
        const response = await axios.post("http://localhost:4000/getorders", {
          email,
        });
        console.log(response.data, email);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="orderitems">
      <div className="orderitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Status</p>
      </div>
      <hr />
      {orders?.map((order) => {
        return order?.products.map((product) => {
          console.log(product);
          return (
            <div>
              <div className="orderitems-format orderitems-format-main">
                <img
                  src={product?.image}
                  className="orderitems-product-icon"
                  alt=""
                />
                <p>{product.name}</p>
                <p> Placed</p>
              </div>
              <hr />
            </div>
          );
        });
      })}
    </div>
  );
};
export default Order;
