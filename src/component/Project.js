import {Badge} from "react-bootstrap";

const Project = () => {

    return (
        <div className='pt30'>
            <div>
                <div className='myName'>
                    <span>
                        PROJECT
                    </span>
                </div>
            </div>
            <div className='mySkill pt15'>
                <div className='skillLeft'>
                    <span>
                        2022.03 ~ 2022.08
                    </span>
                    <h6><Badge bg="info">6개월</Badge></h6>
                </div>
                <div className='skillRight pl15'>
                    <div className='experList'>
                        <div>
                            <div>
                                <span className='experTitle'>시가표준액 정보시스템 2차</span>
                            </div>
                            <div>
                                <i style={{color : 'gray', fontSize : '15px'}}>지오투정보기술</i>
                            </div>
                            <ul className='pt15'>
                                <li>
                                    건물 타입 별 현장조사 설문지 생성, 수정, 삭제 기능 및 화면 개발
                                </li>
                                <li>
                                    부동산 관련 대용량 데이터를 시도 별로 DB에 적재하는 기능 개발
                                </li>
                                <li>
                                    건물 데이터 조회, 검색 및 엑셀 다운로드 기능 개발
                                </li>
                                <li>
                                    건물 타입 별 데이터 일괄 등록 기능 개발
                                </li>
                                <li>
                                    지도 스케일 축소 시 지역 마커로 전환되며 클릭 시 해당 지역에 포함되어 있는 모든 건물 목록 출력
                                </li>
                                <li>
                                    <a href='https://branched-show-09d.notion.site/2-54c09d9b6cb2410886bab64b557a0188' target='_blank'>참고 URL</a>
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
                        2021.11 ~ 2022.02
                    </span>
                    <h6><Badge bg="info">4개월</Badge></h6>
                </div>
                <div className='skillRight pl15'>
                    <div className='experList'>
                        <div>
                            <div>
                                <span className='experTitle'>시가표준액 정보시스템 1차</span>
                            </div>
                            <div>
                                <i style={{color : 'gray', fontSize : '15px'}}>지오투정보기술</i>
                            </div>
                            <ul className='pt15'>
                                <li>
                                    지도에 건물 별 마커를 표시하여 상세 정보 및 사진 출력
                                </li>
                                <li>
                                    건물 마커 on/off 필터 기능
                                </li>
                                <li>
                                    현장조사자 로그인 시 담당 조사건물 목록 출력 및 건물타입, 조사상태 별 조회
                                </li>
                                <li>
                                    <a href='https://branched-show-09d.notion.site/1-aa00aeb3a98a42e2954c92d74a4d44f1' target='_blank'>참고 URL</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;