import { BackIcon, Container, BackButton, Logo } from "./styles";
import logoImg from '@/src/assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return(
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            
            <Logo source={logoImg}/>
        </Container>
    )
}