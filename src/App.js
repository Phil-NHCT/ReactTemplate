import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./display/Header";
import Footer from "./display/Footer";
import SideNav from "./display/SideNav";
import NavMenubar from "./display/NavMenubar";
import UserDisplay from "./components/UserDisplay";

function App() {
  return (
    <div className="container container-fluid">
      <Header title="Template" />
      <NavMenubar />
      <SideNav />
      <UserDisplay />
      <Footer />
    </div>
  );
}

export default App;
