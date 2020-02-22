import React, { Component } from 'react';

import { MoonLoader } from 'react-spinners';

import api from '../../services/api';

import Navigation from '../../components/navigation';

import './styles.css';

export default class Projects extends Component {

    constructor() {
        super();

        this.state = {
            projects: null,
            projectsLoading: true,
        }
    }

    async componentDidMount() {
        const object = await api.get('/projects');
        const { projects } = object.data;
        
        this.setState({ 
            projects,
            projectsLoading: false,
        });
    }

    render() {
        const { projects, projectsLoading } = this.state;

        return(
            <div id="projects">
                <Navigation />

                <article>
                    <strong>Projetos</strong>
                    
                    {projectsLoading && 
                        <div id="projects-spinner-loader">
                            <MoonLoader loading={true}
                                size={45} />
                        </div>
                    }

                    { !projectsLoading && projects && projects.map( project => (
                            <section className="item-project" key={project.title}>
                                <div className="project-txt">
                                    <strong>{project.title}</strong>
                                    <p>{project.description}</p>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">Acessar</a>
                                </div>
                                <div className="project-img">
                                    <a href={project.thumbnail_url}><img src={project.thumbnail_url} alt="project" /></a>
                                </div>
                            </section>
                        ))
                    }

                </article>
            </div>
        );
    }

}