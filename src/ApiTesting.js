import React from 'react'
import axios from 'axios';
 

function ApiTesting() {
    const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/getAdmitMed";
    const getApi = () => {
        axios.get(url).then((res, req) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }
 
    return (
        <div>
            {/* <h1>ApiTesting</h1> */}
            <button><a href="https:\/\/api.whatsapp.com\/send?phone=+919140356115" target="_blank" > Google </a></button>
             
        </div>
    )
}

export default ApiTesting;