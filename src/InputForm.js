import { useEffect, useState } from 'react';
import * as xlsx from "xlsx"

const InputForm = () => {

  const [data, setData] = useState(null) 

 function readUploadFile(e){
    e.preventDefault();
    if(e.target.files){
      const reader = new FileReader(); 
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type:"array"}); 
        const sheet1 = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheet1];
        const json = xlsx.utils.sheet_to_json(worksheet);
        localStorage.setItem("data",JSON.stringify(json))
        setData(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }


  return(
    <div>
        <form>
                <label htmlFor="upload">Upload File</label>
                <input 
                type="file"
                name="upload"
                id="upload"
                onChange={readUploadFile} />
        </form>
      
        {data===null ?<button disabled>Categorize</button> :  <a href='/Categorize'><button>Categorize</button></a>}
        {data===null ?<button disabled>PlayerDetails</button> :  <a href='/PlayerDetails'><button>PlayerDetails</button></a>}

    </div>

  )
}

export default InputForm;