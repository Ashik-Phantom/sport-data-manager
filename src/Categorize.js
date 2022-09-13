import * as React from 'react';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

const Categorize = () => {

    function clearlocalStorage(){
        localStorage.clear();
    }

    function handleCategory(){
       
        if(category === "" && score===""){ 
            return 
        }
        else if(category!="" && score === ""){
            const transformedData = Originaldata.filter((item) => (item.category === category));
            console.log(transformedData);
            setData(transformedData);
            return
        }
        else{
            const transformedData = Originaldata.filter((item) => ((item.category === category) && ((item.e1.toString() === score) || (item.e2.toString() === score) || (item.e3.toString() === score))));
            console.log(transformedData);
            setData(transformedData);           
        }
        console.log("Score: ", score)
        console.log("Category: ", category)
    }

    const [score,setScore] = useState("")
    const [category, setCategory] = useState("") 
    const [Originaldata, setOriginalData] = useState(JSON.parse(localStorage.getItem("data"))) 
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data"))) 

   useEffect(() => {
        localStorage.setItem("score",JSON.stringify(score))
        handleCategory();
      }, [score]);
    
      useEffect(() => {
        localStorage.setItem("category", JSON.stringify(category))
        handleCategory();
      }, [category]);


    return(
        <div>
            <div>
            <Link to='/'>
                <button onClick={clearlocalStorage}>Back</button>
            </Link>
            </div>
            
            <h1>Categorize Players</h1>
            <div className='input-box'>
                <div className='radio-boxes' onChange={(e)=>{setCategory(e.target.value); handleCategory()}}>
                    <input type="radio" value="U14" name="category" /> U14
                    <input type="radio" value="U17" name="category" /> U17
                    <input type="radio" value="U19" name="category" /> U19                   
                </div>

                <div className='text-input'>
                    <input type="text" placeholder="Enter value here" onChange={(e)=>{setScore(e.target.value); handleCategory()}} />
                </div>
            </div>

            <div>
                <h2>Selected Category Table</h2>
                <table>
                    <thead>
                        {data.length == 0 ? 
                        <tr>
                            <th>No Data</th>
                        </tr> 
                        : 
                        <tr>
                            <th>S.no</th>
                            <th>Chest no</th>
                            <th>Player Name</th>
                            <th>Category</th>
                            <th>Event 1</th>
                            <th>Event 2</th>
                            <th>Event 3</th>
                            <th>R100</th>
                            <th>R400</th>                       
                        </tr>
                    }
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key = {item.sno}>
                                <td>{item.sno}</td>
                                <td>{item.chest_no}</td>
                                <td>{item.Name}</td>
                                <td>{item.category}</td>
                                <td>{item.e1}</td>
                                <td>{item.e2}</td>
                                <td>{item.e3}</td>
                                <td>{item.R100}</td>
                                <td>{item.R400}</td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
            </div>        
    </div>
    );
}

export default Categorize;
