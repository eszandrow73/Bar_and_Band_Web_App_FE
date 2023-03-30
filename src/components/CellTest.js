import {useState} from 'react';
import DisplayRec from "./RecordDisplayForm"

export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const [viewRec, setViewRec] = useState(false)
  const [recData, setRecData] = useState({})
  const [recKeys, setRecKeys] = useState([])

  const buttonClicked = () => {
    //console.log(props.data)
    setRecData(props.data)
    let keys = Object.keys(props.data)
    setRecKeys(keys)
    setViewRec(true)
    /*
    let output = ""
    keys.forEach((k)=>{
        output = output + props.data[k].toString() + " , "
    })
    alert(output)
    */
  };

  const closeForm = () =>{
    setViewRec(false)
  }

  return (
    <span>
      <button onClick={() => buttonClicked()}>{cellValue}</button>
      <DisplayRec isOpen={viewRec} data={recData} keys={recKeys} close={closeForm} curUserId={1}/>
    </span>
  );
};