import { useNavigation } from "@react-navigation/native";
import { ReactNode, createContext, useState } from "react";
import api from "../services/api";

interface IUserCredentials {
    email: string,
    password: string,
}

interface IUserResponse {
    id: string,
    name: string,
    email: string,
}

interface IAuthContextData {
    user: IUserResponse | null;
    signed: boolean;
    handleSignin(credentials: IUserCredentials): Promise<void>;
    handleSignOut(): void;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({children}: AuthProviderProps) =>{

    const [user, setUser] = useState<IUserResponse | null>(null)
    const [signed, setSigned] = useState<boolean>(false)
    const navigation = useNavigation()


    async function handleSignin({email, password}: IUserCredentials){
        
        const { data } = await api.get('usuario',{
            params:{
                email,
                password
            }
        })

        const user = data[0];

        console.log("User", user)

        if(!user){
            alert("Usuario invalido");
            setUser(null)
            setSigned(false)
            return;
        }

        setUser(user)
        setSigned(true)

        navigation.navigate("Home");
    }

    function handleSignOut() {
        setSigned(false)
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{ handleSignin, signed, user, handleSignOut }}
        >
            {children}
        </AuthContext.Provider>
    )
}