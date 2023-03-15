import {Component} from "react";

class Persona extends Component {
    render() {
        const {name, age, hair} = this.props;
        return(
            <div>
                <h2>{name}</h2>
                <div>
                <p>Age: {age} </p>
                <p>Hair Color: {hair}</p>
                </div>
            </div>
        );
    }
}

export default Persona;