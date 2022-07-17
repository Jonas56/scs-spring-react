import { httpGetOrderDetails } from "../api/orderService";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function OrderDetails() {
  const params = useParams("id");
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await httpGetOrderDetails(user.accessToken, params.id);
        setOrder(response);
      } catch (error) {
        navigate("/404");
      }
    }
    fetchData();
  }, [params, navigate]);
  return (
    <>
      <Header />
      <div className="container lg:w-2/3 xl:w-2/3 mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Order {order?.id} Details</h1>
        <div className="bg-white p-3 rounded-md shadow-md">
          <div>
            <table className="table-sm">
              <tbody>
                <tr>
                  <td className="font-bold">Order #</td>
                  <td>{order?.orderNumber}</td>
                </tr>
                <tr>
                  <td className="font-bold">Order Date</td>
                  <td>{order?.orderDate}</td>
                </tr>
                <tr>
                  <td className="font-bold">Status</td>
                  <td>
                    <span className="bg-emerald-500 text-white p-1 rounded">
                      Paid
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">SubTotal</td>
                  <td>{order?.orderTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-5" />

          <div className="mt-4">
            {order?.orderDetails.map((orderDetail) => (
              <div className="flex gap-6" key={orderDetail.id}>
                <div className="w-16 h-16 flex items-center border border-gray-300">
                  <img src={orderDetail.product.images[0].path} alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between pb-3">
                  <h3 className="text-ellipsis mb-4">
                    {orderDetail.product.description}
                  </h3>
                </div>
                <div className="flex flex-col justify-between items-end pb-3 w-32">
                  <div className="text-lg mb-4">
                    {orderDetail.product.price}
                  </div>
                  <div className="text-lg mb-4"> × {orderDetail.quantity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
