import React, { useState, useEffect } from "react";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const LoaderComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the fetch
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((temp) => {
        setData(temp);
        setLoading(false); // Set loading to false when the data is fetched
      })
      .catch((e) => {
        console.log(e);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Segment>
            <Dimmer active>
              <Loader />
            </Dimmer>
            <Image src='/images/wireframe/short-paragraph.png' />
          </Segment>
        </div>
      ) : (
        <div>
          {data.map((temp) => (
            <h1 key={temp.id}>
              {temp.id} {temp.title}
            </h1>
          ))}
        </div>
      )}
    </>
  );
};

export default LoaderComponent;
