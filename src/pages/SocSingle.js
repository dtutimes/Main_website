import React from 'react';
import axios from "axios";
import SocietySingle from '../components/PageHeaders/SocSingleSingle'
import SocSingleMain from 'sections/SocSingleSection/SocSingleMain';
import { Loader } from 'components/LoaderComponent';
export default class SocietySingleSingle extends React.Component {
    state ={
        data: [],
        loaded:false
    }
    componentDidMount() {
    axios.get(`https://api.dtutimes.live/v1/society/${this.props.match.params.slug2}`).then(res => {
      if (res && res.data) {
        this.setState({
          data: res.data,
          loaded: true
        });
      }
    });
    }
    render() {
        if(this.state.loaded) {
            return (
                <>
                    <div>
                        <SocietySingle img={this.state.data.society_imgUrl} name={this.state.data.name} des={this.state.data.description.slice(0,220)}/> 
                    </div>
                    <div>
                        <SocSingleMain des={this.state.data.description} head={this.state.data.head_incharge} headC={this.state.data.head_contact_number} pr={this.state.data.pr_incharge} prC={this.state.data.pr_contact_number} src={['https://i.ytimg.com/vi/Cfn4xfl5weM/maxresdefault.jpg','https://www.hothiphopmusic.com/wp-content/uploads/2019/07/luh-soldier-10-bands.jpg']} />
                    </div>
                </>
            )
        } else {
            return <Loader/>
        }
    }
}
