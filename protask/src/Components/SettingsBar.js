import React from "react"
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core"
import SetModal from "./settingModal"
import Time from "./time"



const Settings = () => {

    return(
        <div>
            <AppBar style={{display:"flex", flexDirection:'row', justifyContent:"space-between", alignContent:'center',border:'solid 1px white', width:"67%", margin:'0% auto', marginTop:"2%", marginBottom:'4%', background:"linear-gradient(to right, #000046, #1cb5e0)", borderRadius:"10px", padding:'1%'}} position='static'>

                <Toolbar style={{width:"15%"}}>
                <Typography>
                   David Ray Jr
                </Typography>
                </Toolbar>
                <div style={{width:'50%', display:'flex', padding:'1%', justifyContent:'space-evenly'}}>

                <div style={{ width:'30%', textAlign:'center'}}>
                    <Time />
                </div>
                <div style={{ margin:"1% 0", padding:"1%", width:'30%', textAlign:'center'}}>
                    <SetModal />
                </div>
                </div>
                
            </AppBar>
        </div>
    )
}

export default Settings