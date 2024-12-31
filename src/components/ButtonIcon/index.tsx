import { TouchableOpacityProps } from "react-native";
import { Container, ButtonIconStyleProps, Icon } from "./styles";
import type { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconStyleProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return(
    <Container>
      <Icon 
        name={icon}
        type={type}
      />
    </Container>
  )
}