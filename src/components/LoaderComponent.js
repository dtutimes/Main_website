import React, {Component} from 'react';

import { BoxLoading, LadderLoading } from "react-loadingg";

export const Loader = () => (
    <>
      <div
        className="section"
        style={{
          height: "100vh"
        }}
      >
        <div className="filter filter-dark" />
        <div className="content-center" >
            <BoxLoading size="large" />
        </div>
      </div>
    </>
);


export default class LoaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 2000);
    }
    
    render() {
        if (this.state.loading) return <><Loader /></>
        return (
            <div>
                {this.props.component}
            </div>
        )
    }
}