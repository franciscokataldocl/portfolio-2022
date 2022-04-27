import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`




h1{
font-family:var(--crimson);
font-weight:600!important;
font-size:11.44rem!important;
line-height:9.31rem!important;
letter-spacing:0.25rem!important;
}
h2{
font-family:var(--crimson);
font-weight:500!important;
font-size:3rem!important;
line-height:3rem!important;
letter-spacing:0rem!important;
}
.h2-highlight{
color:var(--pink);
font-style:italic!important;
}
.h2-outline{
font-family:var(--crimson);
font-size:8rem!important;
line-height:8rem!important;
letter-spacing:0.1rem!important;
-webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
-webkit-text-stroke-width: .05rem!important;
-webkit-text-stroke-color: var(--pink);
font-style:italic!important;

}
h2>span{
	color:var(--pink);
font-style:italic!important;
}
.h2-big{
font-family:var(--crimson);
font-size:4rem;
line-height:4rem;
font-weight: 600!important;
letter-spacing:0.25rem;
}



h3{
font-family:var(--crimson);
font-weight: 600!important;
font-size:1.3rem!important;
line-height:1.3rem!important;
letter-spacing:0.1rem!important;
}

p{
font-family:var(--inconsolata);
font-weight: 400!important;
font-size:1.2rem!important;
line-height:1.8rem!important;
letter-spacing:0.05rem!important;
}
p > a{
font-family:var(--inconsolata);
font-size:1.3rem;
font-weight: 400;
text-decoration:line-through;
color:var(--pink);
font-style: italic;

}

.btn{
font-family:var(--inconsolata);
font-weight: 700;
font-size:1.5rem;
line-height:1.8rem;
letter-spacing:0.08rem;
color:var(--pink);
text-decoration:none;
}

.menu-item{
font-family:var(--crimson);
font-size:.8rem;
line-height:1.2rem;
letter-spacing:0.1rem;
font-weight: 500;
text-decoration:none;
}
	@media only screen and (max-width : 768px){
       .menu-item{
font-family:var(--crimson);
font-size:2.1rem;
line-height:6rem;
letter-spacing:0.1rem;
font-weight: 700;
text-decoration:none;
}
    }

















/* Large Devices, Wide Screens */
	@media only screen and (max-width : 1200px) {
        h1{
font-size:8rem;
line-height:7rem;
letter-spacing:0.25rem;
        }


	}

	/* Medium Devices, Desktops */
	@media only screen and (max-width : 992px) {
  h1{
font-size:6rem;
line-height:5rem;
letter-spacing:0.25rem;

        }
		h2{
font-family:var(--crimson);
font-weight:600;
font-size:2.6rem;
line-height:3rem;
letter-spacing:0rem;
}
.h2-outline{
font-family:var(--crimson);
font-size:6rem;
line-height:6rem;
letter-spacing:0.1rem;
-webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
-webkit-text-stroke-width: .05rem;
-webkit-text-stroke-color: var(--pink);
font-style:italic;

}
	}

	/* Small Devices, Tablets */
	@media only screen and (max-width : 768px) {
h1{
font-size:4rem!important;
line-height:4rem!important;
letter-spacing:0.25rem;


        }
			h2{
font-family:var(--crimson);
font-weight:600;
font-size:2.2rem!important;
line-height:2.4rem;
letter-spacing:0rem;
}
	}
`;

export default FontStyles;
