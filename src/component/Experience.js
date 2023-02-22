import { Button } from 'react-bootstrap';
const Experience = () => {

    return(
        <div className='pt30'>
            <div>
                <div className='myName'>
                    <span>
                        EXPERIENCE
                    </span>
                </div>
            </div>
            <div className='mySkill pt15'>
                <div className='skillLeft'>
                    <span>
                        2021.09 ~ 2022.08
                    </span>
                    {/*<div><Button size ='sm' type='null'>12개월</Button></div>*/}
                </div>
                <div className='skillRight pl15'>
                    <div className='experList'>
                        <div>
                            <div>
                                <span className='experTitle'>지오투정보기술</span>
                            </div>
                            <div>
                                <i style={{color : 'gray', fontSize : '15px'}}>솔루션사업부 개발 1팀</i>
                            </div>
                            <ul className='pt15'>
                                <li>
                                    시가표준액 정보시스템 1차 개발 & 유지보수
                                    <span style={{fontSize : '14px', paddingLeft : '5px'}}><a href='https://branched-show-09d.notion.site/1-aa00aeb3a98a42e2954c92d74a4d44f1' target='_blank'>참고 URL</a></span>
                                </li>
                                <li>
                                    시가표준액 정보시스템 2차 개발
                                    <span style={{fontSize : '14px', paddingLeft : '5px'}}><a href='https://branched-show-09d.notion.site/2-54c09d9b6cb2410886bab64b557a0188' target='_blank'>참고 URL</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Experience;