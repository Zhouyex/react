import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

//引入组件
import Detailswiper from './components/Detailswiper'
import Detailcontent from './components/Detailcontent'

// 引入样式
import {DetailHomeWrap} from './detailhomeStyle'

class Detailhome extends Component{

    render(){
        return(
            <div>
                <DetailHomeWrap>
                        {/* Detail Home */}
                        <h2>青竹原创生活类电商品牌</h2>
                        {/*<span>sdz</span>*/}
                        {/*轮播图*/}
                        <Detailswiper/>

                        {/*文章*/}
                        <Detailcontent>

                        </Detailcontent>

                </DetailHomeWrap>
            </div>
        )
    }

    componentDidMount()
    {
        axios.get('/api/getHomeList.json').then((res)=>{
            // console.log(res,'detailllllllll') //可以拿到
            console.log(res.data.data,'detailllllllll') //可以拿到
            const data = res.data.data;
            const action = {
                type:'get_detail_data',
                data
            }
            this.props.getDetailData(action)

        })
    }


}
const mapDispatch = (dispatch) =>({
    getDetailData(action)
    {
        dispatch(action)
    }
})

export default connect(null,mapDispatch)(Detailhome);