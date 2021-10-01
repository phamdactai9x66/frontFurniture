import { Route } from "react-router-dom"
import Home from "./page/client/pageClient/home/home"
import NotFound from "./page/client/pageClient/notFound/notFound";

import HomeAdmin from "./page/admin/pageAdmin/home/home";
import AddMusic from "./page/admin/pageAdmin/addMusic/addMusic";
import NotFoundAdmin from "./page/admin/pageAdmin/notFound/notFoundAdmin";
import Todolist from "./page/admin/pageAdmin/todolist/todolist";
import Personal from "./page/client/pageClient/personal/personal";
import Signin from "./page/client/pageClient/signin/signin";
import ForgotPassword from "./page/client/pageClient/forgotPassword/forgotPassword";


export interface propertyPage {
    path: string,
    component: any,
    exact: boolean
}

const Admin: propertyPage[] = [
    {
        path: "/admin",
        component: HomeAdmin,
        exact: true
    },
    {
        path: "/admin/AddMusic",
        component: AddMusic,
        exact: true
    },
    {
        path: "/admin/todolist",
        component: Todolist,
        exact: true
    },
    {
        path: "/admin/:pathNotFound",
        component: NotFoundAdmin,
        exact: false
    }

]

const Client: propertyPage[] = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/personal",
        component: Personal,
        exact: true
    },
    {
        path: "/signin",
        component: Signin,
        exact: true
    },
    {
        path: "/forgotpassword",
        component: ForgotPassword,
        exact: true
    },
    {
        path: "/:pathNotFound",
        component: NotFound,
        exact: false
    }

]
function handlePage<T extends propertyPage[]>(Page: T): JSX.Element[] {
    if (Page == undefined || Page == null) return [];

    return Page.map((currenValue, index) => {
        let { path, component, exact } = currenValue;
        return (
            <Route key={index}
                path={path}
                component={component}
                exact={exact}
            />
        )
    })
}
export { handlePage, Client, Admin }