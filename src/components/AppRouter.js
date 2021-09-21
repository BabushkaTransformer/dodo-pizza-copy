import {Switch, Route, Redirect} from "react-router-dom";
import {publicRoutes} from "../routes";
import Header from "./Header/Header";

const AppRouter = () => {
    return (
        <>
            <Header/>
            <Switch>
                {publicRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} component={Component} exact/>
                ))}
                <Redirect to={"/"}/>
            </Switch>
        </>
    );
};

export default AppRouter;
