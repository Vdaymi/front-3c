import React, { Component } from 'react';
import './style.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elemSevenClicked: false,
            elemEightClicked: false
        };
    }

    handleClick(element) {
        if (element === 'seven') {
            this.setState(prevState => ({ elemSevenClicked: !prevState.elemSevenClicked }));
        } else if (element === 'eight') {
            this.setState(prevState => ({ elemEightClicked: !prevState.elemEightClicked }));
        }
    }

    render() {
        return (
            <div>
                <p>Хобі:</p>
                <ul>
                    <li>Їзда на велосипеді</li>
                    <li>Перегляд фільмів та серіалів</li>
                    <li 
                        id="element-seven" 
                        className={this.state.elemSevenClicked ? 'elem-seven-color' : ''}
                        onClick={() => this.handleClick('seven')}
                    >
                        Комп'ютерні ігри
                    </li>
                </ul>
                <p 
                    id="element-eight"
                    className={this.state.elemEightClicked ? 'elem-eight-color' : ''}
                    onClick={() => this.handleClick('eight')}
                >
                    Улюблені фільми:
                </p>
                <ol>
                    <li>"Оппенгеймер" 2023</li>
                    <li>Серія фільмів "Дедпул"</li>
                    <li>"Топ Ґан: Меверік" 2022</li>
                </ol>
            </div>
        );
    }
}

export default Content;
