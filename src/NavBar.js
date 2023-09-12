/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import {
    Link,
    NavLink,
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import MobileNav from "./MobileNav";
library.add(fab);

export const ReactNavbar = ({ color, logo, menu, social, sticky }) => {
    const [navLinks, setNavLinks] = useState([
        { name: "HOME", to: "/" },
        { name: "ARTICLES", to: "/articles" },
        { name: "ABOUT ME", to: "/about" },
        { name: "CONTACT", to: "/contact" },
    ]);
    const [socialIcon, setSocialIcon] = useState([
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
        },
        {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
        },
    ]);
    const [background, setBackground] = useState("black");
    const [logoUrl, setLogoUrl] = useState("https://www.writeups.org/wp-content/uploads/He-Man-Masters-Universe-portrait-featured.jpg");
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        menu ? setNavLinks(menu) : [];
        color ? setBackground(color) : null;
        logo ? setLogoUrl(logo) : null;
        social ? setSocialIcon(social) : [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    if (width < 1150) {
        return (
            <MobileNav
                width={width}
                logoUrl={logoUrl}
                background={background}
                navLinks={navLinks}
                socialIcon={socialIcon}
                sticky={sticky}
            />
        );
    }

    const Error = () => <h1>Please pass the component in the menu prop</h1>;

    return (
        <div style={{ minHeight: "100vh", width: "100%" }}>
            <Router>
                <Controller>
                    <Scene triggerHook="onLeave" duration={300} pin>
                        {(progress) => (
                            <Timeline totalProgress={progress} paused>
                                <Tween
                                    from={{ height: "150px" }}
                                    to={{ height: "80px", background: background }}
                                >
                                    <div className="header">
                                        <div className="navLogo">
                                            <Link to="/">
                                                <div className="logo-container">
                                                    <Timeline totalProgress={progress} paused>
                                                        <Tween
                                                            from={{ height: "140px" }}
                                                            to={{ height: "70px" }}
                                                        >
                                                            <img
                                                                className="LogoImg"
                                                                src={logoUrl}
                                                                alt="logo"
                                                            />
                                                        </Tween>
                                                    </Timeline>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="navHeaderTitle">
                                            HeMan Woman Haters Investment Club
                                        </div>

                                        <div className='navLinks'>
                                            <ul>
                                                {navLinks.map((link, i) => (
                                                    <li key={i}>
                                                        <NavLink
                                                            exact
                                                            to={link.to}
                                                            activeClassName='home'
                                                        >
                                                            {link.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='navSocial'>
                                            <ul>
                                                {socialIcon.map((icon, i) => (
                                                    <li key={i}>
                                                        <a target="_blank" without rel="noreferrer" href={icon.url}>
                                                            {icon.name === "Sportsbet" ? <img src={icon.icon} alt="SportsBet Logo" className="navSocialImg"/> :
                                                                <FontAwesomeIcon icon={icon.icon} />
                                                            }
                                                        </a>
                                                        <span className='tooltiptext'>
                                                            {icon.name}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Tween>
                            </Timeline>
                        )}
                    </Scene>
                </Controller>
                <Switch>
                    {navLinks.map((link, i) => (
                        <Route
                            key={i}
                            exact
                            path={link.to}
                            component={link.component ? link.component : Error}
                        />
                    ))}
                </Switch>
            </Router>
        </div>
    );
};