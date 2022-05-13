import {useState} from 'react'
import { FaSistrix } from "react-icons/fa";
const Stackoverflow = () => {
    const [linkData, setLinkData] = useState();


    const handelData = () => {
        let url = "http://stackoverflow.com/search?q=" + linkData;
        window.open(url, "_blank");
      };
    return (
        <div className="google-cont stack-overflow">
            <input
                onChange={(e) => setLinkData(e.target.value)}
                placeholder="StackoverFlow error search"
                type="text"
            />
            <button onClick={handelData} >
                <FaSistrix id='icon'/>
            </button>
        </div>
    )
}

export default Stackoverflow