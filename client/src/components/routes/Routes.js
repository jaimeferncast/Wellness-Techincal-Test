import { Switch, Route } from "react-router-dom"

import Index from "../pages/IndexPage/IndexPage"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Index />} />
            <Route path="/consumos" exact render={() => <Index />} />
        </Switch>
    )
}

export default Routes