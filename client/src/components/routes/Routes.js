import { Switch, Route } from "react-router-dom"

import Index from "../pages/IndexPage/IndexPage"
import UsageTable from "../pages/UsageTable/UsageTable"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Index />} />
            <Route path="/consumos" exact render={() => <UsageTable />} />
        </Switch>
    )
}

export default Routes