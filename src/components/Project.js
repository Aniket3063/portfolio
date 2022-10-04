import React , {useState} from 'react'
import './Project.css'
import NumberHeading from '../components/Templates/NumberHeading'
import Button from '../components/Templates/Button'
import ProjectTiles from "../components/Templates/ProjectTiles"

export default function Project() {


  const PROJECT = [
    {
      projectName : "Sarkari result Cloned",
      projectDesc : "Designing my first Custom website named as College Result in Curiousity of implementation of a new skill.",
      link: "/",
      githubLink: "/",
      langUsed: [
        " HTML  ",
        "| CSS  "
      ],
      index: "1"
    },
    {
      projectName : "Junoon Homepage Clone ",
      projectDesc : "Building my first React Project as a Task to get into Tech Team of Junoon (College Society).",
      link: "https://aniket3063.github.io/junoonclonewebsite/",
      githubLink: "https://github.com/Aniket3063/junoonclonewebsite",
      langUsed: [
        "HTML  ",
        "◈ CSS  ",
        "◈ JavaScript ",
        "◈ React"
      ],
      index: "2"
    },
    {
      projectName : "IT1-Website ",
      projectDesc : "Building my first React Project as a Task to get into Tech Team of Junoon (College Society).",
      link: "/",
      githubLink: "https://github.com/Aniket3063/IT1-Website",
      langUsed: [
        "HTML  ",
        "| CSS  "
      ],
      index: "3"
    },
    {
      projectName : "GeoJam-22",
      projectDesc : "' Our first game-jam as a team. Our main goal is to learn stuff ', First Contribution Made in this Group Project.",
      link: "/",
      githubLink: "https://github.com/Aniket3063/GeoJam-22",
      langUsed: [
        "HTML  ",
        " | CSS  ",
        " | JavaScript"
      ],
      index: "4"
    },
    {
      projectName : "The Portfolio",
      projectDesc : "Sharpening my Reactjs skills while building my portfolio.",
      link: "https://aniket3063.github.io/portfolio/",
      githubLink: "https://github.com/Aniket3063/portfolio",
      langUsed: [
        "JavaScript ",
        "| CSS  ",
        "| React"
      ],
      index: "5"
    },


  ];

  const [Show, setShow] = useState(false);

  let myStyle = window.innerWidth > 426 ? {
    height: "735px",
    overflow:"hidden",
  }:{
    height: "1005px",
    overflow:"hidden",
  }



  if(Show === true){
    myStyle = {
      height:"auto"
    }
  }
  else{
    myStyle = window.innerWidth > 426 ? {
      height: "735px",
      overflow:"hidden",
    }:{
      height: "1005px",
      overflow:"hidden",
    }
  }



  return (
    <section className='project' id='projects'>
      <NumberHeading number="03" name="Some Things I've Built" />
      <br /><br /><br /><br />
      <h3 className='green-color' style={{ fontWeight: "500", margin: "10px 0", textAlign: "center" }}> view the archives</h3>

      <div className='cover' style= {myStyle}>
      <ul className='projects-grid'>
            {PROJECT.map((e) => {
              return <li className='project-list' key={e.index}>
                <ProjectTiles data = {e} /></li>;
            })}
      </ul>
      </div>

      <div style={{ margin : " 80px auto",textAlign:"center"}}><span  style={{ display:"inline-block"}} onClick={() => {Show ? setShow(false) : setShow(true)}}>
        <Button name={Show ? "View Less" : "Show More"} id="project-btn" size={(window.innerWidth > 426)?"17":"15" } /> 
      </span></div>
    </section>
  )
}
