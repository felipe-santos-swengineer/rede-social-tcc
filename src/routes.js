import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages import
import Login from "./pages/login/Login";

//auth
import StoreProvider from './components/Store/Provider';
//import PrivateRoute from "./components/Routes/Private/private";

//<Route path="/creditos" component={Creditos} />
//<PrivateRoute path="/alunoHome" component={Aluno_Home} user={"aluno"} />

export default function Routes() {
    return (
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    )
}