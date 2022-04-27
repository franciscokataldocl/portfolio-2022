import { createGlobalStyle } from "styled-components";


const BaseStyles = createGlobalStyle`

:root{
--pink: #F54286;
--black: #000000;
--grey: #646464;
--grey-light: #F0F0F0;
--white: #ffffff;

--crimson:'Crimson Pro', serif;
--inconsolata:'Inconsolata', monospace;


}


*{
  box-sizing: border-box;
}

html, body {
  position: fixed;
  height: 100%;
  overflow: hidden;
}

html{
        -webkit-locale: "es-CL";


}
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--inconsolata);
    overflow-x: hidden;
    color:var(--grey);
    overscroll-behavior-y:none;
     margin: 0;
  width: 100vw;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  font-size:16px;
}
main{
height:100%;}

html::-moz-selection{
color: var(--pink)!important;
      background: var(--black);
}
textarea:focus, input:focus, select:focus{
    outline: none;
}

ul{
    list-style: none;
    padding:0;
    margin:0;
}
.section-spaces{
padding-left: 100px;
padding-right: 100px;
}
@media only screen and (max-width : 768px) {
.section-spaces{
padding-left: 30px;
  padding-right: 30px;

}
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{
  background:var(--pink);
}

/* .overflow-hidden{
  overflow-x: hidden;
} */

`;

export default BaseStyles;
