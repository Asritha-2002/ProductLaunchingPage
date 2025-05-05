import React, { useEffect, useState } from "react";
import heart from '../assets/heart.png';
import favourite from '../assets/image.png';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {Link} from 'react-router-dom'
import "./Recommended.css"; // External CSS file

const filters = [
  {
    title: "IDEAL FOR",
    fixed:"All",
    options: ["Men", "Women", "Baby & Kids"]
  },
  {
    title: "OCCASION",
    fixed:"All",
    options: ["Casual", "Party", "Wedding"]
  },
  {
    title: "WORK",
    fixed:"All",
    options: ["Office", "Remote"]
  },
  {
    title: "FABRIC",
    fixed:"All",
    options: ["Cotton", "Silk", "Linen"]
  }
];

const RecommendedItems = () => {
  const [item, setItem] = useState([]);
  const [sortType, setSortType] = useState("recommended");
  const [display, setDisplay] = useState(true);
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("server error");
        let data = await response.json();
        const updatedProducts = data.map((product) => ({
          ...product,
          isFavourite: false,
        }));
        setItem(updatedProducts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  const handleIsFavourite = (productId) => {
    const updatedItems = item.map((product) =>
      product.id === productId
        ? { ...product, isFavourite: !product.isFavourite }
        : product
    );
    setItem(updatedItems);
  };

  const handleToggle = () => {
    setDisplay(!display);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sortedItems = [...item].sort((a, b) => {
    if (sortType === "lowToHigh") return a.price - b.price;
    if (sortType === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="product-container">
      <div className="toggle-bar">
        <div className="start-group">
          <h4 className="left-toggle">{sortedItems.length} ITEMS</h4>
          <h5 onClick={handleToggle} className="toggle">
            {display ? '< HIDE FILTER' : '> SHOW FILTER'} 
          </h5>
          <h4 className="toggle-mobile" onClick={handleToggle}>FILTER</h4>
        </div>

        <div className="sort-bar">
          <select
            id="sort"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="sortMenu"
          >
            <option value="recommended">RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option value="highToLow">PRICE : HIGH TO LOW</option>
            <option value="lowToHigh">PRICE : LOW TO HIGH</option>
          </select>
        </div>
      </div>
<hr />
      <div className="main-content">
        {display && (
          <div className="filter-sidebar">
             <label>
              <input type="checkbox" /> CUSTOMIZABLE
            </label><hr/>
            {
            
           
            filters.map((filter) => (
              <section className="filter-section" key={filter.title}>
                <div className="filter-header" onClick={() => toggleSection(filter.title)}>
               <div className="side-flex"> <span>{filter.title}</span>
               <p className="product-count">{filter.fixed}</p></div>  
                  {openSections[filter.title] ? <FaChevronUp style={{color:"silver", fontSize:"12px"}} /> : 
                  <FaChevronDown style={{color:"silver", fontSize:"12px"}}/>}
                </div>
                
                {openSections[filter.title]  && (
                  <div className="filter-options">
                 
                    
                    {filter.options.map((opt) => (
                      <label key={opt}>
                        <input type="checkbox" /> {opt}<br/>
                      </label>
                    ))}
                  </div>
                )} 

                <hr />
              </section>
            ))}
          </div>
        )}

        <div className="product-grid">
          {sortedItems.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p className="product-name">Product Name</p>
              <div className="signIn">
                <p className="product-note">
                  <Link to='/'>Sign in</Link> or create an account to see pricing
                </p>
                <img
                  src={product.isFavourite ? favourite : heart}
                  alt="fav"
                  style={{ width: "20px", height: "20px" }}
                  onClick={() => handleIsFavourite(product.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedItems;
