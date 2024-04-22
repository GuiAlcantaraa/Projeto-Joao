import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { TabsRoutes } from "./tab.routes";
import { GuestRoutes } from "./guest.routes";

export function PrivateRoutes() {
    const { signed } = useContext(AuthContext);


    return signed ? <TabsRoutes /> : <GuestRoutes />

}