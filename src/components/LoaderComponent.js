import React, {Component} from 'react';

import { BoxLoading } from "react-loadingg";

export const Loader = () => (
    <>
      <div
        className="section"
        style={{
          height: "100vh"
        }}
      >
        <div className="filter filter-dark" />
        <div className="content-center"><BoxLoading /></div>
      </div>
    </>
);


export default class LoaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 3000);
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