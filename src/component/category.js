import React, {useState} from "react";
import Categories from './categories';
import ItemCard from "./itemCard";

const Category = () => {

    const [data, setData] = useState(Categories);

    const filterResult = (cartItem) => {
      const result = Categories.filter((curData)=> {
        return curData.category === cartItem
      });

      setData(result);
    }
    
  return (
    <div>
      <h1 className="text-center text-info">Our Collections</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4" onClick={() =>
            filterResult('very big')}>Very Big</button>
            <button className="btn btn-warning w-100 mb-4" onClick={() =>
            filterResult('big')}>Big</button>
            <button className="btn btn-warning w-100 mb-4" onClick={() =>
            filterResult('small')}>Small</button>
            <button className="btn btn-warning w-100 mb-4"onClick={() =>
            filterResult('medium')}>Medium</button>
            <button className="btn btn-warning w-100 mb-4" onClick={() =>
            filterResult('very small')}>Very Small</button>
            <button className="btn btn-warning w-100 mb-4" onClick={() => setData(Categories)}>All</button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((item, index)=> {
                return (
                  <ItemCard 
                  id={item.id} 
                  title={item.title} 
                  price={item.price} 
                  rating={item.rating}  
                  category={item.category}
                  image={item.image}
                  item={item}
                  key={index}
                  />
                );
              })}
            </div>
          </div>
          <div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
