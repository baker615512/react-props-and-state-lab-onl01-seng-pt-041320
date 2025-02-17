import React from 'react'

class Pet extends React.Component {

  handleAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  render() {
    const { pet, isAdopted } = this.props
    const { name, type, age, weight, gender } = pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? '♀' :'♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? 
          (<button className="ui disabled button">Already adopted</button>) : 
          (<button onClick={this.handleAdoptPet} className="ui primary button">Adopt pet</button>)}
        </div>
      </div>
    )
  }
}

export default Pet
