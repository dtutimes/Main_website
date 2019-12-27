import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// pages
import Index from "views/Index";
import About from "views/About";
import GalleryIndex from "views/GalleryIndex";
import GallerySingle from "views/GallerySingle";
import BlogPosts from "views/BlogPosts";
import BlogSingle from "views/BlogSingle"
import Team from "views/Team";
import ContactUs from "views/contactUs"
import Editions from "views/Editions";
// Components 
import MainNavbar from "components/Navbars/MainNavbar";
import MainFooter from "components/Footers/MainFooter";



const Routes = () => (
    <>
        <MainNavbar />
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/editions" component={Editions} />
            <Route path="/about" component={About} />
            <Route exact path="/gallery" component={GalleryIndex} />
            <Route path="/gallery/:slug" component={GallerySingle} />
            <Route exact path="/blog" component={BlogPosts} />
            <Route path="/story/:slug" component={BlogSingle} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={ContactUs} />
        </Switch>
        <MainFooter />
    </>
);


ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById("root"))

