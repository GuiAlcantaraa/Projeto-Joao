import { useNavigation } from "@react-navigation/native";
import {
    Card,
    StyledImage,
    Title
} from "./styles"
import { TouchableOpacityProps } from "react-native";


interface IGroups {
    id: string,
    Descricao: string,
    status: number,
    imagem: string,
    nome: string,
    valor: string,
    dataRevelacao: string,
}

interface IGroupData {
    grupo: IGroups,
    id: string,
    idUsuario: string

}

interface GroupCardProps extends TouchableOpacityProps {
    data: IGroupData
    
}



export function GroupCard({ data, ...rest }: GroupCardProps) {

    const navigation = useNavigation()

    return (
        <Card {...rest} onPress={() => {navigation.navigate("DetailsGroup"), { params: data }}}>
            <StyledImage source={require('../../assets/logo.png')} />
            <Title>
                {data.grupo.nome}
            </Title>
        </Card>
    )
}