
import Footer from '../footer/Footer';
import Header from '../header/Header';


export default function Layout({ children }) {

  return (
    <div >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
