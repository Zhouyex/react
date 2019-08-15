import styled from 'styled-components';

//引入路径
import logo from '../../static/logo.jpg'

export const  HeadWrap = styled.div`
  width: 100%;
  height: 60px;
  background-color:#ccc;
  
  position: relative;
   //搜索按钮
  span{
    font-size: 30px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
`;

export const  Logo = styled.div`
  width: 90px;
  height: 60px;
  background-color:#ffff00;
  float: left;
  
  background:url(${logo}) no-repeat;
  background-size: 90px 60px;
`;

export const  Nav = styled.div`
  //width: 300px;
  height: 60px;
  //background-color:pink;
  float: left;
  margin-left: 100px;
`;


export const  NavItem = styled.i`
  width: 100px;
  height: 60px;
  //background-color:pink;
  margin:0 20px;
  float: left;
  line-height: 60px;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
 
  text-decoration: none;
`;

//搜索框 大外框
export const  SearchWrap = styled.div`
  
  height: 40px;
  position: relative;
  float: right;
  margin-top: 10px;
  margin-right: 50px;
  //background-color:red;
 
 
`;

//建议搜索 外框
export const  SearchSuggestions= styled.div`
  //width: 200px;
  height: 40px;
  float: left;
  //display: inline-block;
  position: relative;
  left: 390px;
  top: 10px; 
  //display: none;
  //background-color:red;
  transition: 1s;
  opacity: 0;
  &.flag{
    //display: block;
    transition: 1s;
    opacity: 10;
  }
 
`;
export const  SearchSuggestionsItems= styled.div`
  width: 70px;
  height: 40px;
  line-height: 40px;
  color: #333;
  //background-color:blue;
  float: left;
  i{
  font-size: 16px;
  
  }
 
`;

export const  SearchInput = styled.input`
  padding-left: 15px;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 40px;
  background-color:#eee;
  
  //position:absolute;
  transition: 1s;
  &.flag{
  width: 220px;
  transition: 1s;
  }
  
`;














