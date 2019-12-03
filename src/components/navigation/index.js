import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Navigation extends Component {

    render() {
        return (
            <nav className="navigation-menu">
                
                <div id="buttons">
                    <Link className="navigation-button" to="/">Home</Link>
                    <Link className="navigation-button" to="/projects">Projetos</Link>
                    <Link className="navigation-button" to="/contact">Contato</Link>
                </div>

                <hr />
            </nav>
        );
    }

};
