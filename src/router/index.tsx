import { createBrowserRouter } from "react-router-dom";
import { Home } from "../view/Home";
import {Login} from '../view/Login';
import { Profile } from "../view/Profile";
import {Register} from '../view/Register';
import { MeetAddView } from "../view/MeetAdd";
import { MeetEditView } from "../view/MeetEdit";
import { LinkView } from "../view/Link";
import { RoomView } from "../view/Room";

export const getRouter = (token: string) => {
    if(!token){
        return createBrowserRouter([
            {
                path: '*',
                id: 'login',
                element: <Login/>
            }, 
            {
                path: '/register',
                id: 'register',
                element: <Register/>
            }
        ]);
    }else{

        const router = [
            {
                path: '*',
                id: 'home',
                element: <Home/>
            },
            {
                path: '/user',
                id: 'user',
                element: <Profile />
            },
            {
                path: '/room/:link',
                id: 'room',
                element: <RoomView />
            }
        ];

        const mobile = window.innerWidth <= 992;

        if(!mobile){
            router.push({
                path: '/add',
                id: 'add',
                element: <MeetAddView />
            });

            router.push({
                path: '/edit/:meetId',
                id: 'edit',
                element: <MeetEditView />
            });
        }else{
            router.push({
                path: '/link',
                id: 'link',
                element: <LinkView />
            });
        }

        return  createBrowserRouter(router);
    }
}