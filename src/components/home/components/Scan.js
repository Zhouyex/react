import React,{Component} from 'react'
import {connect} from 'react-redux'

import {ScanWrap,ScanItem,ScanEr} from '../homeStyle'
import er1 from "../../../static/1.png"
import er2 from "../../../static/2.png"


class Scan extends Component{


    render(){
        return(
            <div>
                <ScanWrap>
                    {
                        this.props.scanList.map((item,index)=>{
                            return(
                                <ScanItem key={index}>
                                    <img src={item.imgUrl} alt="scanpics" />
                                </ScanItem>  
                            )
                            
                        })
                        

                    }
                    {/* 二维码 */}

                </ScanWrap>    
                
                <ScanEr>
                    <img src={er1}  width="120" alt="er1"/>
                    <img src={er2}  width="120" alt="er2"/>
                </ScanEr>    
            </div>
        )
    }
}

// const mapState =(state)=>{
//     console.log(state,'scannnn')
// }

const mapState=(state)=>({
    scanList:state.home.list
})
const mapDispatch = ()=>({
    
})

export default connect(mapState,mapDispatch)(Scan);