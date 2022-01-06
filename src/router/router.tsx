
import {NotFound,Login, Wizard} from "../components"
interface Iroutes{
    path:string
    component:any,
    ext:boolean,
    meta:Imeta,
}
interface Imeta{
    title:string
}
export let routes:Array<Iroutes> = [

    {
        path:"/",
        component: Wizard,
        ext:true,
        meta:{
            title:"Wizard"
        },
        
    },
   

]

export let commonRoutea = [
    {
        path:"/login",
        ext:true,
        component: Login,
        meta:{
            title:"Login"
        },
    },
    {
        path:"/404",
        ext:true,
        component: NotFound,
        meta:{
            title:"404"
        },
    }
]