import React, { Component } from 'react';

import api from '../../services/api';

import Navigation from '../../components/navigation';

import './styles.css';

export default class Projects extends Component {

    constructor() {
        super();

        this.state = {
            projects: null,
        }
    }

    async componentDidMount() {
        const object = await api.get('/projects');
        const { projects } = object.data;
        
        this.setState({ projects });
    }

    render() {
        const projects = this.state.projects;

        return(
            <div id="projects">
                <Navigation />

                <article>
                    <strong>Projetos</strong>
                    
                    {projects != null ? projects.map( project => {
                        
                                        return (
                                            <section className="item-project" key={project.title}>
                                                <div className="project-txt">
                                                    <strong>{project.title}</strong>
                                                    <p>{project.description}</p>
                                                    <a href={project.url}>Acessar</a>
                                                </div>
                                                <div className="project-img">
                                                    <img src={project.thumbnail_url} alt="project" />
                                                </div>
                                            </section>
                                        )}
                    ) : ''}

                </article>
            </div>
        );
    }

}