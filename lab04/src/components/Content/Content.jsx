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
    <div className="w-full">
      <div className="grid grid-cols-12 gap-0">
       <div className="col-span-3">
        <div className="border-1 rounded-2 justify-items-center ml-5">
        <img src="./fillter.png" alt="" />
        <button className="btn-danger rounded w-[300px]">Apply</button>
        <br />
        <br />
        </div>
       </div>
       <div className="col-span-1"></div>
       <div className="col-span-8 gap-3 flex flex-wrap">
        {data.map((item) => (
          <div key={item.id} className="w-[250px] h-[220px] border-0 rounded-3 shadow-xl">
            <img src={item.img} alt=""className="w-[249px] h-[150px] rounded-3"/>
            <div className="flex">
            <h5 className="p-2 ml-5">{item.name}</h5>
            <img src="./gim.png" alt="" className="rounded-full h-10 w-10 p-1 ml-5" />
            </div>
            <i className="ml-5 text-red-500">32 minutes</i>
            <br />
        </div>
          ))}
       </div>
      </div>
      <br />
    </div>
  );
}

export default Content;



