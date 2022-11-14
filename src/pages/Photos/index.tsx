import { useEffect, useState } from "react"
import { Content } from "../../components/Content"
import { Thumbnail, ModalContent } from "../../components/ModalImage"
import * as Styled from "./styles"
import { image } from "./mock"
import api from "../../services/PhotoApi/index"
import { AxiosResponse } from "axios"
export const Photos = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [images, setImages] = useState<any>()

  const getImages = async (): Promise<any> => {
    const res: AxiosResponse<any> = await api({})

    setImages(res.data)
    return res
  }

  useEffect(() => {
    getImages()
  }, [])
  return (
    <Content>
      <Thumbnail onOpen={() => setIsOpen(true)}>
        {images.map((img: any) => {
          return <Styled.thumbnailImage src={img.download_url} />
        })}
      </Thumbnail>
      {isOpen && (
        <ModalContent onClose={() => setIsOpen(false)}>
          <img src="//placekitten.com/4000/3000" />
        </ModalContent>
      )}
    </Content>
  )
}
