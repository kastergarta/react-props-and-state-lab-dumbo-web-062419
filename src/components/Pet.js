import React from 'react'

class Pet extends React.Component {

  render() {

    const gender = this.props.pet.gender === 'male' ? '♂' : '♀'
    const adoptBtn = this.props.pet.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>)

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {gender}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.age}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptBtn}
        </div>
      </div>
    )
  }
}

export default Pet
