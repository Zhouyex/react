import React,{Component} from 'react'
import {connect} from 'react-redux'

import {FineWrap,FineItem} from '../homeStyle'

class Fine extends Component{


    render(){
        return(
            <div>
                <FineWrap>
                    {
                        this.props.fineList.map((item,index)=>{
                            return(
                                <FineItem key={index}>
                                    <p>{item.listTxt}</p>
                                </FineItem>
                            )
                        })
                    }
                    
                </FineWrap>

            </div>
        )
    }
}

// const mapState =(state)=>{
//     console.log(state,'Fineeeeee')
// }

const mapState=(state)=>({
    fineList:state.home.fineList
})
const mapDispatch = ()=>({
    
})


export default connect(mapState,mapDispatch)(Fine);