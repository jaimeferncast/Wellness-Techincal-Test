import { Switch, Route } from "react-router-dom"

import Index from "../pages/IndexPage/IndexPage"
import PhoneList from "../pages/Phones/PhoneList"
import PhonePage from "../pages/Phone-details/PhonePage"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Index />} />
            <Route path="/teléfonos" exact render={() => <PhoneList />} />
            <Route path="/teléfonos/:id" render={props => <PhonePage {...props} />} />
        </Switch>
    )
}

export default Routes