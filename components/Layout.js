import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
