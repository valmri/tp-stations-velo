import React from "react";


export default class RequeteStation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            stations: []
        };
        this.contract_name = this.props.contract_name
    }

    componentDidMount() {
        console.log(this.contract_name);
        fetch("https://api.jcdecaux.com/vls/v3/stations?contract=" + this.contract_name + "&apiKey=7886a12c53604b2668a08582a04795afcc9375b0")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        stations: result
                    });
                    return this.state.stations

                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }


            )

    }

    render() {
        return(<div>rien</div>)
    }
}