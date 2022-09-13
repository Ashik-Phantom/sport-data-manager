import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

const PlayerDetails = () => {
    const [Originaldata, setOriginalData] = useState(JSON.parse(localStorage.getItem("data"))) 
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data"))) 
    const [Player, setPlayer] = useState("")
    
    function clearlocalStorage(){
        localStorage.clear();
    }
    
    function handlePlayer(){
        if(Player === "")
        {
            return 
        }
        else 
        {
            const transformedData = Originaldata.filter((item) => (item.chest_no.toString() === Player.toString()));
            console.log(transformedData);
            setData(transformedData);
            return
        }
    }

    useEffect(() => {
        localStorage.setItem("Player",JSON.stringify(Player));
        handlePlayer()
      }, [Player]);

      useEffect(() => {
        localStorage.setItem("data",JSON.stringify(data))
      }, [data]);

    return(
        <div>
            <div>
                <Link to='/'>
                    <button onClick={clearlocalStorage}>Back</button>
                </Link>
            </div>
            <h1>Players</h1>
            <div className='text-input'>
                <label>Chest Number  </label>
                <input type="text" placeholder="Enter Chest No" onChange={(e)=>{setPlayer(e.target.value); console.log(Player)}} />
            </div>

            <div>
                <h2>Player Details</h2>
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
                            <th>Name</th>
                            <th>Dob</th>
                            <th>School</th>
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
                                <td>{item.dob}</td>
                                <td>{item.school}</td>
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

export default PlayerDetails