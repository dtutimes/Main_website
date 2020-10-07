import React, {useState,useEffect} from 'react';

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
        <div className="content-center" >
            <BoxLoading size="large" />
        </div>
      </div>
    </>
);

const LoaderComponent = (props) => {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[]);
    if (loading) return (<><Loader /></>)
    return (
        <div>
            {props.component}
        </div>
    )
}
export default LoaderComponent