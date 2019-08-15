import styled from 'styled-components';


export const  HomeWrap = styled.div`
  width: 1000px;
  height: 1410px;
  margin: 20px auto;
  //background-color:#ccc;
  
  
`;
export const  HomeLeft = styled.div`
  width: 600px;
  
  float: left;

`;
export const  HomeRight = styled.div`
  width: 300px;
  /* height: 1300px;  */
  float: right;
  /* background-color:red; */
 
`;

//Topic
export const  TopicWrap = styled.div`
  width: 600px;
  //height: 150px;
  margin: 10px 0;
  //padding: 20px 0;
  float: left;
  //background-color:green;
`;

//小方块 X 10
export const  TopicItem = styled.div`
  width: 110px;
  height: 50px;
  margin: 10px 10px 30px 0px;
  //background-color:yellow;
  border: 1px solid #eee;
  padding-right: 10px;
  float: left;
  img{
    width: 60px;
    height: 40px;
    margin: 5px;
  }
  span{
    display: inline-block;
    line-height: 50px;
    font-size: 14px;
  }
`;

//列表
export const  TopicListWrap = styled.div`
  width: 600px;
  //height: 200px;
  float: left;
  //border: 2px solid black;
  
  //background-color:#3c3c3c;
  
  
 
`;
export const  TopicList = styled.div`
  width: 590px;
  
  height: 194px;
  margin-bottom: 10px;
  float: left;
  border: 2px solid black;
  
  
 
`;

export const  TopicListPic = styled.div`
  width: 240px;
  height: 190px;
  float: left;
  background-color:#fff;  
  text-align: center;
  line-height: 190px;
`;

export const  TopicListContent= styled.div`
  width: 340px;
  height: 190px;
  float: left;
  border-left: 2px solid ;
 
  h2{
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin-left: 20px;
    
  }
  p{
  margin:0 20px;
  }  
`;


// 右侧 上部分 scan

export const  ScanWrap = styled.div`
  width: 300px;
  /* height: 1000px; */
  /* background-color: pink; */
 
`;
export const  ScanItem = styled.div`
  width: 300px;
  height: 152px;
  background-color: green;
  border:2px solid #ccc;
  margin-bottom:30px;
  img{
    width:296px;
    height:148px;
  }
 
`;


export const  ScanEr = styled.div`
  width: 300px;
  height: 120px;
  margin-bottom:20px;
  background-color: green;
  img{
    margin: 0 15px;
  }
`;


// Fine 列表
export const  FineWrap = styled.div`
  width: 300px;
  /* height: 120px; */
  margin-bottom:20px;
  /* background-color: #333; */
  
`;
export const  FineItem = styled.div`
  /* padding-top:20px; */
  width: 300px;
  height: 50px;
  line-height:50px;
  /* margin-bottom:20px; */
  border-bottom:2px solid #ccc;
  font-size:20px;
  text-align: center; 
  /* background-color: #ccc; */
  
`;







