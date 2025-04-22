// import { createContext, useState, useEffect, useContext, useMemo } from "react";
// import {toast} from "react-toastify";
// const TableContext = createContext();

// const initialData = [
//   {
//     avatar: "./Avatar 313.png",
//     name: "Elizabeth Leee",
//     company: "AvatarSystem",
//     ordervalue: "$539",
//     orderdate: "2023-04-13",
//     status: "New",
//     image: "./create.png"
//   },
//   {
//     avatar: "./user.png",
//     name: "Carlos Garciae",
//     company: "SmoozeShift",
//     ordervalue: "$747",
//     orderdate: "2025-07-12",
//     status: "New",
//     image: "./create.png"
//   },
//   {
//     avatar: "./woman.png",
//     name: "Elizabeth LBayli",
//     company: "Prime Time Telecom",
//     ordervalue: "$564",
//     orderdate: "2022-11-23",
//     status: "In-progress",
//     image: "./create.png"
//   },
//   {
//     avatar: "./man.png",
//     name: "Ryan Brown Hy",
//     company: "OmniTech Corporation",
//     ordervalue: "$541",
//     orderdate: "2005-05-12",
//     status: "In-progress",
//     image: "./create.png"
//   },
//   {
//     avatar: "./Avatar 313.png",
//     name: "Ryan Young He",
//     company: "DataStream Inc",
//     ordervalue: "$769",
//     orderdate: "2020-04-23",
//     status: "Completed",
//     image: "./create.png"
//   }
// ];

// export const TableProvider = ({ children }) => {
//   const [dataTB, setData] = useState(
//     JSON.parse(localStorage.getItem("dataTable")) || initialData
//   );

//   useEffect(() => {
//     localStorage.setItem("dataTable", JSON.stringify(dataTB));
//   }, [dataTB]);

//   const HandleAddUser = (newUser) => {
//     setData((prev) => [...prev, newUser]);
//     toast.success("Add successfully")
//   };
//   const HandleUpdateUser=(updateUser,index)=>{
//     setData((prev) => {
//       const newData = [...prev];
//       newData[index] = updateUser;
//       return newData;
//     });
//     toast.success("update successfully")
//   }
//     const totalUser=  dataTB.length;

  

//   return (
//     <TableContext.Provider value={{ dataTB, HandleAddUser,HandleUpdateUser,totalUser}}>
//       {children}
//     </TableContext.Provider>
//   );
// };

// export const useTable = () => useContext(TableContext);


import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [dataTB, setData] = useState([]);
  const API_URL = "https://67c865040acf98d070866108.mockapi.io/user"

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //       toast.error("Failed to fetch data");
  //     }
  //   };

  //   fetchData();
  // }, []);

useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())     
    .then((data) => {
      setData(data);               // Lưu dữ liệu vào state
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      toast.error("Lấy dữ liệu thất bại. Vui lòng thử lại!");
    });
}, []);


  

  const HandleAddUser = async (newUser) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error("Failed to add user");

      const savedUser = await response.json();
      setData((prev) => [...prev, savedUser]);
      toast.success("Add successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add user");
    }
  };

  const HandleUpdateUser = async (updatedUser,index) => {
    try {
      const response = await fetch(`${API_URL}/${index}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) throw new Error("Failed to update user");

      setData((prev) =>
        prev.map((user,id) => (id === index ? updatedUser : user))
      );
      toast.success("Update successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user");
    }
  };

  const totalUser = dataTB.length;

  return (
    <TableContext.Provider
      value={{ dataTB, HandleAddUser, HandleUpdateUser, totalUser }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
