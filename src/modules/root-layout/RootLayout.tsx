import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
     return (
        <>
          <Header/>
        <main>
          <Outlet/>
        </main>
        </>
      )
}

export default RootLayout;