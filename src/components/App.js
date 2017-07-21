import React, {Component} from 'react';
import '../styles/App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    vehicles: [],
    value: "",
    pilot: ""
    }

  this.handleName = this.handleName.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleName (event) {
    this.setState({ value: event.target.value})
  }


  handleSubmit(event) {
      event.preventDefault()
    const newPilot = this.state.value
    return (
      this.setState({
        pilot: newPilot,
        value: ""
      })
    )
  }


  componentWillMount() {
    fetch('https://swapi.co/api/vehicles/').then((response) => {
      return response.json()
    }).then((data) => {
      let vehicles = data.results
      this.setState({vehicles: vehicles})
    })
  }


  render() {

      let vehicles = this.state.vehicles;

      console.log('Welcome aboard', this.state.pilot)
      console.log('be gone devil!', this.state.value)

    return (
      <div className="App">

        <section className="jumbotron">
          <h1 className="card-title">Star Wars</h1>
          <p className="card-text">The vehicles of Star Wars</p>
        </section>

        <section className="form">
          <h3>What is your name, pilot?</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleName} name="name" value={this.state.value} />
            <input type="submit" name="" value="Submit" />
          </form>
          <h2>{this.state.pilot}</h2>
        </section>

        <section className="card">
          {this.state.vehicles.map ((vehicle) =>
          <div className="card-deck" key={vehicle.name}>
            <div className="card" >
              <div className="card-block">
                <h4 className="card-title">{vehicle.name}</h4>
                <h5 className="card-title">{vehicle.model}</h5>
                <div className="card-footer">
                  <small className="text-muted">Manufacturer: {vehicle.manufacturer}</small>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Class: {vehicle.vehicle_class}</small>
                </div>
                <div className="card-footer">
                 <small className="text-muted">Passengers: {vehicle.passengers}</small>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Crew: {vehicle.crew}</small>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Length: {vehicle.length}</small>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Max Speed: {vehicle.max_atmosphering_speed}</small>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Cargo Capacity: {vehicle.cargo_capacity}</small>
                </div>
              </div>
            </div>
          </div>
        )}
        </section>
        </div>
      );
    }
  }
