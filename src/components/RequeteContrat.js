import React, {useState} from "react";

export default class RequeteContrat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      villes: []
    };
  }

  componentDidMount() {
    fetch("https://api.jcdecaux.com/vls/v3/contracts?apiKey=7886a12c53604b2668a08582a04795afcc9375b0")
      .then(res => res.json())
      .then(
        (result) => {
          let lesVilles = []
          result.forEach(element => {
            if (element.country_code === "FR" && element.name !== "jcdecauxbike") {
              lesVilles.push(element)
            }
          });
          this.setState({
            isLoaded: true,
            villes: lesVilles
          });
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
    const { error, isLoaded, villes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <ul className="contrats">
            {villes.map(item => (
              <li key={item.name} onClick={() => this.props.childToParent(item.name)}><a>
                <i className="las la-map-marker"></i>
                {item.name.replace(/^./, item.name[0].toUpperCase())}
              </a></li>
            ))}
          </ul>
      );
    }
  }


}