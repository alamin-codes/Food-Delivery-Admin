import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "./../../../../frontend/src/assets/assets";

// Order.jsx
const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status", {
      orderId,
      status:event.target.value
    })
    if ( response.data.success) {
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div key={index} className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-center gap-5 border m-2 rounded px-3">
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p>{order.address.firstName + " " + order.address.lastName} </p>
                <p>{order.address.street + ", "} </p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}{" "}
                </p>
                <p>{order.address.phone} </p>
              </div>
              <p>Items: {order.items.length} </p>
              <p>${order.amount} </p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="border outline-0 px-5 py-1 rounded bg-[#e0aca3]">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Deleverd">Deleverd</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
