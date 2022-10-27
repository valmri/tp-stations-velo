import React from "react";
import RequeteStation from "./RequeteStation";


export default class RequeteContrat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      villes: []
    };
  }

  componentDidMount() {
    fetch("https://api.jcdecaux.com/vls/v3/contracts?apiKey=7886a12c53604b2668a08582a04795afcc9375b0")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          const { error, isLoaded, items, villes } = this.state;
          items.forEach(element => {
            if (element.country_code == "FR" && element.name != "jcdecauxbike") {
              this.state.villes[element.name] = element
              fetch("https://api.jcdecaux.com/vls/v3/stations?contract=" + element.name + "&apiKey=7886a12c53604b2668a08582a04795afcc9375b0")
                .then(res => res.json())
                .then(
                  (result) => {
                    this.setState({
                      isLoaded: true,
                    });
                    this.state.villes[element.name]["stations"] = result
                  },

                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  }
                )
            }
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
    const { error, isLoaded, items, villes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        villes
      );
    }
  }
}