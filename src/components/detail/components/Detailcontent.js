import React,{Component} from 'react'
import {connect} from "react-redux";

// 引入样式
import {DetailContentWrap,DetailContentItem} from '../detailhomeStyle'

class Detailhome extends Component{

    render(){
        return(
            <div>
                <DetailContentWrap>
                    {
                        this.props.articleList.map((item,index)=>{
                            return(
                                <DetailContentItem key={index}>
                                    <p>
                                        {item.content}
                                    </p>
                                </DetailContentItem>
                            )
                        })
                    }

                </DetailContentWrap>
            </div>
        )
    }


}

// const mapState  = (state) =>{
//     console.log(state,'得到的')
// }
const mapState  = (state) =>({
    articleList:state.detail.articleList
})

export default connect(mapState,null)(Detailhome);