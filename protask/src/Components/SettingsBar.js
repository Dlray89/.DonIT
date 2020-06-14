import React from 'react'
import {Divider, Button, Typography} from "@material-ui/core"
import Model from "../Components/settingModal"


const Settings = () => {

    return(
        <div>
            <div style={{ display:'flex', justifyContent:'space-between', width:'70%', margin:'0 auto'}}>
                 <Typography style={{width:"10%", marginTop:'2%', fontSize:"1.3rem"}}>
                     David
                 </Typography>

                 <div>
                    <Model  />
                 </div>
            </div>
            <Divider style={{background:'linear-gradient(to right, #000046, #1cb5e0)', width:"75%", margin:' 0 auto'}} />
        </div>
    )
}

export default Settings