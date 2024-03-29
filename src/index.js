import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Interpolator} from 'react-apply-darkmode';
import useDarkMode from 'use-dark-mode';
import {
    enable as enableDarkMode,
    setFetchMethod as setFetch
    } from 'darkreader';
    
    
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// pages
import Pages from "pages";

// Components 
import Navbar from "components/Navbar";
import MainFooter from "components/Footers/MainFooter";
import Presentation from "sections/SocSection/SocietiesIndex";

// DarkReader.setFetchMethod(window.fetch);
// DarkReader.enable();
// import "./assets/css/styles.css";
// import { PageTransition } from '@steveeeie/react-page-transition';
function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
const Routes = () => {
    useEffect(()=>{
        ReactGA.initialize('UA-164542121-2');
        ReactGA.pageview(window.location.pathname);
    }, [])
    const darkMode = useDarkMode(false);
    setFetch(window.fetch);
    return (
        <Interpolator
      appearance= {darkMode.value?"dark":"light"}
      watchSystem={false}
      filter={{brightness: 100, contrast:90}}>
    <Navbar />
    {
        // <Route
        // render={({ location }) => {
        //   return (
        //     <PageTransition
        //       preset="moveToLeftFromRight"
        //       transitionKey={location.pathname}
        //     >
               
                


        //             </PageTransition>
        //         );
        //     }}
        // />
    }
        <Switch >
            <Route exact path="/" component={Pages.LandingPage} />
            <Route path="/about" component={Pages.AboutPage} />
            <Route path="/editions" component={Pages.EditionPage} />
            <Route exact path="/blog" component={Pages.BlogPage} />
            <Route path="/blog/:slug" component={Pages.BlogSinglePage} />
            <Route exact path="/gallery" component={Pages.GalleryPage} />
            <Route path="/gallery/:slug" component={Pages.GallerySinglePage} />
            <Route path="/team" component={Pages.TeamPage} />
            <Route path="/contact" component={Pages.ContactPage} />
            <Route path='/societies' component={Presentation} exact />
            <Route path='/societies/:slug' component={Pages.SocietySinglePage} exact/>
            <Route path='/societies/:slug/:slug2' component={Pages.SocietySingleSingle} />
            <Route path='/quiz' component={Pages.QuizPage} exact />
            <Route path='/quiz/:slug' component={Pages.QuizSinglePage} exact/>
        </Switch>         
        <MainFooter />
    </Interpolator>

    );
};

ReactDOM.render(<BrowserRouter><ScrollToTop/><Routes /></BrowserRouter>, document.getElementById("root"))

