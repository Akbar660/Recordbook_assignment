// import React, { useReducer } from 'react'
// import { useState } from "react";


// const initialState=[]


// const reducer=(state,action)=>{
//   switch (action.type) {
//     case "add":
//      return [...state,action.payload]
//     default:
//       throw new Error();
//   }
// }


// const Form = ({setClose}) => {

//   const [name, setName] = useState("");
//   const [rank, setRank] = useState("");
//   const [c1, setC1] = useState("");
//   const [c2, setC2] = useState("");
//   const [c3, setC3] = useState("");
//   const [state,dispatch]=useReducer(reducer,initialState)

//   console.log(state)
//   const addStudent = (e) => {
//       e.preventDefault();
//       const preferences = {
//         id: Date.now(),
//         name,
//         rank,
//         c1,
//         c2,
//         c3
//       };
//       dispatch({type:"add",payload:preferences})
      
//     };
//   return (
//     <div>
      
//       <div className="formdiv">
//         <form onSubmit={addStudent}>
//           <label>
//             Student Name:{" "}
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <br /><br/>
//           <label>
//             Rank:
//             <input
//               type="text"
//               value={rank}
//               onChange={(e) => setRank(e.target.value)}
//             />
//           </label>
//           <br/><br/>
//           <label>
//             College preference1:
//             <select onChange={(e) => setC1(e.target.value)}>
//               <option></option>
//               <option value="IITKanpur">IIT Kanpur</option>
//               <option value="IITMadras">IIT Madras</option>
//               <option value="IITBombay">IIT Bombay</option>
//               <option value="Hyderabad">Hyderabad</option>
//               <option value="Roorkee">Roorkee</option>
//               <option value="Ahmadabad">Ahmadabad</option>
//             </select>
//           </label>
//           <br/><br/>
//           <label>
//             College preference2:
//             <select onChange={(e) => setC2(e.target.value)}>
//               <option></option>
//               <option value="IITKanpur">IIT Kanpur</option>
//               <option value="IITMadras">IIT Madras</option>
//               <option value="IITBombay">IIT Bombay</option>
//               <option value="Hyderabad">Hyderabad</option>
//               <option value="Roorkee">Roorkee</option>
//               <option value="Ahmadabad">Ahmadabad</option>
//             </select>
//           </label>
//           <br/><br/>
//           <label>
//             College preference3:
//             <select onChange={(e) => setC3(e.target.value)}>
//               <option></option>
//               <option value="IITKanpur">IIT Kanpur</option>
//               <option value="IITMadras">IIT Madras</option>
//               <option value="IITBombay">IIT Bombay</option>
//               <option value="Hyderabad">Hyderabad</option>
//               <option value="Roorkee">Roorkee</option>
//               <option value="Ahmadabad">Ahmadabad</option>
//             </select>
//           </label>
//           <br/><br/>

//           <button className="btn1">save</button>
//         </form>
//         <button className="btn2" onClick={()=>setClose(false)}> XCancel</button>

//       </div>
//      {/* <Table  datas={state}/> */}
    
//     </div>
//   )
// }

// export default Form
