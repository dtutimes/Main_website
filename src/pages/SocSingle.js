import React from 'react';
import SocietySingle from '../components/PageHeaders/SocSingleSingle'
import SocSingleMain from 'sections/SocSingleSection/SocSingleMain';
import { Loader } from 'components/LoaderComponent';

import api from "api";
export default class SocietySingleSingle extends React.Component {
    state ={
        data: [],
        news:[],
        newsLoad: false,
        loaded:false
    }
    componentDidMount() {
    api.get(`society/${this.props.match.params.slug2}`).then(res => {
      if (res && res.data) {
        this.setState({
          data: res.data,
          loaded: true
        });
      }
    });
    api.get(`/society/${this.props.match.params.slug2}/news`).then(res => {
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
                        <SocSingleMain img={this.state.data.society_imgUrl} des={this.state.data.description} head={this.state.data.head_incharge} headC={this.state.data.head_contact_number} pr={this.state.data.pr_incharge} prC={this.state.data.pr_contact_number} src={['https://i.ytimg.com/vi/Cfn4xfl5weM/maxresdefault.jpg','https://picsum.photos/800/400?img=6','https://picsum.photos/800/400?img=5','https://picsum.photos/800/400?img=4']} news ={this.state.news} />
                    </div>
                </>
            )
        } else {
            return <Loader/>
        }
    }
}
