import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Link } from "react-router-dom";
import axios from 'axios'
import ".././styles/nucleo-icons.css";
//styles
import ".././styles/fest.scss"



const slugs = []
class EngiFest extends React.Component {
state = {
        activeItemIndex: 0,
        data: {},
        loaded: false,
        mob:false
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
  axios({
      method: 'GET',
      url:'https://api.dtutimes.live/v1/gallery/engifest-201'
  }).then(res => {
      const x = res.data
      this.setState({
          data: x,
          loaded: true
      })
  })
  console.log(this.state.loaded)

}
render() {
    if(this.state.loaded===true) {
    const y = []
    const z= []
    
    if(this.state.loaded)
    {
        y.push(this.state.data.subs_info)
        for(var j=0;j<25;j++) {
            z.push(y[0][j])
        }
        for(var j=0;j<25;j++) {
            slugs.push(z[j].slug)
        }
    }
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
                rightChevron={<i className="tim-icons icon-double-right"/>}
                leftChevron={<i className="tim-icons icon-double-left"/>}
                className="gal-flex"
            > 
            <div className="item-1-1 text-center align-center" style={{height:'800px'}}>
                 <div className="inside">
                    <Link to={'/gallery/fest/'}><h3 style={{color:'white'}}>Back</h3></Link>
                </div>
            </div>
            {z.map(i=>{
                const back = {
                    backgroundImage: `url(${i.url})`,
                    backgroundSize: 'cover',
                    flexGrow: '1',
                    paddingTop: '350px',
                    paddingBottom: '320px',
                    height: '800px',
                    flexShrink: '1'
                }
                return (
                    <div className="text-center align-center" key={i.slug} style={back}>
                        <div className="inside">
                            <Link to={'/gallery/fest/engifest/'+i.slug}><h3 style={{color:'white'}}>{i.name}</h3></Link>
                        </div>
                    </div>
                )
            })}
            </ItemsCarousel>
        </div>
        </>
    )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}
}
export default EngiFest
export {slugs}