import React, { Component } from "react";
import './index.scss';
import stamp from "../../mock/stamp";
import services from "../../mock/services";
import Services from "../../components/Services";
import categories from "../../mock/categories";
import { BsFillPlayFill } from "react-icons/bs";
import { textAlign } from "@mui/system";
import serviceIcon from "../../mock/serviceIcon";
import Background from '../../components/Background';

const About = () => {
    return (
        <>
            <Background title="About Us" />
            <div className="about-container">
                <div className="about-img">
                    <img src={require("../../images/about-bg.jpg")} />
                </div>
                <div className="about-para">
                    <p style={{ color: '#00152b', fontSize: '16px', fontWeight: '500' }}>Welcome to EG</p>
                    <h3>
                        What can a great About Us page do for your business?
                    </h3>
                    <p className="para-abt">
                        An About Us page helps your company make a good first impression, and is critical
                        for building customer trust and loyalty. An About Us page should make sure to cover basic
                        information about the store and its founders, explain the company's purpose and how it
                        differs from the competition, and encourage discussion and interaction.
                        <br /> Ius ferri velit
                        sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.
                        Donec vitae sapien ut libero venenatis faucibus.
                    </p>
                    {
                        stamp.map(stamp => <div className="stamp">
                            <div className="stp-img">
                                {stamp.img}
                            </div>

                        </div>)
                    }
                    <a href="" className="read-butn">READ MORE</a>

                </div>
            </div>
            <div className="about-container">
                <div className="abt-video">
                    <div className="abt-vid-link">
                        <a href="https://www.youtube.com/watch?v=rFMwNqfg5-Yv" target="_blank"><BsFillPlayFill className="play" /></a>
                    </div>
                </div>

            </div>

            <p className="food-para">Food Is Always Fresh</p>
            <h2 style={{ textAlign: 'center', fontWeight: '700' }}>Why Choose Us</h2>
            <div className="body">
                <div className="service-container">
                    {
                        serviceIcon.map(servicesIcon => <div className="Icon">
                            {<div>
                                {servicesIcon.icon}
                            </div>}
                            <h5 className="Icon-title">{servicesIcon.name}</h5>
                            <p style={{ color: 'grey', fontSize: '15px', fontWeight: '400' }}>{servicesIcon.para}</p>
                            <a className="read-more">Read More</a>
                        </div>)
                    }
                </div>
            </div>
            <Services/>
        </>
    )
}
export default About;