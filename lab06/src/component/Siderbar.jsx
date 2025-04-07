
const Siderbar = () => {
    return (
      <div className="w-full p-5">
          <img src="./Image 1858.png" alt="" className="w-34 h-auto ml-5" />
          <br />
          <div>
            <ul>
                <li className=" rounded ml-5 p-2 bg-pink-500">
                    <div className="flex">
                        <img src="./Squares four 1.png" alt="" />
                        <h4 className="font-bold ml-5">Dashboar</h4>
                    </div>
                </li>
                <li className=" rounded ml-5 p-2 bg-gray-100">
                    <div className="flex">
                        <img src="./Folder.png" alt="" />
                        <h4 className="font-bold ml-5">Project</h4>
                    </div>
                </li>
                <li className=" rounded ml-5 p-2 bg-gray-100">
                    <div className="flex">
                        <img src="./Groups.png" alt="" />
                        <h4 className="font-bold ml-5">Teams</h4>
                    </div>
                </li>
                <li className=" rounded ml-5 p-2 bg-gray-100">
                    <div className="flex">
                        <img src="./Pie chart.png" alt="" />
                        <h4 className="font-bold ml-5">Analytics</h4>
                    </div>
                </li>
                <li className=" rounded ml-5 p-2 bg-gray-100">
                    <div className="flex">
                        <img src="./Chat.png" alt="" />
                        <h4 className="font-bold ml-5">Messages</h4>
                    </div>
                </li>
                <li className=" rounded ml-5 p-2 bg-gray-100">
                    <div className="flex">
                        <img src="./Code.png" alt="" />
                        <h4 className="font-bold ml-5">Intergations</h4>
                    </div>
                </li>
                <br />
            </ul>
            <div className="ml-5 text-center">
                <img src="./Group.png" alt="" />
                <h5 className="font-bold">V2.0 is available</h5>
                <br />
                <button className="border-1 border-blue-500 rounded w-[150px] font-bold text-blue-600">Try now</button>
            </div>
          </div>
      </div>
    );
  };
  
  export default Siderbar;
  