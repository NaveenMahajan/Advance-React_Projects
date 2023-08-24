import React from 'react';
import data from './data';
import { useState } from 'react';
const List = () => {
  const [count, setCount] = useState(data);
  return (
    <>
      <h3>{count.length} birthday today</h3>
      {count.map((props, id) => {
        return (
          <div key={id} className="person">
            <img src={props.image} alt="" />
            <div>
              <h4>{props.name}</h4>
              <p>{props.age}</p>
            </div>
          </div>
        );
      })}
      <button onClick={() => setCount([])}>Clear all</button>
    </>
  );
};

export default List;
