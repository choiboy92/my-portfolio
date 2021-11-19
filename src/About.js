import React from "react"
import profile from './Assets/profile.JPG'
function AboutPage() {
  return (
    <div id="aboutPage">

        <div className = "aboutContainer" id="aboutLH">
          <h1><span style={{padding: "0 15px", boxShadow:"inset 0 -15px 0 0 #96c8a2"}}>Hello World!</span></h1>
          <p>My name is Junho Choi and I am a 4th year Mechanical Engineering Undergraduate at Imperial College London. Alongside my studies, I have been working as a Product Manage at DoubleMe since July 2020.<br/><br/>
              Along with engineering, I have a keen interest in design, machine learning, front- end web development and computer vision. These wide-ranging interests have lead me to take part in a variety of projects as part of my coursework, internships, and even individual projects that I have started in my free time.
          </p>
        </div>
        <div className = "aboutContainer" id="aboutRH">
          <div style={{display:"flex"}}>
            <img src={profile} style={{borderRadius: "50%", width: "200px"}}/>
          </div>
          <div>
            <p style={{fontWeight: "400",textAlign:"left"}}>Imperial College London
            <ul>
              <li>First Class Honours (2019 & 2020 examinations)</li>
              <li>Dean’s List award (2020)</li>
              <li>Squash Social Secretary 20/21</li>
              <li>ICKFC Vice-Captain 19/20</li>
            </ul>
            Eton College
            <ul>
              <li>Keeper of Entrepreneurship Society</li>
              <li>House Captain & Academic Scholar</li>
              <li>A-levels (5 A*s)</li>
              <li>GCSEs (11 A*s)</li>
            </ul>
            </p>
          </div>
        </div>

    </div>
  )
}

export default AboutPage;
