import React, { Component } from 'react';

import Navigation from '../../components/navigation';

import jonas from '../../assets/jonas.jpg';

import './styles.css';

class Home extends Component {

    render() {
        return (
            <div id="home">
                <Navigation />

                <article>
                    <strong>Quem é Jonas</strong>
                    <p>Sou um cristão recifense que atualmente faz Bacharelado em Ciência da Computação
                    pela Universidade Federal Rural de Pernambuco, também conhecida como <i>ruralinda</i>.</p>

                    <p>Quando pequeno, meu sonho era ser um inventor, descobri que hoje em dia isso não é tão
                    presente na sociedade, mas percebi que engenharia era um tipo de inventor disfarçado em tão
                    começei a aspirar por engenharia, me dediquei bastante no ensino médio à Química, Física e Matemática,
                    fiz o vestibular, e fui mal, passei mais um ano estudando, me dedicando bastante, foi quando comecei
                    a conhecer uma linguagem de programação (Script) chamada Shell Script, quando vi um tutorial para começar
                    a usá-la percebi a potencialidade que tinha nas minhas mãos, a única coisa necessária era lógica,
                    criatividade e tempo, e assim você poderia fazer coisas espetaculares, criar coisas realmente,
                    então descobri que a programação é mais atual forma de invenção, um programador hoje em dia pode
                    ser chamado de inventor.</p>

                    <p>Foi aí que eu começei a deixar engenharia de lado e focar em Tecnologia da Informação, passei
                    no vestibular e desde então, só tenho me apaixonado pela área e as possibilidades de melhoria
                    para o mundo que ele possui.</p>

                    <p>Este site tem por objetivo apresentar os projetos que fiz, tanto projetos pessoais como acadêmicos,
                    espero que gostem do meu trabalho, se tiverem alguma sugestão de melhoria, por favor, estarei esperando
                    ansioso por críticas, contrutivas hein, sejam bem vindos !</p>

                    <img src={jonas} alt='Jonas' />
                
                </article>

            </div>
        );
    }

}

export default Home;