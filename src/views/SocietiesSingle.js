import React from 'react';
import axios from 'axios';
import SocietySingleHeader from 'components/Headers/SocietySingleHeader';
import SocietiesCard from './societies/SocietiesCard';

import {Col} from 'reactstrap'

let c = []
let tt = []
let t = []
let m = []
export default class SocietySingle extends React.Component {
    state = {
        data: [],
        loaded: false
    }

    componentDidMount() {
        c = []
        tt = []
        t = []
        m = []
        axios.get('https://api.dtutimes.live/v1/society').then((res)=>{
            if(res && res.data) {
                this.setState({
                    data: res.data,
                    loaded: true
                })
                
            }
        })
    }
    componentWillUnmount() {

    }
    render() {
        if(this.state.loaded) {
            for(let i=0;i<this.state.data.length;i++){
                if(this.state.data[i].category==='cultural') {
                    c.push(i)
                    console.log(c)
                }
                else if(this.state.data[i].category==='tech_team') {
                    tt.push(i)
                }
                else if(this.state.data[i].category==='technical') {
                    t.push(i)
                }
                else {
                    m.push(i)
                }
            }
            if(this.props.match.params.slug==='cultural') {
                return (
                    <>
                        <SocietySingleHeader name='Cultural Societies' />
                        {c.map((cs)=>{
                            return(
                            <Col md='4' className="mt-5">
                                <SocietiesCard img={this.state.data[cs].society_imgUrl} name={this.state.data[cs].name} des={this.state.data[cs].description} head={this.state.data[cs].head_incharge} prHead={this.state.data[cs].pr_incharge} />
                            </Col>
                            
                            )
                        })}
                        
                    </>
                )
            } 
            else if(this.props.match.params.slug==='tech_team') {
                return (
                    <>
                        <SocietySingleHeader name='Tech Teams'/>
                        {tt.map((tts)=>{
                            return(
                            <Col md='4' className="mt-5">
                                <SocietiesCard img={this.state.data[tts].society_imgUrl} name={this.state.data[tts].name} des={this.state.data[tts].description} head={this.state.data[tts].head_incharge} prHead={this.state.data[tts].pr_incharge} />
                            </Col>
                            
                            )
                        })}
                    </>
                )
            }
            else if(this.props.match.params.slug==='technical') {
                return (
                    <>
                        <SocietySingleHeader name='Technical Societies'/>
                        {t.map((ts)=>{
                            return(
                            <Col md='4' className="mt-5">
                                <SocietiesCard img={this.state.data[ts].society_imgUrl} name={this.state.data[ts].name} des={this.state.data[ts].description} head={this.state.data[ts].head_incharge} prHead={this.state.data[ts].pr_incharge} />
                            </Col>
                            
                            )
                        })}

                    </>
                )
            }
            else {
                return (
                    <>
                        <SocietySingleHeader name='Miscellaneous Societies'/>
                        {m.map((ms)=>{
                            return(
                            <Col md='4' className="mt-5">
                                <SocietiesCard img={this.state.data[ms].society_imgUrl} name={this.state.data[ms].name} des={this.state.data[ms].description} head={this.state.data[ms].head_incharge} prHead={this.state.data[ms].pr_incharge} />
                            </Col>
                            
                            )
                        })}
                    </>
                ) 
            }
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }
}