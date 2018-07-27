import React, { Component } from 'react';
import './FormNList.css';
import DForm from '../EditForm/DForm';
import Tickets from '../Tickets/Tickets';

class FormNList extends Component {
  render() {
    return (
      <div className="Form-N-List">
          <DForm />
            <Tickets />
      </div>
    );
  }
}

export default FormNList;
