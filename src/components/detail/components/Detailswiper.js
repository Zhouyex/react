import React,{Component} from 'react'
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'



// 引入样式
import {DetailSwiperWrap} from '../detailhomeStyle'

//引入图片
import lb1 from '../../../static/lb1.jpg'
import lb2 from '../../../static/lb2.jpg'
import lb3 from '../../../static/lb3.jpg'
import lb4 from '../../../static/lb4.jpg'
import lb5 from '../../../static/lb5.jpg'

class Detailswiper extends Component{

    render(){
        // const items = this.renderList()
        return(
            <div className="Detailswiper">
                <DetailSwiperWrap>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src={lb1} alt="lb_pic"/> </div>
                            <div className="swiper-slide"><img src={lb2} alt="lb_pic"/> </div>
                            <div className="swiper-slide"><img src={lb3} alt="lb_pic"/> </div>
                            <div className="swiper-slide"><img src={lb4} alt="lb_pic"/> </div>
                            <div className="swiper-slide"><img src={lb5} alt="lb_pic"/> </div>


                        </div>
                        <div className='swiper-pagination'></div>
                    </div>
                </DetailSwiperWrap>

            </div>
        )
    }


    componentDidMount () {

        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination : {
                el: '.swiper-pagination',
            },
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
    }



}


export default Detailswiper;