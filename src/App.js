import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

import classnames from 'classnames';

class Monster extends React.Component {

    constructor() {

        super();

        this.state = {
            clicked: "unstroked"
        };
    }

    strokeElement() {

        if(this.state.clicked === "unstroked") {

            return this.setState({
                clicked: "stroked"
            });
        }

        return this.setState({
            clicked: "unstroked"
        });
    }

    render() {
        return (
            <div className={this.state.clicked} onClick={this.strokeElement.bind(this)} >Hello, My {this.koko} Name Is { this.props.name }, I am a { this.props.type } { this.props.gender } !<br /><br /></div>
        )
    }
}

Monster.propTypes = {
    gender: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

class App extends Component {
    render() {

        // const { array } = ['Lanturn', 'Cizayox', 'Pharamp'];

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <Monster gender="Pokemon" type="Elektrik" name="Lanturn" />
                    <Monster gender="Pokemon" type="Iron" name="Cizayox" />
                    <Monster gender="Pokemon" type="Elektrik" name="Pharamp" />
                </div>
            </div>

            // array.map((element) => {
            //     return (
            //         <Monster gender="Pokemon" name="{element}" />
            //     )
            // })
        );
    }
}

export default App;
