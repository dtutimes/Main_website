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
// import GalleryLanding from "./views/Gallery/gallery_landing";
// import GalleryFest from './views/Gallery/gallery_fest';
// import YuvaanFest from "./views/Gallery/fests/fest_yuvaan";
// import TimesCanvas from "./views/Gallery/times_canvas/canvas";
// import Seniors from "./views/Gallery/seniors_of_dtu/seniors";
// import AahvaanFest from "./views/Gallery/fests/fest_aahvaan";
// import EngiFest from "./views/Gallery/fests/fest_engi";
// import EngiEvents from "./views/Gallery/fests/engi_envents/engi_event1";
// import FreshersDtu from "./views/Gallery/freshers_of_dtu/freshers";
import Team from "views/Team";
// import NucleoIcons from "views/NucleoIcons.js";
// import Sections from "views/Sections.js";
// import Presentation from "views/Presentation.js";
// import AboutUs from "views/examples/AboutUs.js";
// import AddProduct from "views/examples/AddProduct.js";
// import BlogPost from "views/examples/BlogPost.js";
// import BlogPosts from "views/examples/BlogPosts.js";
// import ContactUs from "views/examples/ContactUs.js";
// import Discover from "views/examples/Discover.js";
// import Ecommerce from "views/examples/Ecommerce.js";
// import Error404 from "views/examples/Error404.js";
// import Error422 from "views/examples/Error422.js";
// import Error500 from "views/examples/Error500.js";
// import LandingPage from "views/examples/LandingPage.js";
// import LoginPage from "views/examples/LoginPage.js";
// import ProductPage from "views/examples/ProductPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// import SearchWithSidebar from "views/examples/SearchWithSidebar.js";
// import Settings from "views/examples/Settings.js";
// import TwitterRedesign from "views/examples/TwitterRedesign.js";
// others

// Components 
import MainNavbar from "components/Navbars/MainNavbar";
import MainFooter from "components/Footers/MainFooter";


const Routes = () => (
    <div>
        <MainNavbar />
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/editions" component={About} />
            <Route path="/about" component={About} />
            <Route exact path="/gallery" component={GalleryIndex} />
            <Route path="/gallery/:slug" component={GallerySingle} />
            <Route exact path="/blog" component={BlogPosts} />
            <Route path="/story/:slug" component={BlogSingle} />
            <Route path="/team" component={Team} />
        </Switch>
        <MainFooter />
    </div>
);


ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById("root"))

