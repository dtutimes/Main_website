import React from "react";
import { Link, Redirect } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip
} from "reactstrap";
// core components

function ColorNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [bodyClick, setBodyClick] = React.useState(false);
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 499 ||
                document.body.scrollTop > 499
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 500 ||
                document.body.scrollTop < 500
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {bodyClick ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setBodyClick(false);
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar
                className={classnames("fixed-top", navbarColor)}
                expand="lg"
                id="navbar-main"
            >
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand id="navbar-brand" to="/" tag={Link}>
                            DTU TIMES
                        </NavbarBrand>
                        <UncontrolledTooltip placement="bottom" target="navbar-brand">
                            The Official Newsletter of DTU
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler"
                            id="navigation"
                            type="button"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setBodyClick(true);
                                setCollapseOpen(true);
                            }}
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <Collapse navbar isOpen={collapseOpen}>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/about">about</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/edition">edition</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/story">blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/gallery">gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/team">team</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorNavbar;


