import React, { Component } from 'react'
import '../css/bootstrap.min.css'

export default class AddTransaction extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pair: '',
      quantity: '',
      pricePerUnit: '',
      amountWithoutFee: 0,
      fees: 0,
      totalAmountIncludingFee: 0,

      errors: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validate(pair, quantity, pricePerUnit, amountWithoutFee, fees, totalAmountIncludingFee) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
      if (pair.length === 0) {
        errors.push("Curreny Pair can't be empty");
      }
      if (quantity.length === 0) {
        errors.push("Quantity can't be empty");
      }
      if (pricePerUnit.length === 0) {
        errors.push("Price per unit can't be empty");
      }
  
    return errors;
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    });

    console.log("handleChange this.state>>>>", this.state)
  }

  handleSubmit (event) {
    event.preventDefault();

    const { 
      pair, 
      quantity, 
      pricePerUnit, 
      amountWithoutFee, 
      fees, 
      totalAmountIncludingFee
    } = this.state

    const errors = this.validate(pair, quantity, pricePerUnit, amountWithoutFee, fees, totalAmountIncludingFee);
    
    console.log("errors.length", errors.length)

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else {
      console.log("Submit the data!!!!")
    }
  }

    render() {
        const { errors } = this.state

        return <form onSubmit={this.handleSubmit}>

              {errors.map(error => (
                <div className="alert alert-danger" role="alert" key={error}>
                  {error}
                </div>
              ))}

              <div className="form-group row">
                <label htmlFor="pair-text-input" className="col-3 col-form-label">Currency Pair</label>
                <div className="col-8">
                  <input 
                    name="pair"
                    className="form-control" 
                    type="text" 
                    placeholder="XRP"
                    value={this.state.pair}
                    onChange={this.handleChange}
                    id="pair-text-input" 
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="quantity-input" className="col-3 col-form-label">Quantity</label>
                <div className="col-8">
                  <input
                    name = "quantity"
                    className="form-control" 
                    type="number" 
                    placeholder="50"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    id="quantity-input" 
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="price-per-unit-input" className="col-3 col-form-label">Price per unit</label>
                <div className="col-8">
                  <input
                    name="pricePerUnit"
                    className="form-control" 
                    type="number" 
                    placeholder=""
                    value={this.state.pricePerUnit}
                    onChange={this.handleChange}
                    id="price-per-unit-input" 
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="amount-without-fee-input" className="col-3 col-form-label">Amount without fee</label>
                <div className="col-8">
                  <input
                    name="amountWithoutFee"
                    className="form-control" 
                    type="number" 
                    placeholder="1900"
                    value={this.state.amountWithoutFee}
                    id="amount-without-fee-input" 
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="fees-input" className="col-3 col-form-label">Fees</label>
                <div className="col-8">
                  <input
                    name="fees"
                    className="form-control" 
                    type="number" 
                    placeholder="1900"
                    value={this.state.fees}
                    id="fees-input" 
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="total-inlcuding-fees-input" className="col-3 col-form-label">Total amount including fee</label>
                <div className="col-8">
                  <input
                    name="totalAmountIncludingFee"
                    className="form-control" 
                    type="number" 
                    placeholder="1904.75"
                    value={this.state.totalAmountIncludingFee}
                    id="total-inlcuding-fees-input" 
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
    }
}
