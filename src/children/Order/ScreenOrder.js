import React, { Component } from "react";
import './index.scss';
import { FiEye } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import Orders from "../../pages/Orders";
import { Link, useNavigate } from 'react-router-dom';

const ScreenOrder = () => {
    const { order: { shippingData, shippingData: { date, totalPrice, orderId } } } = useSelector(state => state);
    const navigate = useNavigate();

    return (
        <>
            <div className="account-container">
                <div className="account-preferences col-lg-9">
                    <table className="order-table">
                        <thead className="table-body">
                            <tr>
                                <td className="card-checkout">Order Id</td>
                                <td className="card-checkout">Order Date</td>
                                <td className="card-checkout">Status</td>
                                <td className="card-checkout">Total</td>
                                <td className="card-checkout">Active</td>

                            </tr>
                        </thead>
                        <tbody className="table-body">

                            {shippingData.map((item, index) => (
                                <tr key={item}>
                                    <td className="card-shipping">#{item.orderId}</td>
                                    <td className="card-shipping">{item.date}</td>
                                    <td className="card-shipping">Pending</td>
                                    <td className="card-shipping">${item.totalPrice}</td>
                                    <td className="card-shipping">
                                        <FiEye className="orderEye" onClick={() => navigate("/orders",{ state: item })} />
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ScreenOrder;