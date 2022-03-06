import React, { Component } from "react";
import './index.scss';
import { FiEye } from "react-icons/fi";

const ScreenOrder = () => {
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


                                <tr>
                                    <td className="card-shipping">#56986</td>
                                    <td className="card-shipping">21 August 2021</td>
                                    <td className="card-shipping">Pending</td>
                                    <td className="card-shipping">$ 985. 0789.00 for 85 Items</td>
                                    <td className="card-shipping"><FiEye /></td>
                                </tr>
                                <tr>
                                    <td className="card-shipping">#56986</td>
                                    <td className="card-shipping">21 August 2021</td>
                                    <td className="card-shipping">Pending</td>
                                    <td className="card-shipping">$ 985. 0789.00 for 85 Items</td>
                                    <td className="card-shipping"><FiEye /></td>
                                </tr>
                                <tr>
                                    <td className="card-shipping">#56986</td>
                                    <td className="card-shipping">21 August 2021</td>
                                    <td className="card-shipping">Pending</td>
                                    <td className="card-shipping">$ 985. 0789.00 for 85 Items</td>
                                    <td className="card-shipping"><FiEye /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </>
    )
}
export default ScreenOrder;