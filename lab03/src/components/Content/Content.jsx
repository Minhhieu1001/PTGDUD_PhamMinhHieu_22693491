import { useState, useEffect } from "react";

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://67c865040acf98d070866108.mockapi.io/hieu')
      .then((res) => res.json())
      .then((posts) => {
        setData(posts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((item) => (
          <div className="col-3" key={item.id}>
            <div className="card" style={{ height: '200px', width: '300px', border: '1px solid', boxShadow:'2px 2px 2px blue' }}>
              <img src={item.img} alt="" style={{ height: '150px', width: '299px', border: '2px solid' }} />
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}

export default Content;
