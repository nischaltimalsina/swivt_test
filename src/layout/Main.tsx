import Footer from "../lib/components/navigation/Footer";
import Navbar from "../lib/components/navigation/Navbar";
import Topbar from "../lib/components/navigation/Topbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <nav className='bg-nav h-topbar'>
        <Topbar />
      </nav>
      <nav className='h-navbar border-b'>
        <Navbar />
      </nav>
      <section className="">
        <Outlet />
      </section>
      <footer className="bg-nav pt-20">
      <Footer />
      </footer>
    </main>
  );
};

export default Main;
