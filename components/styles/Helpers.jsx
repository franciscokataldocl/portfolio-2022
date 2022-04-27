import { createGlobalStyle } from "styled-components";

const HelpersCss = createGlobalStyle`

.c-pink{
    color:var(--pink);
}
.c-black{
    color:var(--black);
}
.c-grey{
    color:var(--grey);
}
.c-grey-light{
    color:var(--grey-light);
}
.c-white{
    color:var(--white);
}
.bg-pink{
    background-color:var(--pink);
}
.bg-black{
    background-color:var(--black);
}
.bg-grey{
    background-color:var(--grey);
}
.bg-grey-light{
    background-color:var(--grey-light);
}
.bg-white{
    background-color:var(--white);
}

/* margins */
.mt-50{
    margin-top:50px;
}
.mt-100{
    margin-top:100px;
}
.mb-20{
    margin-bottom:20px;
}

.mb-50{
    margin-bottom:50px;
}
.mb-100{
    margin-bottom:100px;
}
.mr-50{
    margin-right:50px;
}
.mr-100{
    margin-right:100px;
}

.ml-50{
    margin-left:50px;
}
.ml-100{
    margin-left:100px;
}

.text-center{
    text-align:center;
}

.uppercase{
    text-transform: uppercase;
}
.capitalize{
    text-transform: capitalize;
}

.no-decoration{
    text-decoration:none;
}

.multiply{
    mix-blend-mode: multiply;
}

.no-color{
filter: grayscale(1%) brightness(62%) saturate(0%) contrast(59%);
-webkit-filter: grayscale(1%) brightness(62%) saturate(0%) contrast(59%);
-moz-filter: grayscale(1%) brightness(62%) saturate(0%) contrast(59%);
}



/* rotation animation */
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotate {
  -webkit-animation: rotating 4s linear infinite;
  -moz-animation: rotating 4s linear infinite;
  -ms-animation: rotating 4s linear infinite;
  -o-animation: rotating 4s linear infinite;
  animation: rotating 4s linear infinite;
}


/* arrow bounce */
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}



/* MENU ITEM HOVER ANIMATION */
.menu-item{
    position:relative;
    overflow:hidden;
      -webkit-transition: color .2s ease-out;
  -moz-transition: color .2s ease-out;
  -o-transition: color .2s ease-out;
  transition: color .2s ease-out;


}
.menu-open{
background:var(--black)!important;
}
.menu-item:after{
    content:'';
    width:0%;
    height:2px;
    left:0;
    background:var(--pink);
    position:absolute;
    top:7px;
        -webkit-transition: all .4s ease-out;
  -moz-transition: all .4s ease-out;
  -o-transition: all .4s ease-out;
  transition: all .4s ease-out;

}
@media only screen and (max-width : 768px){
  .menu-item:after{
    content:'';
    width:0%;
    height:2px;
    left:0;
    background:var(--pink);
    position:absolute;
    top:22px;
        -webkit-transition: all .4s ease-out;
  -moz-transition: all .4s ease-out;
  -o-transition: all .4s ease-out;
  transition: all .4s ease-out;

}
}
.menu-item:hover{
    color:var(--pink);
}
.menu-item:hover:after{
width:100%;
}
.menu-open{
  background:var(--black);
            -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
}
.menu-open img{
 filter: invert(100%);
    -webkit-filter: invert(1);
    -moz-filter: invert(100%);
   -o-filter: invert(100%);
   -ms-filter: invert(100%);
}

.site-padding{
    padding-left:50px;
  padding-right:50px;
}

	@media only screen and (max-width : 768px) {
.site-padding{
    padding-left:20px;
  padding-right:20px;
}
	}


.animate-3s{
            -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
}





.c-hamburger {
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  display:flex;
  justify-content: center;
  align-items:center;
  display:none;
}
/* menu animation click */
	@media only screen and (max-width : 1280px) {
    .c-hamburger{
      display:none;
    }
  }
  @media only screen and (max-width : 768px) {
    .c-hamburger{
      display:block;
    }
  }

.c-hamburger:focus {
  outline: none;
}

/* Create Hamburger Lines */
.c-hamburger span {
  display: block;
  position: absolute;
  top: 44px;
  left: 20px;
  right: 35px;
  height: 5px;
  background: white;
   width: 40px;
  height: 5px;
}

.c-hamburger span::before,
.c-hamburger span::after {
  position: absolute;
  display: block;
  left: 0;
  width: 40px;
  height: 5px;
  background-color: var(--white);
  content: "";
}

.c-hamburger span::before {
  top: -15px;
   width: 40px;
  height: 5px;
}

.c-hamburger span::after {
  bottom: -15px;
   width: 40px;
  height: 5px;
}

/* Animate Hamburger */
.c-hamburger--htx {
  background-color:var(--black);
}

.c-hamburger--htx span {
  transition: background 0s .3s;
}

.c-hamburger--htx span::before,
.c-hamburger--htx span::after {
  transition-duration: 0.3s, 0.3s;
  transition-delay: 0.3s, 0s;
}

.c-hamburger--htx span::before {
  transition-property: top, transform;
}

.c-hamburger--htx span::after {
  transition-property: bottom, transform;
}

/* active state, i.e. menu open */
.c-hamburger--htx.is-active {
  background-color: var(--white);
}

.c-hamburger--htx.is-active span {
  background: none;

}

.c-hamburger--htx.is-active span::before {
  top: 0;
  transform: rotate(45deg);
   background-color:var(--black)
}

.c-hamburger--htx.is-active span::after {
  bottom: 0;
  transform: rotate(-45deg);
   background-color:var(--black)
}

.c-hamburger--htx.is-active span::before,
.c-hamburger--htx.is-active span::after {
  transition-delay: 0s, 0.3s;
}

.show-menu{
    visibility: visible!important;
    z-index:100000!important;
    opacity: 1!important;

}

.text-max-width{
  max-width:600px;
}
.text-to-right{
  margin-left:5%;
}
@media only screen and (max-width : 768px){
  .text-to-right{
  margin-left:0%;
}
}


textarea {
  resize: none;
}
.btn-send{
border:none;
background:none;
}
.error{
  color:red;
  font-size:.9rem!important;
}
.success-msg{
  color:#34cb34;
  font-size:1rem;
  border-top:var(--grey) solid 1px;
  padding-top:20px;
  margin-top:10px;
}

`;

export default HelpersCss;
