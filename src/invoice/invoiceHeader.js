import React from 'react';
import logo from '../download.jpeg';

function InvoiceHeader(props){
    return(
        <div className="row mt-4">
        <div className="col-sm-6 col-xs-12">
            <img className="img-thumbnail img" style={{width:'250px'}} src={logo} className="" />
        </div>
        <div className="col-sm-6 col-xs-12 mt-5">
            <form >
            <label >FACTURE</label>
                <div className="input-group mb-2">
                
                    <div className="input-group-prepend">
                        <div className="input-group-text">#</div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroup" value={props.invoiceNo} placeholder="N ss" onChange={(e)=>props.handleChange(e , "invoice")} />
                </div>
                <div className="form-group">
                <label >Date E</label>
                    <input className="form-control" type="date" value={props.date} id="example-date-input" onChange={(e)=>props.handleChange(e , "date")}/>
                    
                </div>
                <div className="form-group">
                <label >Date s</label>
                    <input className="form-control" type="date" value={props.dates} id="example-date-input" onChange={(e)=>props.handleChange(e , "dates")}/>
                    
                </div>
                
                

            </form>
        </div>
            <div className="col-sm-6">
                <div className="form-group">
                    <label >Nom et prenom</label>
                    <textarea class="form-control" id="exampleTextarea" rows="3" data-gramm="true" spellcheck="false" data-gramm_editor="true" 
                    value={props.billInfo} onChange={(e)=>props.handleChange(e , "bill")}></textarea>                  
                </div>
            </div>
        </div>
    )
}
export default InvoiceHeader;