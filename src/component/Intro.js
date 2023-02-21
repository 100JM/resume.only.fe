import {faArrowTurnDown, faArrowDown} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IntroContent from "./introContent";

const Intro = () => {
    
    const titleOnclickEvt = (event) => {
        event.preventDefault();
        let target = event.target.parentElement.nextElementSibling;

        if(target.classList.contains('off')){
            target.classList.add('on');
            target.classList.remove('off');

            event.target.parentElement.classList.remove('pb15');
        }else{
            target.classList.add('off');
            target.classList.remove('on');

            event.target.parentElement.classList.add('pb15');
        }
    }

    return (
        <div className='aboutMe'>
            <div className='aboutMeLeft'>
                <div className='myName'>
                    <span>INTRODUCE</span>
                </div>
            </div>
            <div className='aboutMeRight'>
                <div>
                    <div className='introTitle'>
                        <span onClick={titleOnclickEvt}  style={{cursor : "pointer"}}>
                            비전공자에서 개발자가 되기까지
                        </span>
                        <FontAwesomeIcon icon={faArrowDown} size='sm' style={{paddingLeft : 5, paddingTop : 5}}/>
                    </div>
                   {/* <div className='introContent'>
                        <IntroContent introContent = {r.introMsg.introContent} titleKey = {t.about_no}></IntroContent>
                    </div>*/}
                    <div className='introContent'>
                        <p>
                            건설기술단 도시계획부서에서 근무하던 시절, 시청에 제출하기위한 팸플릿을 수작업으로 제작하며 더 쉽고 깔끔하게 제작할 수있는 방법이 없을까 항상 고민하였습니다. HTML과 CSS만으로 팸플릿과 같은 창작물들을 제작하는것을 접하게 되었고 이는 저에게 혁신적이고 신선한 충격으로 다가왔습니다.
                        </p>
                        <p>
                            언어란 약속된 규칙안에서 본인의 어휘력으로 의사를 표현하고 대상과 소통하는 기술이라 생각합니다. 이러한 관점에서 프로그래밍 언어는 창의성이라는 어휘력으로 자신만의 개성과 능력을 시각화 할 수 있고 사용자에게 편의성을 주기도 하며 소통한다는 점이 매력적으로 느껴져 개발자라는 직업에 도전하게 되었습니다.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='introTitle'>
                        <span onClick={titleOnclickEvt}  style={{cursor : "pointer"}}>
                            ‘나’ 의 키워드
                        </span>
                        <FontAwesomeIcon icon={faArrowDown} size='sm' style={{paddingLeft : 5, paddingTop : 5}}/>
                    </div>
                    <div className='introContent'>
                       <p>
                           첫번째, 사색 - 개발은 흰색 도화지에 그림을 그리는 것과 같다고 생각합니다. 프로그래밍이 흥미로웠던 이유는 정답이 없기 때문입니다. 정해진 답과 반복되는 업무가 아니라 프로세스와 기능에 대해 스스로 고찰하고 다양한 방법으로 개발을 할 수 있다는 점이 매우 매력적으로 느껴졌습니다. 저는 끊임없이 사색하는 걸 좋아합니다. 더 간단하고 좋은 소스가 무엇일까 사색을 하다 보면 다양한 아이디어가 떠오르고 색다른 방법도 떠올릴 수 있었습니다. 간단한 코드를 작성하더라도 다른 사람이 봤을 때 쉽게 이해할 수 있도록 최대한 깔끔하게 작성하려 했습니다. 또한, 여러 곳에서 사용하는 이미지 슬라이드 기능을 공통함수로 만들어 팀원들이 편리하게 사용할 수 있도록 하였습니다. 창의력을 발휘한 협업을 하는 개발자가 되겠습니다.
                       </p>
                        <p>
                            두번째, 소통과 신뢰 - 관계에서 가장 중요하다고 여기는 가치는 ‘소통’과 ‘신뢰’라고 생각합니다. 맡은 업무를 묵묵히 잘 해내면서 업무 관계에서 신뢰를 쌓아왔습니다. 선임들은 이런 모습을 보고 업무 스타일이 든든하고 책임감 있다며 칭찬해 주셨습니다. 맡은 업무를 이해하기 위해 꼼꼼하게 정리하고 문제점을 발견하면 선임, 동료들과 소통을 통해 즉각적으로 해결하려 합니다. 또한, 경청을 잘하는 사람입니다. 업무를 해결하는데 있어 자신의 생각과 방식만을 고집하기보다 같이 고민하고 상대방의 의견을 수용하며 신뢰를 쌓아왔습니다. 맡은 일에 최선을 다해 믿음직한 모습을 보여드리겠습니다.
                       </p>
                        <p>
                            셋째, 숲을 보는 개발자 - 개발은 코딩업무만큼 프로세스에 대해 정확히 이해를 하는 것이 중요하다고 생각합니다. 경영학을 전공하면서 효율적인 의사결정을 하는 방법과 전략적인 경영 프로세스에 대해 학습했습니다. 그로 인해 업무와 프로세스에 대한 이해가 남들보다 빨라질 수 있었고 팀원들에게 프로세스를 이해시키는 데 도움을 주었습니다. 경영 업무 프로세스와 프로그래밍을 동시에 이해할 수 있어 업무를 진행하는데 좀 더 넓고 다양한 관점에서 바라볼 수 있습니다. 이런 장점을 살려 회사 업무에 대해서도 넓은 시각으로 바라볼 수 있는 사람이 되겠습니다.
                       </p>
                    </div>
                </div>
                <div>
                    <div className='introTitle'>
                        <span onClick={titleOnclickEvt}  style={{cursor : "pointer"}}>
                            입사 포부
                        </span>
                        <FontAwesomeIcon icon={faArrowDown} size='sm' style={{paddingLeft : 5, paddingTop : 5}}/>
                    </div>
                    <div className='introContent'>
                        <p>
                            상속성이라는 특징을 가진 개발자가되겠습니다. 객체지향 언어의 특징 중엔 이미 정의된 상위 클래스의 모든 속성과 연산을 하위 클래스가 물려받는 상속성이라는 특징이 있습니다. 상속성을 이용하면 하위 클래스는 상위 클래스의 모든 속성과 연산을 클래스 내에서 다시 정의하지 않고서도 즉시 자신의 속성으로 사용할 수 있습니다. 저 또한 이러한 특징을 갖고 선임분들의 가르침과 새로운 기술, 좋은 영향들을 모두 상속받아 제 것으로 만드는 일원이 되겠습니다. 한번 받은 것들은 다시 지적받을 일 없는 후임자가 되어 팀에 빠르게 적응하고 항상 도움이 되도록 노력할 것이고 늘 겸손한 자세로 선임분들에게 가르침을 받고 후임자에게 친절하게 가르쳐주는 개발자가 되겠습니다.
                        </p>
                        <p>
                            새로운 경험에 도전하는 개발자 주어진 일은 끝까지 최선을 다하며 달려왔습니다. 웹 개발 과정을 하면서도 최고가 되기보다 최선을 다하기 위해 노력했습니다. 1년의 실무 경험을 통해 사용자와 서비스 간의 상호작용이 이루어지는 필드를 개발하여 제공하는 일을 하는 것이 흥미롭고 개발자로서 행복함을 느껴 더 발전하기위해 사용해 보지 못한 기술들을 스스로 공부하며 신입의 마인드로 새롭게 노력하고 있습니다. 도전을 좋아하며 주어진 업무만이 아닌 새로운 기술과 요구사항에도 최선을 다하고 매사에 즐기는 개발자입니다. 열정과 어떤 어려움에도 도전하는 정신, 젊은 패기로 중요한 역할을 하는 인재가 되고 싶습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Intro;