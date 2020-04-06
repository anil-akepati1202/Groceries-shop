import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';
import PlpPage from '../../containers/plp/Plp';
import App from '../../App';
import { Route, Link, BrowserRouter as Router,NavLink } from 'react-router-dom'

class HeadNav extends Component {

    render() {
        return (
            <Aux>
                <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Brand</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/layout">Layout</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/products" tabindex="-1" >Products</a>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                           
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                </nav>
                {/* <Route path="/" component={App} exact /> */}
                <Route path="/layout" component={Layout} exact />
                 <Route path="/products" component={PlpPage} exact />
                {/*<Route path="/blogs" component={Blogs} exact /> */}
                </Router>
              </Aux>
        )
    }
}
export default HeadNav;
