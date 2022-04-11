import { useContext, useState, useReducer } from "react";
import "./App.css";
import Result from "./components/Result";

import Table from "./components/Table";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      throw new Error();
  }
};

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [name, setName] = useState("");
  const [rank, setRank] = useState("");
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const addStudent = (e) => {
    e.preventDefault();
    setName("");
    setRank("");
    const preferences = {
      id: Date.now(),
      name,
      rank,
      c1,
      c2,
      c3,
    };
    dispatch({ type: "add", payload: preferences });
  };

  return (
    <div>
      {state.length > 0 && <Table datas={state} />}

      <div className="btndivmargin">
        <button
          className="btn"
          onClick={() => {
            setOpen(!open);
            setOpen1(false);
          }}
        >
          Addname
        </button>
        <button className="btn" onClick={() => setOpen1(!open1)}>
          View Result
        </button>
      </div>
      {open && (
        <div className="formdiv">
          <form onSubmit={addStudent}>
            <label>
              Student Name:{" "}
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Rank:
              <input
                type="number"
                value={rank}
                required
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                min="1"
                onChange={(e) => setRank(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              College preference1:
              <select onChange={(e) => setC1(e.target.value)}>
                <option></option>
                <option value="IITKanpur">IIT Kanpur</option>
                <option value="IITMadras">IIT Madras</option>
                <option value="IITBombay">IIT Bombay</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Roorkee">Roorkee</option>
                <option value="Ahmadabad">Ahmadabad</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              College preference2:
              <select onChange={(e) => setC2(e.target.value)}>
                <option></option>
                <option value="IITKanpur">IIT Kanpur</option>
                <option value="IITMadras">IIT Madras</option>
                <option value="IITBombay">IIT Bombay</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Roorkee">Roorkee</option>
                <option value="Ahmadabad">Ahmadabad</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              College preference3:
              <select onChange={(e) => setC3(e.target.value)}>
                <option></option>
                <option value="IITKanpur">IIT Kanpur</option>
                <option value="IITMadras">IIT Madras</option>
                <option value="IITBombay">IIT Bombay</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Roorkee">Roorkee</option>
                <option value="Ahmadabad">Ahmadabad</option>
              </select>
            </label>
            <br />
            <br />

            <button className="btn1">save</button>
          </form>
          <button className="btn2" onClick={() => setOpen(!open)}>
            {" "}
            XCancel
          </button>
        </div>
      )}

      {/* view result */}
      {open1 && (
        <div className="resultdiv">
          {state.length > 0 && !open && <Result datas={state} />}
        </div>
      )}
    </div>
  );
}

export default App;
