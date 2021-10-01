import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Madness is Better than Defeat by Ned Beauman Paperback"
            price={400}
            rating={5}
            image="https://s26162.pcdn.co/wp-content/uploads/2018/12/91yOw4ZHA3L.jpg"
          />
          <Product
            id="49538094"
            title="Educated by Tara Westover Paperback"
            price={340}
            rating={4}
            image="https://s26162.pcdn.co/wp-content/uploads/2018/12/educated.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Heart Spring Mountain by Robin MacArthur Paperback"
            price={210}
            rating={3}
            image="https://s26162.pcdn.co/wp-content/uploads/2018/12/184224_1326895.794x1200_q95_crop-smart_upscale.jpg"
          />
          <Product
            id="23445930"
            title="Dog Symphony by Sam Munson Paperback"
            price={199}
            rating={5}
            image="https://s26162.pcdn.co/wp-content/uploads/2018/12/71bifGxQ2nL-664x1024.jpg"
          />
          <Product
            id="3254354345"
            title="Woman of the Ashes by Mia Couto Paperback"
            price={498}
            rating={4}
            image="https://s26162.pcdn.co/wp-content/uploads/2018/12/A11cWJ4wR3L-682x1024.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Branches by Mark Truscott"
            price={399}
            rating={4}
            image="https://s26162.pcdn.co/wp-content/uploads/2018/12/9781771664516_cover1_alu_modalcover.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
