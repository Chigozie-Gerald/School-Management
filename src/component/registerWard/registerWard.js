import React, { PureComponent } from "react";
import "./registerWard.css";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

class RegisterWard extends PureComponent {
  render() {
    const arr_cont = [
      {
        icon: "whatsapp_black",
        iconStrict: false,
        text: ["+234 9057 559 107"],
        type: "text",
      },
      {
        icon: "email",
        iconStrict: true,
        text: ["chigoziegerald19@gmail.com"],
        type: "text",
      },
      {
        icon: "github",
        iconStrict: false,
        pathname: "https://github.com/Chigozie-Gerald",
        text: ["https://github.com/Chigozie-Gerald"],
        type: "link",
      },
      {
        icon: "phone-alt",
        iconStrict: false,
        text: ["+234 9057 559 107,", "+234 9025 154 354"],
        type: "text",
      },
      {
        icon: null,
        value: "Address",
        iconStrict: true,
        text: ["DSC Steel Town 1, Warri, Nigeria"],
        type: "text",
      },
    ];
    const cont_list = arr_cont.map((elem, n) => (
      <div
        className={`div_contact flex ${elem.icon === null ? "fd_col pt1" : ""}`}
        key={n}
      >
        <div className="div_contact_icon center">
          {!elem.iconStrict ? (
            <div className="res_img_head center">
              <img
                src={require(`../mediaFiles/${elem.icon}.svg`)}
                alt=""
                className="img_div"
              />
            </div>
          ) : elem.icon ? (
            <div className="res_img_head center">
              <i className={`material-icons ${elem.icon}`}></i>
            </div>
          ) : (
            <div className="res_img_head_txt div-width-100 flex vert_align">
              {elem.value}
            </div>
          )}
        </div>
        <div className="div_contact_body inline_flex">
          {elem.text.map((elemText, txtN) => (
            <div key={txtN}>
              {elem.type === "text" ? (
                elemText
              ) : elem.type === "link" ? (
                <Link to={{ pathname: elem.pathname }} className="Link_autom">
                  {elemText}
                </Link>
              ) : elem.type === "bullet" ? (
                <ul>
                  <li>{elemText}</li>
                </ul>
              ) : (
                elemText
              )}
            </div>
          ))}
        </div>
      </div>
    ));
    const head = (txt) => (
      <div className="res_heading flex vert_align div-width-100">{txt}</div>
    );
    const skill_arr = [
      {
        name: "NodeJs",
        grade: "60",
        path: "nodejs",
        color: "--blue",
        remark: "Good",
      },
      {
        name: "React",
        grade: "85",
        path: "react",
        color: "--green",
        remark: "Advanced",
      },
      {
        name: "Redux",
        grade: "85",
        path: "redux",
        color: "--green",
        remark: "Advanced",
      },
      {
        name: "Mongodb",
        grade: "70",
        path: "mdb",
        color: "--green",
        remark: "Advanced",
      },
      {
        name: "Express",
        grade: "50",
        path: "ExpressJS",
        color: "--purple",
        remark: "Fair",
      },
      {
        name: "Javascript",
        grade: "85",
        path: "javascript",
        color: "--green",
        remark: "Advanced",
      },
      {
        name: "Python",
        grade: "40",
        path: "python",
        color: "--indigo",
        remark: "Fair",
      },
      {
        name: "Java",
        grade: "35",
        path: "java",
        color: "--red",
        remark: "Poor",
      },
    ];
    const skill_list = skill_arr.map((elem, n) => (
      <div key={`${n}skills`} className="skillPane flex">
        <div className="skillPane_head">
          <img
            src={require(`../mediaFiles/pngs/${elem.path}.png`)}
            alt=""
            className="img_div_contain"
          />
        </div>
        <div className="skillPane_Side flex fd_col flex_right">
          <div className="skillPane_name div-width-100">{elem.name}</div>
          <div className="skillPane_foot div-width-100 flex fd_col">
            <div className="skillPane_foot_text">{elem.remark}</div>
            <div className="skillPane_foot_bar">
              <div
                className="skillPane_foot_bar_inner"
                style={{
                  width: `${elem.grade}%`,
                  backgroundColor: `var(${elem.color})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="res_wrapper div-width-100 full_page_height_min">
        <div className="res_header div-width-100 rel">
          <div className="res_header_div flex fd_col div-width-100 horiz_align">
            <div className="div1">IJOMAH CHIGOZIE GERALD</div>
            <div className="div2">MERN Stack Developer</div>
            <div className="res_header_info">{cont_list}</div>
          </div>
          {/* <div className="res_header_float div-width-100 hide center">
            <div className="icon_background">
              <img
                src={require("../mediaFiles/whatsapp_white.svg")}
                alt=""
                className="img_div"
              />
            </div>
          </div> */}
        </div>
        <div className="res_body di-width-100">
          <div className="res_summary div-width-100 ">
            <p>
              I am a self-taught JavaScript Developer with close to 2 years of
              experience working with frameworks like NodeJs and utilizing
              libraries like Reactjs to create dynamic webpages. Using resuable
              and clean code, I am able to complete tasks quickly whilst trying
              to get the best return in performance. I am currently looking for
              an opportunity to improve my skills and work with a team on biger
              projects.
            </p>
            <p>
              <b>Languages spoken</b> : English, Igbo
            </p>
          </div>
          <div className="res_experience div-width-100">
            {head("Experience")}
            <div className="res_experience_body box_border my_body">
              <div className="flex vert_align">Date</div>
              <div></div>
              <div>Mid 2017</div>
              <div>
                <p>- Started learning about HTML and its tags</p>
                <p>
                  - Was interested in php but dropped it due to its complexity
                  at that point in time
                </p>
                <p>
                  - Started learning CSS styles and its selectors(All the above
                  were done in space of about 4wks)
                </p>
              </div>
              <div>2017 - 2018</div>
              <div>
                <p>- Continued learning HTML and CSS</p>
                <p>- Discovered the jQuery library</p>
                <p>- Went deep into advanced CSS</p>
                <p>- Started learning React dropped jQuery along the way</p>
              </div>
              <div>2018 - 2019</div>
              <div>
                <p>
                  - Began using Redux for state management as opposed to React
                  states
                </p>
                <p>
                  - Created little web apps from Todo app to a small scale
                  School management platform
                </p>
                <p>
                  - Learnt Node, Express and Mongodb for months (Started reading
                  the docs again few weeks ago)
                </p>
              </div>
              <div className="row_date">2020</div>
              <div>
                <p>- Started learning python</p>
                <p>
                  - Dived into Machine Learning, Deep Learning algorithms and
                  Regression patterns using libraries like Keras, Tensorflow and
                  Numpy ( Currently not researching on that area )
                </p>
                <p>
                  - Started a School Management System web app which is
                  currently close to completion also started an Exam web app
                  that micmics the drawer and stack navigation pattern in React
                  native using React js and Redux for state management.
                  Developed backend API of both projects using Node, Express,
                  Mongodb as database
                </p>
                {/* <p>
                  
                </p> */}
                <p>
                  - Learning Java to add the knowledge statically typed language
                  to my skill set for development of intermediate to fairly lage
                  projects
                </p>
              </div>
            </div>
          </div>
          <div className="res_education div-width-100">
            {head("Academic History")}
            <div className="res_edu_body box_border my_body">
              <div className="flex vert_align">Date</div>
              <div></div>
              <div>Primary Education</div>
              <div>DSC Model Primary Schools, DSC.</div>
              <div>Secondary Education</div>
              <div>
                King's College Lagos ( Bronze medalist American Mathematics
                competiton and also bronze medalist Cowbell Mathematics
                competiton in Lagos 2013 ), Graduated from secondary school as
                the best science student 2017/2018 academic sessiom
              </div>
              <div className="row_date">Tertiary Education</div>
              <div>
                <p>Studying Medine and Surgery at the University of Nigeria</p>(
                Current GPA: 4.73 on a 5.0 point scale )
              </div>
            </div>
          </div>
          <div className="res_skills div-width-100">
            {head("Programming Languages and Library Set")}
            <div className="res_skills_body my_body">{skill_list}</div>
          </div>
          <div className="res_current div-width-100">
            {head("Development Strategies")}
            <p className="my_body">
              I use Stackoverflow while debugging and also learn most times by
              reading the documentations of libraries I choose to use. YouTube
              has also being a good learning material along side the books I
              read.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default RegisterWard;
