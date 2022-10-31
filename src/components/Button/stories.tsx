import {Button} from './index'
export default {
    title: 'Button',
    component: Button,
    args: {
     children: 'opa'
    }
}

export const Template = (args: any) => {
    return(
        <div>
           <button {...args}></button>
        </div>
    )
}

