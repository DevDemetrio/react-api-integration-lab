import { Outlet } from "react-router-dom";
import { Header } from "../../component/Header";

export function MainLayout(){
 return(
    <>
    <Header />
    <Outlet />
    </>
 )
}