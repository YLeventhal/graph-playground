import './App.css';
import {InputWidget} from "./components/InputWidget";
import {GraphWidget} from "./components/GraphWidget";
import {GlobalStyles, PageWrapper} from "./components/StyledComponents";
import {useState} from "react";

const dataIsValid = (keys, data) => {
    const firstDataset =  data[keys[0]] && data[keys[0]]?.split(",");
    const secondDataset =  data[keys[1]] && data[keys[1]]?.split(",");
    return Boolean(firstDataset) && Boolean(secondDataset) && firstDataset.length === secondDataset.length;
}

const transformData = data => {
    const keys = Reflect.ownKeys(data);
    if (keys.length && dataIsValid(keys,data)) {
        const first = data[keys[0]].split(",");
        const second = data[keys[1]].split(",").map(val => parseInt(val, 10));
        return first.reduce((acc, key, index) => {
            return [...acc, {[keys[0]]: first[index], [keys[1]]: second[index]}];
        }, [])
    }
    return [];
}

function App() {
    const [inputData, setInputData] = useState();
    const [graphData, setGraphData] = useState([])

    const handleInputChange = e => {
        const type = e.target.name;
        const value = e.target.value;
        setInputData(currentData => ({...currentData, [type]: value}))
    }

    const handleSubmit = e => {
        const transformedData = transformData(inputData);
        const finalData = transformedData.length ? transformedData : [];
        setGraphData(finalData);
    }

  return (
      <>
          <GlobalStyles />
          <div className="App">
            <PageWrapper>
                <InputWidget onInputChange={handleInputChange} onSubmitClick={handleSubmit}/>
                <GraphWidget data={graphData}/>
            </PageWrapper>
          </div>
      </>
  );
}

export default App;
