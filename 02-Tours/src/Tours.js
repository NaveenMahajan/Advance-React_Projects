import React from 'react';
import Tour from './Tour';
import { useState } from 'react';
const Tours = ({ tours, id }) => {
  const [read, setRead] = useState(false);
  const [delete1, setDelete1] = useState(true);
  return (
    <main>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour, id) => {
          const { info } = tour;
          return (
            <div className="single-tour" key={id}>
              <img src={tour.image} alt="" />
              <footer>
                <div className="tour-info">
                  <h4>{tour.name}</h4>
                  <h4 className="tour-price">${tour.price}</h4>
                </div>
                <p className="tour-info">
                  {read ? info : `${info.substring(0, 200)}.....`}
                  <button onClick={() => setRead(!read)}>
                    {read ? 'Read Less' : 'Read More'}
                  </button>
                </p>
                <button onClick={() => setDelete1([])} className="delete-btn">
                  Not Interested
                </button>
              </footer>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Tours;
