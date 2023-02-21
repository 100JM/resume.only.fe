
const IntroContent = (r) => {

    return (
        r.introContent && r.introContent.map((c) => {
            if(r.titleKey === c.about_no){
                return <p key={c.sub_no}>{c.contents}</p>
            }
        })
    );
}

export default IntroContent;