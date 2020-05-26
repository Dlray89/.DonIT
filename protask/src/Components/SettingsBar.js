import React from "react"
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core"
import SetModal from "./settingModal"
import Time from "./time"



const Settings = () => {

    return(
        <div>
            <AppBar style={{display:"flex", flexDirection:'row', justifyContent:"space-evenly", alignContent:'center',border:'solid 1px white', width:"80%", margin:'0% auto', marginTop:"10%", marginBottom:'4%', background:"linear-gradient(to right, #000046, #1cb5e0)", borderRadius:"10px"}} position='static'>
                <Toolbar style={{width:"15%"}}>
                <Typography>
                   David Ray Jr
                </Typography>
                </Toolbar>
                <div>
                    <Time />
                </div>
                <div style={{ margin:"1% 0"}}>
                    <SetModal />
                </div>
                
            </AppBar>
        </div>
    )
}

export default Settings