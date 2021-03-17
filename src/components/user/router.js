import User from "./index";
import UserUpdate from "./UserUpdate";
import UserView from "./UserView";

const userRouter = [
    {
        path: '/user',
        name: "user",
        component: User
    },
    {
        path: '/user/:name',
        name: "user-view",
        component: UserView
    }
    ,
    {
        path: '/user-update/:name',
        name: "user-update",
        component: UserUpdate
    }
]

export { userRouter }