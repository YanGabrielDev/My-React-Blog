import { Link } from "react-router-dom"
import { Content } from "../../components/Content"
import * as Styled from "./styles"
export const Home = () => {
  return (
    <>
      <Content>
        <Styled.Title>Olá</Styled.Title>
        <p>
          Meu nome é Yan Gabriel, sou estudante de Ciências da Computação e
          desenvolvedor FrontEnd. Esse projeto foi desenvolvido com o proposito
          de explorar alguns conhecimentos meus adquiridos com estudos e
          experiências profissionais na área de desenvolvimento web.
        </p>
        <p>
          Essa página tem uma tela dedicada a <Link to={"./posts"}>posts</Link>,
          vivencias e experiência que eu tive em relação a jornada como
          desenvolvedor ou algum pensamento reflexivel que eu possa querer
          guardar
        </p>
      </Content>
    </>
  )
}
