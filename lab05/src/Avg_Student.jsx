import React,{useState, useEffect,useMemo,useReducer,useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const initialState = JSON.parse(localStorage.getItem("students")) || [];

const studentReducer = (state,action)=>{
    switch(action.type){
        case "ADD_STUDENT":
            return [...state,action.payload]
        case "EDIT_STUDENT":
            return state.map((student,index)=>
            index === action.payload.index ? action.payload.updatdeStudent:student
            );
        case "DELETE_STUDENT":
            return state.filter((_,index)=>index!== action.payload);
    }
}

const AVG_Student =() =>{

    const nameRef = useRef();
    const [scores,setScores] = useState(["","",""]);
    const [editIndex,setEditIndex] = useState(null);
    const [students,dispatch] = useReducer(studentReducer,initialState);
    const [name,setName] = useState("");

    // luu vao local storage
    useEffect(() =>{
        localStorage.setItem("students",JSON.stringify(students));
    },[students])

    // Tinh tong diem trung binh
    const avg_scores = useMemo(()=>{
        if(students.length === 0) return "0.00";
        const total = students.reduce((sum,student)=>sum+parseFloat(student.avg),0);
        return (total/students.length).toFixed(2);
    },[students])


    // them hoac sua sinh vien
    const HandleAddorEditStudent = () =>{
        if(!name.trim() || scores.some(score=> score === "")) return ;
        const numericScores = scores.map(Number);
        const avg = (numericScores.reduce((sum,score)=>sum +score,0)/3).toFixed(2);
        if(editIndex !== null){
            dispatch({
                type:"EDIT_STUDENT",
                payload:{index:editIndex,updatdeStudent:{name,scores:numericScores,avg}}
            })
            setEditIndex(null);
        }else{
            dispatch({
                type:"ADD_STUDENT",
                payload:{name,scores:numericScores,avg}
            })
        }
        setName("");
        setScores(["","",""]);
        nameRef.current.focus();
    }
    
    const HandleEdit =(index)=>{
        const student  = students[index];
        setName(student.name);
        setScores(student.scores.map(String));
        setEditIndex(index);
        nameRef.current.focus();
    }

    const HandleDelete =(index)=>{
        dispatch({
            type:"DELETE_STUDENT",
            payload:index
        })
    }

    return (

        <div className="w-full p-3">
            <div className="border-3 p-3">
            <div className="title text-blue-500 mb-4">
                <h2>Tính Điểm Trung Bình Sinh Viên</h2>
            </div>
            <div className="grid grid-cols-12 gap-0">
            <div className="col-span-4 flex flex-col ">
                <input className="mb-2 border-2 rounded-3 form-control" ref={nameRef} type="text" placeholder="Nhập Tên Sinh Viên" value={name} onChange={(e) =>setName(e.target.value)}/>
                <br />
                {scores.map((score,index) =>(
                    <input key={index} 
                    type="number"
                    className="mb-2 border-2 rounded-3 form-control"
                    value={score}
                    placeholder={`Nhập Điểm Môn Học ${index + 1}`} 
                    onChange={(e) =>{
                    const newscores = [...scores];
                    newscores[index] = e.target.value;
                    setScores(newscores);
                    }}
                    />
                ))}
                <br />
                <button className="btn-success rounded-3 p-1" onClick={HandleAddorEditStudent}>{editIndex !== null ?"Edit Student":"Add Student" }</button>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-7">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className="border-2 py-2 px-7 text-center">Name Student</th>
                                <th className="border-2 py-2 px-2 text-center">Subject 1 score</th>
                                <th className="border-2 py-2 px-2 text-center">Subject 2 score</th>
                                <th className="border-2 py-2 px-2 text-center">Subject 3 score</th>
                                <th className="border-2 py-2 px-2 text-center">Subject AVG score</th>
                                <th className="border-2 py-2 px-4 text-center">Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student,index)=>(
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    {student.scores.map((score,i) =>(
                                        <td key={i} className="text-center">{score}</td>
                                    ))}
                                    <td className="text-center">{student.avg}</td>
                                    <td>
                                        <button className="btn-primary rounded-2 p-1 m-2" onClick={() =>HandleEdit(index)}>Edit</button>
                                        <button className="btn-danger rounded-2 p-1 " onClick={() =>HandleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                                
                            ))}
                        </tbody>
                        <tr>
                            <th colSpan={6}>Class Average: {avg_scores}</th>
                        </tr>
                    </table>
                </div>
            </div>
            </div>
            </div>
            
        </div>
    )



}

export default AVG_Student;