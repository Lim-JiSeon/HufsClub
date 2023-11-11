import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
        username: '김철수',
        email: 'cskim@gmail.com',
        studentId: 202201819, 
        major: '컴퓨터공학부',
        major2: '통계학부',
        password: bcrypt.hashSync('123456'),
        isEnroll: '재학',
        isPresident: 'PnP',
        isAdmin: true,
        like: ['PnP', '그누빌'],
        },
    {
        username: '홍길동',
        email: 'gdhong@naver.com',
        studentId: 123405904,
        major: '컴퓨터전자시스템공학부',
        major2: '통계학부',
        password: bcrypt.hashSync('123456'),
        isEnroll: '졸업',
        isPresident: '별하',
        like: ['PnP', '피버스'],
    },
  ],
  clubs: [
    {
        name: 'PnP',
        field: '학술',
        topic: ['#Web', '#알고리즘', '#App', '#AI', '#Data', '#게임', '#보안' ],
        executive: [
            {name: '조윤주', email: 'enqu724@gmail.com', role: '학회장'},
        ],
        activity: [
            {imageUrl: '/images/pnp_activity1.jpg', text: 
`❓PnP 는 어떤 학회인가요?
❣️PnP는 Passion & Pioneer, "열정을 가진 자들이 모여 세상을 개척한다." 는 뜻으로 1999년 설립된 컴퓨터공학부 소속 학술 학회입니다.
컴퓨터공학부 학부생들이 개발자로 성장하기 위해 자신의 목표를 찾고 같은 목표를 가지고 있는 학우들과 함께 학습 및 프로젝트를 기획하고 완성해나가고 있습니다.`},
            {imageUrl: '/images/pnp_activity2.jpg', text: 
`❓어떻게 활동하나요?
❣️대면과 비대면을 적절히 분배하여 진행할 예정입니다.
❣️학회 활동은 분야별 소규모 팀을 구성하여 진행합니다. 알고리즘/Web/App/Al/Data/게임/보안 7가지 분야로 나뉘고, 팀원들은 분야 내에서 진행되는 스터디팀(필수)에서 기본 역량을 갖추고, 프로젝트 팀에서 추가적으로 활동할 수 있습니다. 스터디를 참여하지 않았더라도 실력이 있다고 판단되면 바로 프로젝트 팀으로 활동할 수 있습니다.
📢 올해부터 프로젝트 팀은 분야 내에서 나누어지는 것이 아닌, 역할(프론트엔드, 백엔드, 데이터 등)을 사전에 조사받아 팀을 빌딩해드릴 예정입니다!`},
            {imageUrl: '/images/pnp_activity3.jpg', text: 
`❣️주기적으로 학회원 모두가 참석하여 정기 회의를 진행합니다. 정기회의를 통해 각 팀별로 서로의 활동을 발표하고, 다른 팀과 정보를 공유합니다.
`},
            {imageUrl: '/images/pnp_activity4.jpg', text: 
`❓어떤 활동을 했나요
❣️PnP 공식 홈페이지 또는 아래 홍보 자료를 확인해주세요!
❣️PnP 공식 홈페이지 : https://www.hufspnp.com`}
        ],
        recruit: {
            period: '2월말에서 3월초, 8월 말에서 9월초',
            way: '구글폼으로 지원서 제출 후 면접', 
            applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdiX396mdgUn6la6y8mJKevGjkxMaxzi7xSu8-CGNQdeSVbyw/closedform',
            num: '변동', //모집인원
        },
        room: '공학관 316호',
        logoUrl: '/images/pnp.png', // 250px x 250px
    },
    {
        name: '별하',
        field: '문화',
        topic: ['#뮤지컬'],
        activity: [
            {imageUrl: '/images/별하_activity1.png', text: '안녕하세요! 한국외국어대학교 글로벌캠퍼스 중앙 동아리 별하입니다 🌟'},
            {imageUrl: '/images/별하_activity2.png', text: '별하는 2018년 준동아리에서 시작하여 현재 중앙 동아리가 되었습니다.'},
            {imageUrl: '/images/별하_activity3.png', text: 
`1기 '빨래'
2기 '넥스트 투 노멀'
3기 '싱글즈'
4기 '제 1회 뮤지컬 갈라쇼'
7기 '넘버별 발표'
8기 '제 2회 뮤지컬 갈라쇼'를 진행했습니다`},
            {imageUrl: '/images/별하_activity4.png', text: '2023년 1학기는 뮤지컬 맘마미아를 관람했으며, 2학기에는 뮤지컬 공연을 목표로 계획하고 있습니다!'}
        ],
        recruit: {
            period: '~ 2023년 9월 30일',
            way: 
`1. https://open.kakao.com/o/slusuKGf 👈로
이름/학번/학과/지원분야를 보내주세요!

2. 면접은 추후 공지하여 진행합니다 !`,
            applyUrl: 'https://open.kakao.com/o/slusuKGf',
            num: '변동', 
        },
        logoUrl: '/images/별하.jpg', // 250px x 250px
    },
    {
        name: '그누빌',
        field: '학술',
        topic: ['#소프트웨어', '#알고리즘', '#파이썬', '#C언어', '#Java', '#데이터사이언스', '#머신러닝', '#웹개발' ],
        executive: [
            {name: '정찬혁', role: '회장'},
            {name: '정성욱', role: '운영진'},
        ],
        activity: [
            {imageUrl: '/images/그누빌_activity1.png', text: 
`📈 알고리즘 스터디
알고리즘 사이트를 사용해 문제를 선정한 뒤 문제를 해결합니다.
정기적으로 각자의 문제풀이를 공유하는 시간을 가짐으로써 알고리즘 문제해결 능력을 키울 수 있습니다.`},
            {imageUrl: '/images/그누빌_activity2.png', text: 
`💻 자유로운 일반 스터디
원하는 스터디를 진행할 수 있는 토대를 마련해 드릴 수 있습니다.
스터디 주제를 정하여 신청하시면, 팀원끼리 자율적으로 스터디를 진행합니다.
현재 개설예정인 일반 스터디를 소개해드리겠습니다. (3명 미만 지원시 진행되지 않을 수 있음)
이것들 외에도 다른 분야나 주제를 선정해 신청할 수 있습니다.`},
            {imageUrl: '/images/그누빌_activity3.png', text:
`🚀 현재 개설예정 스터디 - 글로벌캠퍼스
● 파이썬 세미나 (초심자 대상 파이썬 강의 진행)
● 알고리즘 스터디
● C언어 스터디
● Java 입문 스터디
● 데이터사이언스 스터디 (머신러닝), 기초 파이썬 문법 숙지자
● 웹개발 스터디 (노베이스 대상 입문)`},
            {text:
`🧑👧 프로젝트 팀원 모집
현재 개설 프로젝트 : 웹개발 프로젝트 (웹개발 경험 있는 분 지원 가능)
원하시는 프로젝트가 있을 경우 팀원 모집을 도와드립니다.`}
        ],
        recruit: {
            period: '2월 말 / 8월 4일 (금)부터 8월 23일(수) 오후 11:59까지',
            way: '구글폼으로 지원서 제출 후 면접', 
            applyUrl: 'https://forms.gle/te7dHpk5LUjHqzLr8',
            num: '변동', 
        },
        logoUrl: '/images/그누빌.png', // 250px x 250px
    },
    {
        name: '피버스',
        field: '스포츠',
        topic: ['#농구'],
        activity: [
            {text: '안녕하세요! 한국외국어대학교 글로벌캠퍼스 중앙 농구동아리 피버스입니다.'},
            {text:
`❗피버스는 🔥클럽 대회 출전을 목적🔥으로 운영되는 동아리로, 농구에 열정이 있고 훈련에 꾸준히 참가할 수 있는 분들께는 문이 활짝 열려있습니다!!!`},
            {text:
`❗운영 상의 어려움으로 취미를 목적으로 하는 일반부는 받고있지 않으니 양해부탁드립니다.`},
            {text:
`▪️23-2 활동 계획▪️
1. 농구 대회 참가
2. 월, 목(18:30~21:00) 정기 훈련
3. 타학교와의 교류전
4. 주말 연습경기
5. 3X3 농구대회 개최`},
        ],
        recruit: {
            period: '8월 1일 ~ 8월 20일',
            way: `구글폼으로 지원서 제출 후 입부 테스트`,
            applyUrl: 'https://forms.gle/q6YGLEijTdurV3G8A',
            num: '변동', //모집인원 ex)23, 변동
        },
        logoUrl: '/images/피버스.png', // 250 x 250
    },
  ],
};

export default data;