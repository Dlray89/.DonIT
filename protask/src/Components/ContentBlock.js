import React from "react"
import { Link } from "react-router-dom"
import { makeStyles, Card, CardHeader, CardContent, CardActionArea, Button, Typography, Divider } from "@material-ui/core"
import SettingsBar from "./SettingsBar"

//Antd components
import { Empty } from "antd"

const useStyles = makeStyles((theme) => ({
    dashRoot: {
        background: "grey",
        margin: '0',
        width: '83vw',

    },
    dashHub: {
        border: 'solid 2px blue',
    },
    mainCard: {
        background: "grey",
        width: "100%",
        margin:'0 auto',
        padding: "1%",
        color: 'white',
        display:'flex',
        justifyContent:"space-between",
        boxSizing:"border-box"

    },
    GetStarted: {
        textAlign: 'center',
        width: "100%",
        justifyContent: 'space-between',
        border: 'solid 1px white',
        boxSizing: "border-box",
        marginTop:"2%",
        background: 'linear-gradient(to right, #000046, #1cb5e0)',
        color: "white",
        display: "flex",
        
    },
    Links: {
        textDecoration: 'none',
        color: 'white'
    }
}))

const ContentBlock = () => {
    const classes = useStyles()
    return (
        <div className={classes.dashRoot}>
            <div>
                <SettingsBar />
            </div>

            <Card variant='outlined' style={{ width: '98%', margin: ' 1% auto', padding: "2%", boxSizing: "border-box" }}>
                DashBoard
        </Card>

            <div className={classes.mainCard}>


                <Card variant="outlined" style={{ width: '48.5%' }}>
                    <CardHeader title='Get Started' />
                    <Divider style={{background:'black',}}  />
                    <div variant="outlined" color='primary' className={classes.GetStarted}>

                        <div style={{ border: 'solid 2px red', width: "27%" }}>
                            <Typography > Create Project</Typography>
                        </div>

                        <div style={{ border: 'solid 2px green', width:'32%' }}>
                            <Link to='/addproject' className={classes.Links}><Button variant="outlined" style={{ color: 'white', border: 'solid 1px white', width:'100%' }}>New Project</Button></Link>
                        </div>


                    </div>


                    <div variant="outlined" color='primary' className={classes.GetStarted}>

                        <div style={{ border: 'solid 2px red', width: "27%" }}>
                            <Typography > Create Tasks</Typography>
                        </div>

                        <div style={{ border: 'solid 2px green', width: '32%' }}>
                            <Link to='/tasks' className={classes.Links}><Button variant="outlined" style={{ color: 'white', width: '100%', border: 'solid 1px white' }}>Tasks</Button></Link>
                        </div>


                    </div>
                </Card>
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Card variant='outlined' style={{width:'48.5%', textAlign:'center', padding:'1%'}}>
                    <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" imageStyle={{
                        height:'60%'
                    }} description={
                        <span>
                           Create a to do list
                        </span>
                    } >
                        <Button variant="outlined">
                            Create To Do
                        </Button>
                    </Empty>
                </Card>

            </div>
        </div>
    )
}

export default ContentBlock