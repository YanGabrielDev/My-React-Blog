import * as Styled from "./styles"
import { Logo } from "../../assets/Icons/Logo"
import { theme } from "../../styles/theme"
export const Header = () => {
  return (
    <Styled.Container>
      <Styled.contentHeader>
        <Styled.LogoTextandImage>
          <Styled.LogoText>Yan</Styled.LogoText>
          <Logo width="50px" height="44px" color={theme.colors.ciano} />
        </Styled.LogoTextandImage>

        <Styled.LogoText>Clima</Styled.LogoText>
      </Styled.contentHeader>
    </Styled.Container>
  )
}
