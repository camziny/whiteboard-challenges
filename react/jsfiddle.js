/* 

React Inspection Form Exercise

1) Add inputs for:
	- Tank Name
  - Date
  - Tank Radius
  - Inspection Type ('PAUT' and/or 'Visual') 
      
2) Display the value entered in each input under 'Current Values'
  
3) Conditionally display an input and current value for Bottom Thickness if the inspection type is 'PAUT'
	- Validate that the entered Bottom Thickness is in range 0.1 - 1 (inclusive)
  - Display an error when validation is failing
  		- red, bold text
      - in a node w/ height of 100px
      - vertically and horizontally centered
  
  
4) Add a form title as a prop of a reusable InspectionForm component

5) Add a text input for procedure codes (an arbitrary string which varies for each inspection)
 - Codes are entered one at a time 
 - Multiple codes may be added, and the same code may be added multiple times
 - Values should be stored in the order they were added
 - Display a list of the entered codes under 'Current Values'
 - Allow the user to delete a specific code

*/

function InspectionForm({ title }) {
  const [state, setState] = React.useState({
    tankName: "",
    date: "",
    tankRadius: "",
    inspectionType: [],
    bottomThickness: "",
    procedureCode: "",
    procedureCodes: [],
    errorMessage: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleProcedureCodeAdd = () => {
    setState((prevState) => ({
      ...prevState,
      procedureCodes: [...prevState.procedureCodes, prevState.procedureCode],
      procedureCode: "",
    }));
  };

  const handleProcedureCodeDelete = (codeToDelete) => {
    setState((prevState) => ({
      ...prevState,
      procedureCodes: prevState.procedureCodes.filter(
        (code) => code !== codeToDelete
      ),
    }));
  };

  const validateThickness = (input) => {
    let error = "";
    if (input < 0.1 || input > 1) {
      error = "Invalid bottom thickness. Must be between 0.1 and 1";
    }
    setState((prevState) => ({
      ...prevState,
      errorMessage: error,
    }));
  };

  const handleBottomThicknessChange = (event) => {
    const value = event.target.value;
    setState({ ...state, bottomThickness: value });
    validateThickness(value);
  };

  const showThickness = state.inspectionType.includes("PAUT");

  return (
    <div>
      <h1>{title}</h1>
      <form id="inspectionForm">
        <label>Tank Name:</label>
        <input name="tankName" value={state.tankName} onChange={handleChange} />

        <label>Date:</label>
        <input name="date" value={state.date} onChange={handleChange} />

        <label>Tank Radius:</label>
        <input
          name="tankRadius"
          value={state.tankRadius}
          onChange={handleChange}
        />

        <label>Inspection Type:</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="inspectionType"
              value="PAUT"
              checked={state.inspectionType.includes("PAUT")}
              onChange={(e) => {
                const value = e.target.value;
                setState((prevState) => ({
                  ...prevState,
                  inspectionType: prevState.inspectionType.includes(value)
                    ? prevState.inspectionType.filter((type) => type !== value)
                    : [...prevState.inspectionType, value],
                }));
              }}
            />
            PAUT
          </label>
          <label>
            <input
              type="checkbox"
              name="inspectionType"
              value="Visual"
              checked={state.inspectionType.includes("Visual")}
              onChange={(e) => {
                const value = e.target.value;
                setState((prevState) => ({
                  ...prevState,
                  inspectionType: prevState.inspectionType.includes(value)
                    ? prevState.inspectionType.filter((type) => type !== value)
                    : [...prevState.inspectionType, value],
                }));
              }}
            />
            Visual
          </label>
        </div>

        {showThickness && (
          <div>
            <label>Bottom Thickness:</label>
            <input
              name="bottomThickness"
              value={state.bottomThickness}
              onChange={handleBottomThicknessChange}
            />
            <div
              style={{
                color: "red",
                fontWeight: "bold",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {state.errorMessage}
            </div>
          </div>
        )}

        <label>Procedure Code:</label>
        <input
          name="procedureCode"
          value={state.procedureCode}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleProcedureCodeAdd}
          disabled={!state.procedureCode}
        >
          Add Code
        </button>
      </form>

      <br />
      <div>
        <b>Current Values: </b>
        <p>Tank Name: {state.tankName}</p>
        <p>Date: {state.date}</p>
        <p>Tank Radius: {state.tankRadius}</p>
        <p>Inspection Type: {state.inspectionType.join(", ")}</p>
        {showThickness && <p>Bottom Thickness: {state.bottomThickness}</p>}
        <p>Procedure Codes:</p>
        <ul>
          {state.procedureCodes.map((code, index) => (
            <li key={index}>
              {code}
              <button onClick={() => handleProcedureCodeDelete(code)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<InspectionForm title="Tank Inspection Form" />);
