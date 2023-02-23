import {Badge} from "react-bootstrap";

const Etc = () => {
    return (
        <div className='pt30'>
            <div>
                <div className='myName'>
                    <span>
                        ETC
                    </span>
                </div>
            </div>
            <div className='mySkill pt15'>
                <div className='skillLeft'>
                    <span>
                        2019.12
                    </span>
                </div>
                <div className='skillRight pl15'>
                    <div className='experList'>
                        <div>
                            <div>
                                <span className='experTitle'>정보처리기능사</span>
                            </div>
                            <div>
                                <i style={{color : 'gray', fontSize : '15px'}}>한국산업인력공단</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='mySkill pt15'>
                <div className='skillLeft'>
                    <span>
                        2016.12
                    </span>
                </div>
                <div className='skillRight pl15'>
                    <div className='experList'>
                        <div>
                            <div>
                                <span className='experTitle'>MOS Excel 2010 Expert</span>
                            </div>
                            <div>
                                <i style={{color : 'gray', fontSize : '15px'}}>Microsoft</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='mySkill pt15'>
                <div className='skillLeft'>
                    <span>
                        2012.10 ~ 2014.07
                    </span>
                </div>
                <div className='skillRight pl15'>
                    <div className='experList'>
                        <div>
                            <span className='experTitle'>육군 병장 만기 전역</span>
                            <div>
                                <i style={{color : 'gray', fontSize : '15px'}}>소총수</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Etc;