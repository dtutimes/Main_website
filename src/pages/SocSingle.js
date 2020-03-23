import React from 'react';
import axios from "axios";
import SocietySingle from '../components/PageHeaders/SocSingleSingle'
import SocSingleMain from 'sections/SocSingleSection/SocSingleMain';
import { Loader } from 'components/LoaderComponent';
export default class SocietySingleSingle extends React.Component {
    state ={
        data: [],
        news:[],
        newsLoad: false,
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
    axios.get(`https://api.dtutimes.live/v1/society/${this.props.match.params.slug2}/news`).then(res => {
      if (res && res.data) {
        this.setState({
          news: res.data,
          newsLoad: true
        });
      }
    });
    
    }
    render() {
        console.log(this.state.news)
        if(this.state.loaded && this.state.newsLoad) {
            return (
                <>
                    <div>
                        <SocietySingle img={this.state.data.society_imgUrl} name={this.state.data.name} des={this.state.data.description.slice(0,220)} /> 
                    </div>
                    <div>
                        <SocSingleMain des={this.state.data.description} head={this.state.data.head_incharge} headC={this.state.data.head_contact_number} pr={this.state.data.pr_incharge} prC={this.state.data.pr_contact_number} src={['https://i.ytimg.com/vi/Cfn4xfl5weM/maxresdefault.jpg','https://www.hothiphopmusic.com/wp-content/uploads/2019/07/luh-soldier-10-bands.jpg']} news ={this.state.news} />
                    </div>
                </>
            )
        } else {
            return <Loader/>
        }
    }
}
