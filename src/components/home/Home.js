import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {HomeWrap,HomeLeft,HomeRight} from './homeStyle'
import Banner from '../../static/banner.png'
import Topic from "./components/Topic";
import List from "./components/List";

import Scan from "./components/Scan"
import Fine from "./components/Fine"
// import Head from "../head/Head"

class Home extends Component{
    render(){
        return(
            <div>
                {/* <Head></Head> */}
                <HomeWrap>

                    <HomeLeft >
                        <img src={Banner} alt="banner" width="600"/>
                        <Topic/>
                        <List/>
                    </HomeLeft>

                    <HomeRight>
                        <Scan/>
                        <Fine/>   
                    </HomeRight>

                </HomeWrap>

            </div>
        )
    }

    componentDidMount()
    {
        axios.get('/api/getHomeList.json').then((res)=>{
            console.log(res.data.data,'请求的数据')
            const data = res.data.data;
            const action = {
                type:'init_home_list',
                data
            }
            this.props.initHomeList(action)

        })
    }
}

const mapDispatch = (dispatch) =>({
    initHomeList(action)
    {
        dispatch(action)
    }
})

export default connect(null,mapDispatch)(Home)