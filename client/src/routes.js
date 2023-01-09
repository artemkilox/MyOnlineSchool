import {
    CLIENT_SUPPORT_ROUTE,
    DATABASE_ROUTE,
    MAIN_PAGE_ROUTE,
    MANAGER_LOGIN_ROUTE, MANAGER_REGISTRATION_ROUTE,
    NEW_USERS_ROUTE
} from "./utils/consts";
import Database from "./pages/Database";
import ClientSupport from "./pages/ClientSupport";
import NewUsers from "./pages/NewUsers";
import MainPage from "./pages/MainPage";
import ManagerAuth from "./pages/ManagerAuth";
import TablePage from "./pages/TablePage";

export const authRoutes = [
    {
        path: DATABASE_ROUTE,
        Component: Database
    },
    {
        path: DATABASE_ROUTE + '/:name',
        Component: TablePage
    },
    {
        path: CLIENT_SUPPORT_ROUTE,
        Component: ClientSupport
    },
    {
        path: NEW_USERS_ROUTE,
        Component: NewUsers
    }
]

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: MANAGER_LOGIN_ROUTE,
        Component: ManagerAuth
    },
    {
        path: MANAGER_REGISTRATION_ROUTE,
        Component: ManagerAuth
    },
]