import React from "react";


export default class RequeteStation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.contract_name = this.props.contract_name
        console.log(this.props);
    }

    componentDidMount() {
        console.log(this.contract_name);
    }
}