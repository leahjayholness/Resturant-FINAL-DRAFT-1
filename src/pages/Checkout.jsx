import logo from '../images/logo.png';

const Checkout = () => {
    return (
        <div className="container">
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src={logo} alt="" width="96" height="96"/>
                <h2>Checkout</h2>
            </div>

            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge text-bg-secondary rounded-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Product name</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Second product</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Third item</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">-$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form>
                </div>


                <div id="billing-address" className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate="">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="John" value="" required=""/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Brown" value="" required=""/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <select className="form-select d-block w-100" id="country" required="">
                                    <option value="">Choose...</option>
                                    <option>Jamaica</option>

                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">Parish</label>
                                <select className="form-select d-block w-100" id="state" required="">
                                    <option value="">Choose...</option>
                                    <option value="13">Clarendon </option>
                                    <option value="09">Hanover </option>
                                    <option value="01">Kingston </option>
                                    <option value="12">Manchester </option>
                                    <option value="04">Portland </option>
                                    <option value="02">Saint Andrew</option>
                                    <option value="06">Saint Ann </option>
                                    <option value="14">Saint Catherine </option>
                                    <option value="11">Saint Elizabeth </option>
                                    <option value="08">Saint James </option>
                                    <option value="05">Saint Mary </option>
                                    <option value="03">Saint Thomas </option>
                                    <option value="07">Trelawny </option>
                                    <option value="10">Westmoreland </option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4"/>
                        <div className="d-flex justify-content-center">
                            <div className="form-check mx-4">
                                <input id="pick-up" name="eat-method" type="radio" className="form-check-input" checked="" required=""/>
                                <label className="form-check-label" htmlFor="pick-up"><i className="fa-solid fa-bag-shopping" style={{color: "#000000"}}></i> Pick-Up</label>
                            </div>
                            <div className="form-check mx-4">
                                <input id="dine-in" name="eat-method" type="radio" className="form-check-input" required=""/>
                                <label className="form-check-label" htmlFor="dine-in"><i className="fa-solid fa-utensils" style={{color: "#000000"}}></i> Dine In </label>
                            </div>
                            <div className="form-check mx-4">
                                <input id="delivery" name="eat-method" type="radio" className="form-check-input" required=""/>
                                <label className="form-check-label" htmlFor="delivery"><i className="fa-solid fa-car-side" style={{color: "#000000"}}></i> Delievery</label>
                            </div>
                        </div>
                        <hr className="mb-4"/>

                        <h4 className="mb-3">Payment</h4>

                    
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-name">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="John Brown" required=""/>
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-number">Card Number</label>
                                <input type="number" className="form-control" id="cc-number" placeholder="XXXX XXXX XXXX XXXX" required=""/>
                                <div className="invalid-feedback">
                                    Card number is required
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-6">
                                <label htmlFor="cc-expiration">Expiration</label>
                                <input type="month" className="form-control" id="cc-expiration" placeholder="" required=""/>
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>
                            <div className="col-md-6 mb-6">
                                <label htmlFor="cc-expiration">CVV</label>
                                <input type="number" className="form-control" id="cc-cvv" placeholder="123" required=""/>
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>

                        <hr className="mb-4"/>
                        <button className="btn btn-primary btn-lg w-100" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
  