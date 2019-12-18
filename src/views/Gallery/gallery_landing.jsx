import React from 'react';
import { Link } from "react-router-dom";
import ItemsCarousel from 'react-items-carousel';

//styles
import "./styles/landing.scss"


export default class GalleryLanding extends React.Component {
    state = {
        activeItemIndex: 0,
        data: [],
        loaded: false,
        mob: false
    }
componentDidMount() {
    const a =  window.innerWidth;
    console.log(a)
    if(a<=800) {
        this.setState({
            mob: true
        })
        console.log(this.state.mob);
    }
    else {
        this.setState({
            mob: false
        })
        console.log(this.state.mob);
    }
    window.addEventListener('resize',()=>{
        const b =  window.innerWidth;
        if(b<=800) {
            this.setState({
                mob: true
            })
            console.log(this.state.mob);
        }
        else {
            this.setState({
                mob: false
            })
            console.log(this.state.mob);
        }
    })
}

render() {
    return (
        <>
        <ItemsCarousel
                infiniteLoop={true}
                gutter={0}
                activePosition={'center'}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={true}
                numberOfCards={this.state.mob?1:3}
                slidesToScroll={1}
                outsideChevron={false}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={this.state.activeItemIndex}
                requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                rightChevron={<i className="tim-icons icon-double-right"/>}
                leftChevron={<i className="tim-icons icon-double-left"/>}
                className="gal-flex"
         > 
            <div className="item-1 text-center align-center text-front"><div className="inside"><Link to='/gallery/fest'><h1 style={{color:'white'}}>Fest</h1></Link></div></div>
            <div className="item-2 text-center align-center"><div className="inside"><Link to='/gallery/times_canvas'><h3 style={{color:'white'}}>Times Canvas</h3></Link></div></div>
            <div className="item-3 text-center align-center"><div className="inside"><Link to='/gallery/seniors_of_dtu'><h3 style={{color:'white'}}>Seniors of DTU</h3></Link></div></div>
            <div className="item-4 text-center align-center"><div className="inside"><Link to='/gallery/freshers_of_dtu'><h3 style={{color:'white'}}>Freshers Of DTU</h3></Link></div></div>
        </ItemsCarousel>
        </>
    )
}
}