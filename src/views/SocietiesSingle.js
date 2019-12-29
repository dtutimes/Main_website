import React from 'react';
import axios from 'axios';
import SocietySingleHeader from 'components/Headers/SocietySingleHeader';

export default class SocietySingle extends React.Component {
    state = {
        data: [],
        loaded: false
    }

    componentDidMount() {
        axios.get('https://api.dtutimes.live/v1/society').then((res)=>{
            if(res && res.data) {
                this.setState({
                    data: res.data,
                    loaded: true
                })
            }
        })
    }
    render() {
        if(this.state.loaded) {
            if(this.props.match.params.slug==='cultural') {
                return (
                    <>
                        <SocietySingleHeader name='Cultural Societies'/>
                        
                    </>
                )
            } 
            else if(this.props.match.params.slug==='tech_team') {
                return (
                    <>
                        <SocietySingleHeader name='Tech Teams'/>
                    </>
                )
            }
            else if(this.props.match.params.slug==='technical') {
                return (
                    <>
                        <SocietySingleHeader name='Technical Societies'/>

                    </>
                )
            }
            else {
                return (
                    <>
                        <SocietySingleHeader name='Miscellaneous Societies'/>
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