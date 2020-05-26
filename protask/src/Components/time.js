import React from "react"


class Clock extends React.Component {

    state = {
        time: new Date()
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock