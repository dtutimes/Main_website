import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
import About from "views/About.js";
import GalleryLanding from "./views/Gallery/gallery_landing";
import GalleryFest from './views/Gallery/gallery_fest';
import YuvaanFest from "./views/Gallery/fests/fest_yuvaan";
import TimesCanvas from "./views/Gallery/times_canvas/canvas";
import Seniors from "./views/Gallery/seniors_of_dtu/seniors";
import AahvaanFest from "./views/Gallery/fests/fest_aahvaan";
import EngiFest from "./views/Gallery/fests/fest_engi";
import EngiEvents from "./views/Gallery/fests/engi_envents/engi_event1";
import FreshersDtu from "./views/Gallery/freshers_of_dtu/freshers";
import SectionTeam from './views/sections-sections/SectionTeam'


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
            <Route
            path="/gallery"
            exact={true}
            render = {props => <GalleryLanding {...props}/>}
            />
            <Route
                path="/gallery/fest"
                exact={true}
                render = {props => <GalleryFest {...props}/>}
            />
            <Route
                path="/gallery/seniors_of_dtu"
                exact={true}
                render = {props => <Seniors {...props}/>}
            />
            <Route
                path="/gallery/freshers_of_dtu"
                exact={true}
                render = {props => <FreshersDtu {...props}/>}
            />
            <Route
                path="/gallery/fest/yuvaan"
                exact={true}
                render = {props => <YuvaanFest {...props}/>}
            />
            <Route
                path="/gallery/fest/aahvaan"
                exact={true}
                render = {props => <AahvaanFest {...props}/>}
            />
            <Route
                path="/gallery/times_canvas"
                render = {props => <TimesCanvas {...props}/>}
            />
            <Route
                path="/gallery/fest/engifest"
                exact= {true}
                render = {props => <EngiFest {...props}/>}
            />
            <Route
                path="/gallery/fest/engifest/:slug"
                render = {props => <EngiEvents {...props}/>}
            />
            <Route
                path="/team"
                render = {props => <SectionTeam {...props}/>}
            />
        </Switch>
        <MainFooter />
    </div>
);


ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById("root"))

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>


//       <Route path="/index" render={props => <Index {...props} />} />
//       <Route
//         path="/nucleo-icons"
//         render={props => <NucleoIcons {...props} />}
//       />
//       <Route path="/sections" render={props => <Sections {...props} />} />
//       <Route
//         path="/presentation"
//         render={props => <Presentation {...props} />}
//       />
//       <Route path="/about-us" render={props => <AboutUs {...props} />} />
//       <Route path="/add-product" render={props => <AddProduct {...props} />} />
//       <Route path="/blog-post" render={props => <BlogPost {...props} />} />
//       <Route path="/blog-posts" render={props => <BlogPosts {...props} />} />
//       <Route path="/contact-us" render={props => <ContactUs {...props} />} />
//       <Route path="/discover" render={props => <Discover {...props} />} />
//       <Route path="/e-commerce" render={props => <Ecommerce {...props} />} />
//       <Route path="/error-404" render={props => <Error404 {...props} />} />
//       <Route path="/error-422" render={props => <Error422 {...props} />} />
//       <Route path="/error-500" render={props => <Error500 {...props} />} />
//       <Route
//         path="/landing-page"
//         render={props => <LandingPage {...props} />}
//       />
//       <Route path="/login-page" render={props => <LoginPage {...props} />} />
//       <Route
//         path="/product-page"
//         render={props => <ProductPage {...props} />}
//       />
//       <Route
//         path="/profile-page"
//         render={props => <ProfilePage {...props} />}
//       />
//       <Route
//         path="/register-page"
//         render={props => <RegisterPage {...props} />}
//       />
//       <Route
//         path="/search-with-sidebar"
//         render={props => <SearchWithSidebar {...props} />}
//       />
//       <Route path="/settings" render={props => <Settings {...props} />} />
//       <Route
//         path="/twitter-redesign"
//         render={props => <TwitterRedesign {...props} />}
//       />
//       <Redirect to="/presentation" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
