
import Link from 'next/link';
import styled from 'styled-components';


const MenuItems = () => {
  return (
    <>
      <ListMenu id="list-menu">
        <ListItem>
          <Link href="/" scroll={true}>
            <a className="menu-item uppercase c-white">inicio</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/sobre-mi" scroll={true}>
            <a className="menu-item uppercase c-white">sobre mi</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/servicios" scroll={true}>
            <a className="menu-item uppercase c-white">servicios</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/proyectos" scroll={true}>
            <a className="menu-item uppercase c-white">proyectos</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/contacto" scroll={true}>
            <a className="menu-item uppercase c-white">contacto</a>
          </Link>
        </ListItem>
      </ListMenu>
      <button className="c-hamburger c-hamburger--htx">
        <span></span>
      </button>
    </>
  );
}

export default MenuItems

const ListMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding-left: 50px;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  @media (max-width: 760px) {
    padding-left: 0%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 90px);
    background: var(--black);
    z-index: 5!important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    visibility: hidden;
    z-index: -1000;
    opacity: 0;
    margin-top: 90px;
  }
`;

const ListItem = styled.li`

`;