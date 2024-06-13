import { useState, useEffect } from "react";
const useFetch = (url) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((temp) => setData(temp))
      .catch((e) => console.log(e));
  }, [url]);

  return data;
};
export default useFetch;