import { Route, Switch } from 'react-router-dom';
import { Header} from './layout/Header';
import { Footer} from './layout/Footer';
import { Home } from './page/Home';
import Login from './page/Login';
import Today from './page/Today';
import Animal from './page/Animal';
import Animals from './page/Animals';
import { NotFound } from './page/NotFound';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const App = () => {
    return <>
        <BrowserRouter basename='/'>
        <Header />
        <main className="container content">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/today" component={Today}/>
                <Route exact path="/animals" component={Animals}/>
                <Route exact path="/animal/animalCard/:id" component={Animal}/>
                <Route component={NotFound}/>
            </Switch>
        </main>
        <Footer />
        </BrowserRouter>
    </>
}

export default App;
