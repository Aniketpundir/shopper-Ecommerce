import React from "react";
import "./New_Collections.css";
import newCollections from "../../assets/new_collections";
import CardItems from "../cardItems/CardItems";

const New_Collections = () => {
  return (
    <>
      <div className="new-collection">
        <h1>
          New Collections <hr />
        </h1>
        <div className="new-collection-items">
          {newCollections.map((items, index) => {
            return (
              <>
                <CardItems
                  id={items.id}
                  image={items.image}
                  name={items.name}
                  new_price={items.new_price}
                  old_price={items.old_price}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default New_Collections;
