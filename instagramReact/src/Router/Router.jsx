import MainPage from "../AnaSayfa/MainPage";
import Home from "../AnaSayfa/Home";

const Routers = [
  {
    path: "/",
    Element: <MainPage />,
  },
  {
    path: "/Home",
    Element: <Home />,
  },
];

export default Routers;
