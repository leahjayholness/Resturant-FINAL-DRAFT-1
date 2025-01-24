import { Link } from "react-router-dom";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import drink1 from "../images/drink1.jpg";
import drink2 from "../images/drink2.jpg";
import drink3 from "../images/drink3.jpg";
import drink4 from "../images/drink4.png";
import drink5 from "../images/drink5.jpg";
import drink6 from "../images/drink6.jpg";
import main1 from "../images/main1.jpg";
import main2 from "../images/main2.jpg";
import main3 from "../images/main3.jpg";
import main4 from "../images/main4.jpg";
import main5 from "../images/main5.jpg";
import main6 from "../images/main6.jpg";
import side1 from "../images/side1.jpg";
import side2 from "../images/side2.jpg";
import side3 from "../images/side3.jpg";
import side4 from "../images/side4.jpg";
import side5 from "../images/side5.jpg";
import side6 from "../images/side6.jpg";
import special from "../images/special.png";

const Home = () => {
    return (
        <>
            <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3">
                <div className="text-center">
                    <h1>Menu</h1>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="special-tab" data-bs-toggle="tab" data-bs-target="#special-tab-pane" type="button" role="tab" aria-controls="special-tab-pane" aria-selected="true">Today's Special</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="main-tab" data-bs-toggle="tab" data-bs-target="#main-tab-pane" type="button" role="tab" aria-controls="main-tab-pane" aria-selected="false">Main Dishes</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="side-tab" data-bs-toggle="tab" data-bs-target="#side-tab-pane" type="button" role="tab" aria-controls="side-tab-pane" aria-selected="false">Side Dishes</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="beverage-tab" data-bs-toggle="tab" data-bs-target="#beverage-tab-pane" type="button" role="tab" aria-controls="beverage-tab-pane" aria-selected="false">Beverages</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="card-body tab-pane fade show active" id="special-tab-pane" role="tabpanel" aria-labelledby="special-tab" tabIndex="0">
                            <h3 className="card-title">Today's Special</h3>
                            <br/>
                            <div className="card mb-3 mx-auto" style={{width: "32rem"}}>
                                <img src={special} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                </div>
                            </div>                 
                            <Link to="view_order.html" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                        <div className="card-body tab-pane fade" id="main-tab-pane" role="tabpanel" aria-labelledby="main-tab" tabIndex="0">
                            <h3 className="card-title">Main Dishes</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                <div className="col mb-4 " >
                                    <div className="card">
                                        <img src={main1} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={main2} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={main3} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={main4} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={main5} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={main6} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="view_order.html" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                        <div className="card-body tab-pane fade" id="side-tab-pane" role="tabpanel" aria-labelledby="side-tab" tabIndex="0">
                            <h3 className="card-title">Side Dishes</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={side1} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={side2} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={side3} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={side4} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={side5} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={side6} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="view_order.html" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                        <div className="card-body tab-pane fade" id="beverage-tab-pane" role="tabpanel" aria-labelledby="beverage-tab" tabIndex="0">
                            <h3 className="card-title">Beverages</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={drink1} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={drink2} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={drink3} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={drink4} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={drink5} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src={drink6} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="view_order.html" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
  