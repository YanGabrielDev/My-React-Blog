import { useState } from "react"
import { Content } from "../../components/Content"
import { Thumbnail, ModalContent } from "../../components/ModalImage"
// import Image from "../../../public/disco.jpg"
export const Photos = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const showModal = () => setIsOpen((prev) => !prev)

  return (
    <Content>
      <Thumbnail onOpen={() => setIsOpen(true)}>
        <img src="//placekitten.com/400/300" />
      </Thumbnail>
      {isOpen && (
        <ModalContent onClose={() => setIsOpen(false)}>
          <img src="//placekitten.com/4000/3000" />
        </ModalContent>
      )}
    </Content>
  )
}
