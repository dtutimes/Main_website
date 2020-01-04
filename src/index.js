import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// pages
import Pages from "pages";
// import Index from "views/Index";
// import GalleryIndex from "views/GalleryIndex";
// import GallerySingle from "views/GallerySingle";
// import BlogPosts from "views/BlogPosts";
import BlogSingle from "views/BlogSingle"
// import Team from "views/Team";
// import ContactUs from "views/contactUs";
// import Editions from "views/Editions";

// Components 
import Navbar from "components/Navbar";
import MainFooter from "components/Footers/MainFooter";
// import Presentation from "views/SocietiesIndex";
// import SocietySingle from "views/SocietiesSingle";

const Routes = () => (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Pages.LandingPage} />
            <Route path="/about" component={Pages.AboutPage} />
            <Route path="/editions" component={Pages.EditionPage} />
            <Route exact path="/blog" component={Pages.BlogPage} />
            <Route path="/story/:slug" component={Pages.BlogSinglePage} />
            {/* <Route exact path="/gallery" component={GalleryIndex} />
            <Route path="/gallery/:slug" component={GallerySingle} />
            <Route path="/story/:slug" component={BlogSingle} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={ContactUs} />
            <Route path='/societies' component={Presentation} exact />
            <Route path='/societies/:slug' component={SocietySingle}/> */}
        </Switch>
        <MainFooter />
    </>
);

ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById("root"))

