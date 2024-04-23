import { useNavigation } from "@react-navigation/native";
import { ReactNode, createContext, useState } from "react";
import api from "../services/api";

interface IUser {
    email: string,
    password: string,
}

interface IAuthContextData {
    user: IUser | null;
    signed: boolean;
    handleSignin(credentials: IUser): Promise<void>;
    handleSignOut(): void;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({children}: AuthProviderProps) =>{

    const [user, setUser] = useState<IUser | null>(null)
    const navigation = useNavigation()


    async function handleSignin({email, password}: IUser){
        

        const { data } = await api.get('usuario',{
            params:{
                email,
                password
            }
        })
    
        if(!data[0]){
            alert("Usuario invalido.")
            setUser(null)
            return;
        }

        setUser(user)
        navigation.navigate('Home')
    }

    function handleSignOut() {
        sessionStorage.clear();
        setUser(null);

        return navigation.navigate('Login')
    }

    return (
        <AuthContext.Provider
            value={{ handleSignin, signed: !!user, user, handleSignOut }}
        >
            {children}
        </AuthContext.Provider>
    )
}