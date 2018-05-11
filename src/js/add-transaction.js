import React from 'react'
import '../css/bootstrap.min.css'

export default class AddTransaction extends React.Component {
    render() {
        return <form>
          <div className="form-group row">
            <label htmlFor="pair-text-input" className="col-3 col-form-label">Currency Pair</label>
            <div className="col-8">
              <input className="form-control" type="text" placeholder="XRP" id="pair-text-input" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="quantity-input" className="col-3 col-form-label">Quantity</label>
            <div className="col-8">
              <input className="form-control" type="text" placeholder="50" id="quantity-input" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price-per-unit-input" className="col-3 col-form-label">Price per unit</label>
            <div className="col-8">
              <input className="form-control" type="text" placeholder="" id="price-per-unit-input" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="amount-without-fee-input" className="col-3 col-form-label">Amount without fee</label>
            <div className="col-8">
              <input className="form-control" type="text" placeholder="1900" id="amount-without-fee-input" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="fees-input" className="col-3 col-form-label">Fees</label>
            <div className="col-8">
              <input className="form-control" type="text" placeholder="1900" id="fees-input" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="total-inlcuding-fees-input" className="col-3 col-form-label">Total amount including fee</label>
            <div className="col-8">
              <input className="form-control" type="number" placeholder="1904.75" id="total-inlcuding-fees-input" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
    }
}
