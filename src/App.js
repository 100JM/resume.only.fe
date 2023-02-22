import {useEffect, useState} from "react";
import myPhoto from "./img/KakaoTalk_20230217_174824365.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";
import {faFaceSmile} from "@fortawesome/free-regular-svg-icons";
import Intro from "./component/Intro";
import Skill from "./component/Skill";
import Experience from "./component/Experience";
import Project from "./component/Project";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

 /* const [introMsg, setIntroMsg] = useState("");

  useEffect(() =>{
    fetch("/api/getIntroduce.do").then((response) => response.json()).then((r) =>
        (r.SUCCESS === true) ? setIntroMsg(r) : alert('데이터를 가져오지 못하였습니다.' + r.error));

  },[])*/

  return (
      <div className='container'>
        <div className='aboutMe'>
            <div className='aboutMeLeft'>
                    <img className='myImg' src={myPhoto} alt="profile"/>
            </div>
            <div className='aboutMeRight'>
                <div className='myName'>
                    <span>백종민</span>
                </div>
                <div className="pt15">
                    <div className="contact">
                        <FontAwesomeIcon icon={faEnvelope} size='lg' style={{paddingRight : 10}}/>
                        <a href='mailto:bjm_9310@naver.com'>bjm_9310@naver.com</a>
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faPhone} size='lg' style={{paddingRight : 10}}/>
                        <a>010-4441-9535</a>
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faGithub} size='lg' style={{paddingRight : 10}}/>
                        <a href='https://github.com/100JM' target='_blank'>https://github.com/100JM</a>
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faLink} size='lg' style={{paddingRight : 10}}/>
                        <a href='https://branched-show-09d.notion.site/e6558b29a9f04e4c8c734d4ebe57e1dd' target='_blank'>Notion에서 확인하기</a>
                    </div>
                    <div className="rows">
                        <div>
                            <FontAwesomeIcon icon={faFaceSmile} size='lg' style={{paddingRight : 10}}/>
                            근면, 성실, 노력하는 개발자가 되겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Intro></Intro>
        <Skill></Skill>
        <Experience></Experience>
        <Project></Project>
      </div>
  );
}

export default App;
