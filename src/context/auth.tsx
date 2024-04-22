import { useNavigation } from "@react-navigation/native";
import { ReactNode, createContext, useState } from "react";

interface IUser {
    username: string,
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


    async function handleSignin({username, password}: IUser){
        const userNameFake = 'baxolis'
        const passwordFake = '123'

        if(userNameFake === username && passwordFake === password){
            const user = {
               username,
            password
            }
            setUser(user)
            navigation.navigate('Home')
        }
        else {
            setUser(null)
        }

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