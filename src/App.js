import { Route, Switch } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ProfilePage } from './ProfilePage'

export const App = (props) => {
    console.log(props)

    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/profile">
                <ProfilePage />
            </Route>
        </Switch>
    )
}
