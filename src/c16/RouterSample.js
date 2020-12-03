import {
    HashRouter as Router,
    Link,
    Route
} from 'react-router-dom'
import {MemoryRouter} from 'react-router'


const Home = () => <h1>Home</h1>;
const Hello = () => <h1>Hello</h1>;
const About = () => <h1>About Us</h1>;
export function RouterSample(){
    return (
        <MemoryRouter history={history}>
            <div>
                <ul id="menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/hello">Hello</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <div id="page-container">
                    <Route path="/home" component={Home} />
                    <Route path="/hello" component={Hello} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        </MemoryRouter>
    )
}