import React,{Component} from 'react'

import {TopicListWrap,TopicList,TopicListPic,TopicListContent} from '../homeStyle'
import {connect} from "react-redux";
class List extends Component{


    render(){
        return(
            <div>
                <TopicListWrap>
                {
                    this.props.list.map((item,index)=>{
                        return(
                            <TopicList key={index}>
                                <TopicListPic >
                                    <img src={item.imgUrl} alt="lists"/>
                                </TopicListPic>
                                <TopicListContent>
                                    <h2>{item.title}</h2>
                                    <p>
                                        {item.desc}
                                    </p>
                                </TopicListContent>
                            </TopicList>

                        )

                    })
                }

                {/*<TopicList>*/}
                {/*<TopicListPic>*/}
                {/*<img src="//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666" alt=""/>*/}
                {/*</TopicListPic>*/}
                {/*<TopicListContent>*/}
                {/*<h2>亚索</h2>*/}
                {/*<p>*/}
                {/*使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化*/}
                {/*</p>*/}
                {/*</TopicListContent>*/}
                {/*</TopicList>*/}


                </TopicListWrap>
            </div>
        )
    }
}

const mapState = (state) =>({
    list:state.home.list
})

export default connect(mapState,null)(List);