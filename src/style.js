import {injectGlobal} from 'styled-components';
injectGlobal`
body{margin:0;font:12px/1 "微软雅黑";}
h1,h2,h3,h4,h5,h6{margin:0;font-weight:normal;font-size:100%;}
p,dl,dd{margin:0;}
ul,ol{margin:0;padding:0;list-style:none;}
b,strong{font-weight: normal;}
em,i{font-style:normal;}
a{text-decoration: none;color:#333;}
img{border:none;vertical-align:bottom;}
.clearfix{*zoom:1;}/*兼容处理低版本*/
/*zoom:1;触发haslayout  有布局*/
.clearfix:after{content:"";display:block;clear:both;
    height:0;overflow:hidden;font-size:0;line-height:0;}
input {margin: 0;padding: 0;border: none;}
input[type="submit"], input[type="reset"], input[type="button"] {box-sizing: content-box;}
textarea {resize: none;overflow: auto;}
table {border-spacing: 0;border-collapse: collapse;}
table td, table th {padding: 0;}
.fl{float: left;}
.fr{float: right;}
`
