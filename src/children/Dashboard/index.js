import React, { Component } from "react";

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-preferences">

                <h5 style={{ textAlign: 'center' }}>Hi Erum Rehman</h5>
                <div className="notification-div">
                    <div className="account-notification">
                        <h2 className="counter">0</h2>
                        <h5 className="counter-title">Pending</h5>
                    </div>
                    <div className="account-notification">
                        <h2 className="counter">0</h2>
                        <h5 className="counter-title">Processing</h5>
                    </div>
                    <div className="account-notification">
                        <h2 className="counter">0</h2>
                        <h5 className="counter-title">Picked</h5>
                    </div>
                    <div className="account-notification">
                        <h2 className="counter">0</h2>
                        <h5 className="counter-title">Complete</h5>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Dashboard;