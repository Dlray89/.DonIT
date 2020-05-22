import React from "react"
import SideBar from "../Components/SideBar"
import ProjectCard from "../Projects/projectsList"

const ProjectPage = () => {
return(
    <div style={{display:'flex', width:'100%'}}>
        <SideBar />
            
            <ProjectCard />
        
    </div>
)
}

export default ProjectPage