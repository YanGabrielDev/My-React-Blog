import { Content } from "../../components/Content"
import * as Styled from "./styles"
export const Posts = () => {
  return (
    <Content>
      <Styled.TitleLink to={"/Juninho"}>A saga do estagiário</Styled.TitleLink>
      <Styled.Paragraph>
        A visão e os pensamentos de um estagiário em busca da tão sonhada
        efetivação.
      </Styled.Paragraph>
      <Styled.Date>08/11/2022 09:03 AM</Styled.Date>
    </Content>
  )
}
