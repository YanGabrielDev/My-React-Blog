import { Link } from "react-router-dom"
import { Content } from "../../components/Content"
import * as Styled from "./styles"
import Profile from '../../assets/Yan.jfif'
export const Home = () => {
  return (
    <>
      <Content>
        <Styled.ProfileContent>
          <Styled.ProfilePhoto src={Profile}/>
          <div>
          <Styled.Title>Yan Gabriel</Styled.Title>
          <Styled.Discription>Front End developer</Styled.Discription>
          </div>
        </Styled.ProfileContent>
        <hr/>
        <Styled.Paragraph>
          Olá meu nome é Yan, sou estudante de Ciências da Computação e
          apaixonado por desenvolvimento de software. Esse projeto foi desenvolvido com o proposito
          de explorar alguns conhecimentos meus adquiridos com estudos e
          experiências profissionais na área de desenvolvimento web.
        </Styled.Paragraph>
        <Styled.Paragraph>
          Essa página tem uma tela dedicada a <Link to={"./posts"}>posts</Link>,
          vivencias e experiência que eu tive em relação a jornada como
          desenvolvedor ou algum pensamento reflexivel que eu possa querer
          guardar.
        </Styled.Paragraph>
      </Content>
    </>
  )
}
