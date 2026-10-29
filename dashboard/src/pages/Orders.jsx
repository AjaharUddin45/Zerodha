
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  const [order, setOrder] = useState({
    name: "",
    qty: 1,
    price: "",
    mode: "BUY",
  });

  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/allOrders");
      setAllOrders(res.data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching orders:", err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/newOrder", {
        ...order,
        qty: Number(order.qty),
        price: Number(order.price),
      });

      setOrder({
        name: "",
        qty: 1,
        price: "",
        mode: "BUY",
      });

      await fetchOrders();

      alert("Order placed successfully!");
    } catch (err) {
      console.log("Error saving order:", err);
      alert(err.response?.data?.message || "Failed to save order");
    }
  };

  return (
    <div className="orders">
      <h3>Place a New Order</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Stock name (e.g. TCS)"
          value={order.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="qty"
          placeholder="Quantity"
          min="1"
          value={order.qty}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          min="0.01"
          step="0.01"
          value={order.price}
          onChange={handleChange}
          required
        />

        <select
          name="mode"
          value={order.mode}
          onChange={handleChange}
        >
          <option value="BUY">BUY</option>
          <option value="SELL">SELL</option>
        </select>

        <button type="submit">Place Order</button>
      </form>

      <hr />

      <h3 className="title">
        Orders ({allOrders.length})
      </h3>

      {loading ? (
        <p>Loading orders...</p>
      ) : allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Order Date</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{Number(item.price).toFixed(2)}</td>
                  <td>{item.mode}</td>
                  <td>
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}