import React, { Component } from "react";
import services from "../../mock/services";

const Services = () => {
    return(
        <>
         <div className="body">
                <div className="container-category">
                    <div className="service-category">
                        {
                            services.map(service => <div className="services">
                                {<div>
                                    {service.icon}
                                </div>}<br />
                                <h5 className="services-title">{service.name}</h5>
                                <p style={{ color: 'grey', fontSize: '14px', fontWeight: '500' }}>{service.para}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;