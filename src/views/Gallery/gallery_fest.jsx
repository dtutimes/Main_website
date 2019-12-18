import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Link } from "react-router-dom";

//styles
import "./styles/fest.scss"


export default class GalleryFest extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        activeItemIndex: 0,
        mob: false
        // pics: []
    }
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
        <div>
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
                rightChevron={'>'}
                leftChevron={'<'}
                className="gal-flex"
            >
                <div className="item-1-1 text-center align-center text-front"><div className="inside"><Link to='/gallery/fest/engifest'><h3 style={{color:'white'}}>Engifest</h3></Link></div></div>
                <div className="item-1-2 text-center align-center"><div className="inside"><Link to='/gallery/fest/yuvaan'><h3 style={{color:'white'}}>Yuvaan</h3></Link></div></div>
                <div className="item-1-3 text-center align-center"><div className="inside"><Link to='/gallery/fest/aahvaan'><h3 style={{color:'white'}}>Aahvaan</h3></Link></div></div>
                <div className="item-1-4 text-center align-center"><div className="inside"><h3>Invictus</h3></div></div>
            </ItemsCarousel>
        </div>
        </>
    )
}
}