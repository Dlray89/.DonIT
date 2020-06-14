import React from "react"
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core"
import SetModal from "./settingModal"
import Time from "./time"



const Settings = () => {

    return(
        <div>
            <AppBar style={{display:"flex", flexDirection:'row', justifyContent:"space-between", alignContent:'center', width:"100%", margin:'0% auto', background:"linear-gradient(to right, #000046, #1cb5e0)", boxSizing:'border-box'}} position='static'>

                <Toolbar style={{width:"15%"}}>
                <Typography>
                   ProHASH
                </Typography>
                </Toolbar>
                <div style={{width:'50%', display:'flex', justifyContent:'space-evenly'}}>

                <div style={{ width:'30%', textAlign:'center'}}>
                    <Time />
                </div>
                <div style={{ margin:"1% 0", width:'30%', textAlign:'center'}}>
                    <SetModal />
                </div>
                </div>
                
            </AppBar>
        </div>
    )
}

export default Settings