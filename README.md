안녕하세요 신입 웹 퍼블리셔를 지망하는 정명기의 포트폴리오입니다.

컨셉은 Script와 Data의 세계는 무한히 넓고 광할하며, 그 안에서 내가 할 수 있는 것은 정말 작다는 의미에서 우주로 잡았습니다.

근거로는 JavaScript와 그에 파생하는 프레임워크, 라이브러리 등을 강력하게 다룰 수록, 할 수 있는 것들은 무한히 많아지고, 그것이 마치 제가 우주에서 먼지 한 점에 가까운 존재라는 인식을 받았기 때문입니다.

모든 section layout은 height 100vh이며, 각 섹션마다 컨셉이 다른 animation이 들어가 있습니다.

# intro section

시작은 pre-loader 이후에 Hello World 애니메이션과 함께 진행되며, 애니메이션이 끝나면, 커튼이 열리면서 우주의 세계가 펼쳐집니다.

동시에 intro-section elements들이 순차적으로 모습을 보이게 되며, 이 요소들은 parallax 효과가 적용되어 있습니다.

# 2th section

About-me section이며, 저에 대한 간단한 자기소개를 담고 있습니다.

GSAP를 이용한 scroll trigger로, 사용자 scroll에 감응하여 trigger가 발동되어, .on이라는 class를 부여하고, javascript setTimeout 메서드를 결합해 css animation keyframes로 animation 요소들을 순차적으로 진행시킵니다.


# 3th section

skill-section이며, 웹 퍼블리싱에 필요한 디자인 툴과 코드 관련 언어에 대한 저 자신을 평가하는 task 능력을 퍼센테이지로 반환하여 나타내는 섹션입니다.

행성을 클릭하면 내부 행성을 진입하며, #in-the-planet 안에는 또 하나의 세계가 펼쳐지는 컨셉입니다.

여기서 design과 coding으로 버튼이 나뉘게 되며, 각 버튼을 클릭 시, 그 버튼에 맞는 task의 card들이 나열됩니다.

이 요소는 swipe가 가능하며, 클릭 시, argument UI 프레임워크를 활용한 SCI-FI 형태의 DOCUMENTS 모양에서 제가 각 skill에 대해 역량을 평가한 근거와 저의 생각을 적어 놓았습니다.

Warp out btn을 클릭하면 다시 행성을 나와 우주로 돌아오게 됩니다.

여기서 vh에 대한 반응형과 크로스 브라우징에 대해 겪은 문제점들과 skill-section 내에서 about coding과 design을 나누는 과정에서 겪은 문제점들이 있는데, 이는 각각

https://velog.io/@gosoomdoce/%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%8F%99%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95%EA%B3%BC-%EB%AA%A8%EB%B0%94%EC%9D%BC-vh%EB%A5%BC-%EA%B3%A0%EB%A0%A4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%8F%99-%EB%B0%A9%EB%B2%95-%EB%AA%A8%EB%B0%94%EC%9D%BC-vh%EB%A5%BC-%EA%B3%A0%EB%A0%A4%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%EC%97%90%EC%84%9C-%ED%95%B4%EA%B2%B0%ED%95%9C-%EB%B0%A9%EB%B2%95

https://velog.io/@gosoomdoce/%ED%8F%AC%ED%8F%B4-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%A4%91-%EB%AC%B8%EC%A0%9C-%EB%B0%9C%EC%83%9D

개인 velog에 기술하였습니다.

# 4th section

porjects-section이며, 포트폴리오 이외에 제가 진행한 project들을 정리해 놓은 section입니다.

00년도 게임에서 영감을 받은 animation을 제작하였으며, Click btn을 누르면 마치 옛날 게임 title 화면처럼 프로젝트들을 선택할 수 있게 됩니다.

그 후, 맞는 프로젝트가 선택되면 양 옆에서 프로젝트에 대한 개요 설명과 시각적인 swipe할 수 있는 img 자료들이 나타나게 되고,

more info btn을 클릭하시면, 이 프로젝트를 진행하면서 겪은 문제점들, 이걸 토대로 제 skill이 어떤 식으로 발전하였는지 등을 자세하게 기술하였습니다.

# 5th section

to-study section입니다.

제가 현재 공부하고 있는 내용들과 앞으로 공부할 내용의 서순 등을 근거와 함께 서술하는 section입니다.

현재 제가 무엇을 위해 무엇을 공부하고 있는지, 이 이후엔 무엇을 공부할 지 적어놓는 이유는, 제가 어떤 형태로 성장하고, 제가 추구하는게 무엇인지 알려드리기 위함입니다.

# 6th section

마무리 section입니다. 포트폴리오의 마무리를 암시하며, lets work together와 마무리 인삿말을 진행합니다.

# last section

Contact section 입니다.

마무리 섹션 이후에, position sticky과 음수 margin을 결합하여, 아래에서 위로 걷히는 효과를 주어 저의 사진과 연락처, 그리고 email-form을 formspree API를 연동해서 Grid를 활용하여 만들어 놓았습니다.

제가 data와 API연동 개념을 아직 공부하지 않았는데요, search를 통해 필요한 정보만 공부해서 formspree를 적용하는 과정은

https://velog.io/@gosoomdoce/formspree%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

이 velog에 기술되어 있습니다.

--

이상, 포트폴리오를 봐주셔서 감사합니다.


