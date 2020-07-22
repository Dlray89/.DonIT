import React from 'react'
import { Link } from 'react-router-dom'
import CalendarComp from 'react-material-ui-calendar'
// import SideBar from "../Components/SideBar"
import { Card, CardHeader, Typography, makeStyles, Breadcrumbs } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));




const Calendar = () => {
    const [value, setValue] = React.useState(false)
    const classes = useStyles();
    const callback = () => {
        setValue(true)
        console.log(value)
    }

    return (
        <div style={{ width: '100%', background: 'grey', padding: '5%' }}>
        

            <Breadcrumbs style={{border:'solid 2px red', width:'80%', margin:'3% auto', textAlign:'center'}} aria-label="breadcrumb">
                <Link to='/dashboard' className={classes.link}>
                    <HomeIcon className={classes.icon} />
        DashBoard
      </Link>
                <Link

                    to="/projects"

                    className={classes.link}
                >
                    <WhatshotIcon className={classes.icon} />
        Projects
      </Link>
            </Breadcrumbs>

            <Card style={{ margin: '0 auto', border: 'solid 2px green', width: '80%', textAlign: 'center' }}>
                <CardHeader title='Calendar' />
                <div style={{ border: 'solid 2px red', width: '80%', margin: '0 auto' }}>

                    <CalendarComp
                        generalStyle={{
                            maxWidth: "100%",
                            margin: "0 auto",
                            backgroundColor: "rgba(0,0,0,1)",
                            maxHeight: "100%",
                            overflow: "auto"
                        }}
                    // selection={callback}
                    // mode={callback}



                    />
                </div>
            </Card>

        </div>
    )
}

export default Calendar