import {SideBar} from './index'
export default {
    title: 'SideBar',
    component: SideBar,
    args: {
     children: 'opa'
    }
}

export const Template = (args: any) => {
    return(
        <div>
            < SideBar {...args}/>
        </div>
    )
}

