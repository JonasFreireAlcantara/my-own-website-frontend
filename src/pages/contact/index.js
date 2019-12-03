import React, { Component } from 'react';

import Navigation from '../../components/navigation';

import './styles.css';

export default class Contact extends Component {

    render() {
        return (
            <div id="contact">
                <Navigation />

                <article>
                    <strong>Contato</strong>
                    <ul>
                        <li>
                            <span>LinkedIn:</span>
                            <a className="item-contact" href="https://www.linkedin.com/in/jonas-freire-alcantara/">LinkedIn</a>
                        </li>
                        <li>
                            <span>GitHub:</span>
                            <a className="item-contact" href="https://github.com/JonasFreireAlcantara">GitHub</a>
                        </li>
                        <li>
                            <span>E-mail:</span>
                            <span className="item-contact" >jonasfreireperson@gmail.com</span>
                        </li>
                        <li>
                            <span>Facebook:</span>
                            <a className="item-contact" href="https://www.facebook.com/jonas.freire.alcantara">Facebook</a>
                        </li>
                    </ul>
                </article>
            </div>
        );
    }

}