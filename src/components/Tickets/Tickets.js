import React, { Component } from 'react';
import './Tickets.css';
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import  EditForm from '../EditForm/EditForm';
import request from 'superagent';

class Tickets extends Component {

      constructor(props){
      super(props)
      this.state={
          showForm :false,
          view:'',
          fieldName:'',
          description:'',
          ticketId:'',
          uiType:'',
          uiTypeOptions:'none',
          list:[],
          editIdNo:'',
          fnValue:'',
          value:'',
          tickets:[],
          id:''
      };
      this.handleEdit=this.handleEdit.bind(this);
      this.handleFormSubmit= this.handleFormSubmit.bind(this);
      this.fetchTickets= this.fetchTickets.bind(this);

    }
    componentDidMount(){
      this.fetchTickets();
      console.log("componentDidMount",this.state.tickets)
    }

    fetchTickets(){
      request
        .get('https://av0jf0xh63.execute-api.us-east-1.amazonaws.com/dev/augnexresource')
        .set('x-api-key', '4RXjYYFCMr2sta7Nqa80raAWsRbgj56m73id9Eoc')
        .then(
          (result)=>{
            console.log('response from list-api',result);
            console.log('result-body:->',result.body);
              this.setState({tickets:result.body});
              console.log('~~!!!!!!!!!!!!!');
              }
          )
        .catch(function(err){
          console.log('error in request',err)
        })
        console.log('tickets:::',this.state.tickets);
      }



 handleEdit = (id)=>{
        console.log("json edit no",id)
          return(
                  this.setState({showForm:true,view:'form',editIdNo:id})
              )

  }

  handleFormSubmit(formObj){
    console.log('formObj:',formObj)
    this.setState({
        'fieldName':formObj.fieldName,
        'description':formObj.description,
        'showForm':true,
        'uiTypeOptions':formObj.uiTypeOptions,
        'uiType':formObj.uiType,
        view:'ticket'
       })
};


  render() {
    {/*console.log("Render",this.state.tickets)*/}
     return (
      <div className="main-div">
          <div className="current-field-list">
              {this.state.tickets.map((item)=>{
                {console.log("item from map:",item)}
              return (
                    <div className="form-div" key={item.id}>
                      <div className="toogle-div">
                               enable
                                     <Toggle
                                         defaultChecked={true}
                                         onChange={()=>{console.log("Toggle")}}
                                       />disable
                        </div>

                        <div className="data-r">
                          <div className="data-c-1">
                               <label for="fieldName">
                                  Field Name:
                               </label>
                                 {item.additionalFieldName}
                          </div>
                      </div>

                      <div className="data-r">
                        <div className="data-c-1">
                             <label for="description">
                                  Description:
                             </label>
                               {}
                        </div>
                    </div>

                    <div className="data-r">
                      <div className="data-c-1">
                           <label for="uiType">
                                uiType:
                           </label>
                             {item.uiType}
                      </div>
                  </div>

                  <div className="data-r">
                    <div className="data-c-1">
                         <label for="uiTypeOptionsi">
                              uiTypeOptions:
                         </label>
                           {item.updatedAt}
                    </div>
                </div>

                <div className="edit-button-div">
                    <button className="edit-button" onClick={() => this.handleEdit(item.id)}>Edit</button>
                        </div>

                                {console.log('view:',this.state.view)}
                                {
                               this.state.view==='form' && this.state.editIdNo===item.id &&
                                <EditForm onSubmitFunc={this.handleFormSubmit} display={this.fetch} method='POST' value={item} />
                             }
                          </div>
                      )
                    })
                   }
               </div>


             {this.state.view === 'ticket'?<Tickets />:''}
          </div>
        )}
      }


export default Tickets;
