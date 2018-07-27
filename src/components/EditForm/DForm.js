import React, { Component,Fragment } from 'react';
import './Form.css';
import Tickets from '../Tickets/Tickets';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import UserData from '../Tickets/Tickets'
import request from 'superagent';

class DForm extends Component {

     constructor(props){
        super(props);
        this.state={
          id:'',
          fieldName:'',
          description:'',
          uiType:'',
          uiTypeOptions:''
      };
  }

  fieldName=(event)=>{
          this.setState({fieldName:event.target.value})
          console.log("fieldName",this.state.fieldName)
      }

  description=(event)=>{
                this.setState({description:event.target.value})
                {/*console.log("description",this.state.description)*/}
  }

  uiTypeOptions=(event)=>{
          this.setState({uiTypeOptions:event.target.value})
          {/*console.log("uiTypeOptions",this.state.uiTypeOptions)*/}
 }
  uiType=(event)=>{
      this.setState({uiType:'input box'})
}

uiTypeTextArea=(event)=>{
          this.setState({uiType:'Text Area'})
        }

uiTypeRadio=(event)=>{
          this.setState({uiType:'Radio'})
}

uiCheckBox=(event)=>{
    this.setState({uiType:'CheckBox'})
  }

handleSubmit=(event)=>{
   event.preventDefault();
   const form = event.target;
   const data = new FormData(form);

   fetch('https://av0jf0xh63.execute-api.us-east-1.amazonaws.com/dev/augnexresource', {
     method: 'POST',
     body: data,
   });

  //      request
  //       .send({fieldName:'additionalFieldName',uiType:'uiType',uiTypeOptions:'updatedAt'})
  //       .set('x-api-key','4RXjYYFCMr2sta7Nqa80raAWsRbgj56m73id9Eoc')
  //       .set('Accept', 'application/json')
  //       .then(res => {
  //          alert('yay got ' + JSON.stringify(res.body));
  // });
}

  render() {
     return (
                <form className="outer-form" onSubmit={this.handleSubmit}>
                <h2><strong>Add/Edit Resource</strong></h2>
                  <div className="form-row">
                    <div className="form-column-1">
                        <label for="field-name">Field Name:</label>
                    </div>
                     <div className="form-column-2">
                         <input id="field-name" type="text" onChange={this.fieldName} name="fieldName" value={this.state.fieldName}/>
                      </div>
                  </div>

                  <div className="form-row">
                     <div className="form-column-1">
                        <label for="description">Description:</label>
                      </div>
                      <div className="form-column-2">
                        <textarea type="text"  onChange={this.description} name="description" value={this.state.description}/>
                      </div>
                  </div>

                <div className="form-row">
                     <div className="form-column-1">
                        <label for="ui-type">UI Type</label>
                      </div>
                      <div className="form-column-2">
                        <input type="radio"  onChange={this.uiType} name="inputbox" />inputbox
                        <input type="radio"  onChange={this.uiTypeTextArea} name="textarea" />textarea
                        <input type="radio"  onChange={this.uiTypeRadio} name="textarea" />Radio
                        <input type="radio"  onChange={this.uiCheckBox} name="textarea" />CheckBox
                      </div>
                  </div>

                  <div className="form-row">
                     <div className="form-column-1">
                        <label for="ui-type">UIType Options:</label>
                      </div>
                      <div className="form-column-2">
                        <input type="text"  onChange={this.uiTypeOptions} name="uiTypeOptions" value={this.state.uiTypeOptions} />
                      </div>
                  </div>

                  <label>
                    <label>
                      <div className="button">
                          <button className="cancel" onClick={this.handleCancel}>Cancel</button>
                       </div>
                       <div className="button">
                           <button className="submit">Submit</button>
                        </div>
                     </label>
                  </label>
            </form>
    );
  }
}

export default DForm ;
