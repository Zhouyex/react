import React from 'react'
import {connect} from 'react-redux'
// 使用路由   先下载   npm install react-router-dom
import {HashRouter as Router,Route,Link}from "react-router-dom"


// import Home from '../home/Home'
// import Home from './components/home/Home'
// import Detailhome from '../detail/Detailhome'


import {HeadWrap,Logo,Nav,NavItem,SearchWrap,SearchInput,SearchSuggestions,SearchSuggestionsItems} from "./headStyle";
import * as headActionCreate from './headStore/headActionCreate'

// class Head extends Component{
//     render()
//     {
//         return(
//             <HeadWrap>
//                 <Logo/>
//                 <Nav>
//                     <NavItem>首页</NavItem>
//                     <NavItem>详情页</NavItem>
//                 </Nav>
//                 <SearchSuggestions className={this.props.flag ? 'flag' : ''}>
//                     {
//                         this.props.searchsuggestions.map((item,index)=>{
//                             return(
//                                 <SearchSuggestionsItems key={index}>
//                                     <i>{item}</i>
//                                 </SearchSuggestionsItems>

//                             )
//                         })
//                     }
//                 </SearchSuggestions>
//                 <SearchWrap>
//                     <SearchInput className={this.props.flag ? 'flag' : ''}  //false
//                         onFocus={this.props.inputFocus}
//                         onBlur={this.props.inputBlur}
//                     />

//                 </SearchWrap>
//                 {/*搜索图标*/}
//                 <span className='glyphicon glyphicon-search'></span>

//             </HeadWrap>
//         )
//     }
// }

// 改写成无状态组件
function Head(props)
{
    const {flag,searchsuggestions,inputFocus,inputBlur} = props;
    return(
        <div>
            <HeadWrap>
                <Logo/>
                    <Nav>
                        <Router>
                            <Link to={'/home'}>
                                <NavItem>首页</NavItem>
                            </Link>
                            

                            <Link to={'/detail'}>
                                <NavItem>详情页</NavItem>
                            </Link> 
                        </Router>
                        
                    </Nav>

                <SearchSuggestions className={flag ? 'flag' : ''}>
                    {
                        searchsuggestions.map((item,index)=>{
                            return(
                                <SearchSuggestionsItems key={index}>
                                    <i>{item}</i>
                                </SearchSuggestionsItems>

                            )
                        })
                    }
                </SearchSuggestions>
                <SearchWrap>
                    <SearchInput className={flag ? 'flag' : ''}  //false
                        onFocus={inputFocus}
                        onBlur={inputBlur}
                    />

                </SearchWrap>
                {/*搜索图标*/}
                <span className='glyphicon glyphicon-search'></span>

            </HeadWrap>


        </div>
    )
}



// const mapState = (state) =>{
//     console.log(state)
// };

const mapState = (state)=>({
    flag:state.head.flag,
    searchsuggestions:state.head.searchSuggestions

});

const mapDispatch = (dispatch)=>({
    inputFocus()
    {
        // const action = {
        //     type:'input_focus'
        // };
        // dispatch(action);
        dispatch(headActionCreate.handleFocus())
    },

    inputBlur()
    {
        // const action = {
        //     type:'input_blur'
        // }
        // dispatch(action);
        dispatch(headActionCreate.handleBlur())

    }
});

export default connect(mapState,mapDispatch)(Head);