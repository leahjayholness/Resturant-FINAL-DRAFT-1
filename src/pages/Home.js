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

// The Home component represents the main content of a webpage. 
// It includes a carousel for banners at the top and a menu section with tabs for different categories of food items.

const Home = () => {
    return (
        <>
            {/* Carousel Section */}
            {/* The carousel is a slide show that rotates through three images (banner1, banner2, banner3) 
                Each image has a caption with a title and description */}
            <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div className="carousel-inner">
                    {/* Active carousel item (first slide) */}
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    {/* Second carousel item */}
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    {/* Third carousel item */}
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            {/* The menu section includes tabs that allow users to view different food categories: Today's Special, Main Dishes, Side Dishes, and Beverages */}
            <div className="p-3">
                <div className="text-center">
                    <h1>Menu</h1>
                </div>
                <div className="card text-center">
                    {/* Tab Navigation */}
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            {/* Tab for Today's Special */}
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="special-tab" data-bs-toggle="tab" data-bs-target="#special-tab-pane" type="button" role="tab" aria-controls="special-tab-pane" aria-selected="true">Today's Special</button>
                            </li>
                            {/* Tab for Main Dishes */}
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="main-tab" data-bs-toggle="tab" data-bs-target="#main-tab-pane" type="button" role="tab" aria-controls="main-tab-pane" aria-selected="false">Main Dishes</button>
                            </li>
                            {/* Tab for Side Dishes */}
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="side-tab" data-bs-toggle="tab" data-bs-target="#side-tab-pane" type="button" role="tab" aria-controls="side-tab-pane" aria-selected="false">Side Dishes</button>
                            </li>
                            {/* Tab for Beverages */}
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="beverage-tab" data-bs-toggle="tab" data-bs-target="#beverage-tab-pane" type="button" role="tab" aria-controls="beverage-tab-pane" aria-selected="false">Beverages</button>
                            </li>
                        </ul>
                    </div>
                    {/* Tab Content */}
                    <div className="tab-content" id="myTabContent">
                        {/* Content for Today's Special */}
                        <div className="card-body tab-pane fade show active" id="special-tab-pane" role="tabpanel" aria-labelledby="special-tab" tabIndex="0">
                            <h3 className="card-title">Today's Special</h3>
                            <br/>
                            {/* Special Dish Card */}
                            <div className="card mb-3 mx-auto" style={{width: "32rem"}}>
                                <img src={special} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                </div>
                            </div>
                            {/* Checkout Link */}
                            <Link to="/checkout" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                        
                        {/* Content for Main Dishes */}
                        <div className="card-body tab-pane fade" id="main-tab-pane" role="tabpanel" aria-labelledby="main-tab" tabIndex="0">
                            <h3 className="card-title">Main Dishes</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                {/* Cards for Main Dishes */}
                                {[main1, main2, main3, main4, main5, main6].map((mainDish, index) => (
                                    <div className="col mb-4" key={index}>
                                        <div className="card">
                                            <img src={mainDish} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Checkout Link */}
                            <Link to="/checkout" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                        
                        {/* Content for Side Dishes */}
                        <div className="card-body tab-pane fade" id="side-tab-pane" role="tabpanel" aria-labelledby="side-tab" tabIndex="0">
                            <h3 className="card-title">Side Dishes</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                {/* Cards for Side Dishes */}
                                {[side1, side2, side3, side4, side5, side6].map((sideDish, index) => (
                                    <div className="col mb-4" key={index}>
                                        <div className="card">
                                            <img src={sideDish} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Checkout Link */}
                            <Link to="/checkout" className="btn btn-primary">Go To Checkout</Link>
                        </div>

                        {/* Content for Beverages */}
                        <div className="card-body tab-pane fade" id="beverage-tab-pane" role="tabpanel" aria-labelledby="beverage-tab" tabIndex="0">
                            <h3 className="card-title">Beverages</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                {/* Cards for Beverages */}
                                {[drink1, drink2, drink3, drink4, drink5, drink6].map((drink, index) => (
                                    <div className="col mb-4" key={index}>
                                        <div className="card">
                                            <img src={drink} className="card-img-top" alt="..." style={{height: "300px"}}/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary"> $1000.00 </h6>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Checkout Link */}
                            <Link to="/checkout" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Export the component to make it available for use in other parts of the app
export default Home;