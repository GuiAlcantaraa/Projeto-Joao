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


interface GroupCardProps extends TouchableOpacityProps {
    data: IGroups
}



export function GroupCard({ data, ...props }: GroupCardProps) {
    const navigation = useNavigation();
    return (
        <Card {...props}>
            <StyledImage source={require('../../assets/logo.png')} />
            <Title>
                {data.nome}
            </Title>
        </Card>
    )
}