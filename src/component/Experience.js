import { Badge } from 'react-bootstrap';
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
                    <h6><Badge bg="primary">12개월</Badge></h6>
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
                                </li>
                                <li>
                                    시가표준액 정보시스템 2차 개발
                                </li>
                                <li>
                                    Skill Keywords
                                    <div>
                                        <Badge bg="dark" className='mr5'>Java</Badge>
                                        <Badge bg="dark" className='mr5'>Spring boot</Badge>
                                        <Badge bg="dark" className='mr5'>Javascript</Badge>
                                        <Badge bg="dark" className='mr5'>jQuery</Badge>
                                        <Badge bg="dark" className='mr5'>mybatis</Badge>
                                        <Badge bg="dark" className='mr5'>Postgresql</Badge>
                                        <Badge bg="dark" className='mr5'>SVN</Badge>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='mySkill pt15'>
                <div className='skillLeft'>
                    <span>
                        2021.02 ~ 2021.08
                    </span>
                    <h6><Badge bg="primary">6개월</Badge></h6>
                </div>
                <div className='skillRight pl15'>
                    <div className='experList'>
                        <div>
                            <div>
                                <span className='experTitle'>한국스마트정보교육원(전주)</span>
                            </div>
                            <div>
                                <i style={{color : 'gray', fontSize : '15px'}}>응용 소프트웨어 개발자 양성 과정</i>
                            </div>
                            <ul className='pt15'>
                                <li>
                                    응용SW 및 DB엔지니어링 융합 / NCS직종 : 20010202 6개월과정
                                    {/*<span style={{fontSize : '14px', paddingLeft : '5px'}}><a href='https://branched-show-09d.notion.site/WMS-a8c8b332071d4ddda6b0ef1411ecf80f' target='_blank'>참고 URL</a></span>*/}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='mySkill pt15'>
                <div className='skillLeft'>
                    <span>
                        2011.03 ~ 2019.08
                    </span>
                </div>
                <div className='skillRight pl15'>
                    <div className='experList'>
                        <div>
                            <div>
                                <span className='experTitle'>원광대학교</span>
                            </div>
                            <div>
                                <i style={{color : 'gray', fontSize : '15px'}}>경영학부 학사 졸업</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;