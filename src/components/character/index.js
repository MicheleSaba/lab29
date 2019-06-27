import React from 'react';
import If from '../if';
import Form from '../form';
import Modal from '../modal';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      count: 0,
      people: [],
      selectedPerson: '',
    };
  }

  handleForm = (count, people) => {
    this.setState({ count, people });
  };

  showPerson = person => {
    this.setState({ selectedPerson: person });
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false, person: '' });
  };

  render() {
    return (
      <div>
        <Form prompt="Get some Star Wars Folks..." handler={this.handleForm} />
       
          {Object.keys(this.state.people).map((person, idx) => {
            return (
              <li key={idx}>
                <a href="#" onClick={() => this.showPerson(person)}>
                  {person}
                </a>
              </li>
            );
          })}
        <Modal handleClose={this.hideModal} show={this.state.show} >
          <h3>{this.state.selectedPerson}</h3>
        </Modal>
     </div>
    );
  }
}

export default Character;