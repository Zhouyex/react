import React,{Component} from 'react'
import {connect} from 'react-redux'


import {TopicWrap,TopicItem} from '../homeStyle'
class Topic extends Component{
    render(){
        return(
            <div>
                <TopicWrap>

                    {
                        this.props.topicList.map((item,index)=>{
                            return(
                                    <TopicItem key={index}>
                                        <img src={item.imgUrl} alt="itemPic_s"/>
                                        <span>{item.txt}</span>
                                    </TopicItem>
                                )

                        })
                    }
                    {/*<TopicItem>*/}
                        {/*<img src="//asset.ibanquan.com/s/30611/586/index_global1_pic_3?v=1552557703_1560932666" alt="pic3"/>*/}
                        {/*<span>青竹</span>*/}
                    {/*</TopicItem>*/}

                    {/*{*/}
                        {/*this.props.list.map((item,index)=>{*/}
                            {/*return(*/}
                                {/*<TopicList>*/}
                                    {/*<TopicListPic key={index}>*/}
                                        {/*<img src={item.listUrl} alt="lists"/>*/}
                                    {/*</TopicListPic>*/}
                                    {/*<TopicListContent>*/}
                                        {/*<h2>{item.title}</h2>*/}
                                        {/*<p>*/}
                                            {/*{item.desc}*/}
                                        {/*</p>*/}
                                    {/*</TopicListContent>*/}
                                {/*</TopicList>*/}

                            {/*)*/}

                        {/*})*/}
                    {/*}*/}

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


                </TopicWrap>
            </div>
        )
    }
}

// const mapState = (state) =>{
//     console.log(state)
// }

const mapState = (state) =>({
    topicList:state.home.topicList
})

export default connect(mapState,null)(Topic);