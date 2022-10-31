import { ReactNode } from "react"

export interface ButtonInterface  {
    children: ReactNode,

}
export const Button = ({children}: ButtonInterface) => {
    return(
        <div>
            <button style={{
                fontSize: "30px",
                backgroundColor: 'red'
            }}>{children}</button>
        </div>
    )
}