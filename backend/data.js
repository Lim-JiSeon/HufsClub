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
        isAdmin: true,
        },
    {
        username: '홍길동',
        email: 'gdhong@naver.com',
        studentId: 123405904,
        major: '컴퓨터전자시스템공학부',
        major2: '통계학부',
        password: bcrypt.hashSync('123456'),
        isEnroll: '졸업',
        isPresident: '오징어심리연구',
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
        activity: '스터디 및 튜터링, 세미나, 프로젝트, 총회',
        recruit: {
            period: '2월말에서 3월초, 8월 말에서 9월초',
            way: '구글폼으로 지원서 제출 후 면접', 
            applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdiX396mdgUn6la6y8mJKevGjkxMaxzi7xSu8-CGNQdeSVbyw/closedform',
            num: '변동', //모집인원
        },
        room: '공학관 316호',
        logoUrl: '/images/pnp.png', // 250px x 250px
        imageUrl: ['/images/pnp_people.jpg'],
    },
    {
        name: '별하',
        field: '문화',
        topic: ['#뮤지컬'],
        activity: 
`뮤지컬 관람, 뮤지컬 연습 및 공연
분야: 배우팀, 무대팀, 소품팀, 조연출`,
        recruit: {
            period: '2023년 7월 30일 ~ 2023년 9월 2일',
            way: '구글폼으로 지원',
            applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSerMpfHLwu1BYjFI19hXKH9Sd3rzz3vJEihUsxF0ijrUUlwhQ/viewform?usp=sf_link',
            num: 
`배우팀 : 0명 (배우팀은 남자 배우만 모집합니다)
* 배우팀의 경우 면접시 짧은 지정대사 연기+자유곡이 있습니다!
* 자유곡은 1절분량이며 mr은 면접전까지 betteristobow@gmail.com 👈로 보내주세요!
* 무대팀 : 0명 (조명, 음향, 무대 디자인 등)
소품팀 : 0명 (무대 소품& 배우 의상)
조연출 : 1명`, 
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
        activity: 
`📈 알고리즘 스터디
알고리즘 사이트를 사용해 문제를 선정한 뒤 문제를 해결합니다.
정기적으로 각자의 문제풀이를 공유하는 시간을 가짐으로써 알고리즘 문제해결 능력을 키울 수 있습니다.

💻 자유로운 일반 스터디
원하는 스터디를 진행할 수 있는 토대를 마련해 드릴 수 있습니다.
스터디 주제를 정하여 신청하시면, 팀원끼리 자율적으로 스터디를 진행합니다.
현재 개설예정인 일반 스터디를 소개해드리겠습니다. (3명 미만 지원시 진행되지 않을 수 있음)
이것들 외에도 다른 분야나 주제를 선정해 신청할 수 있습니다.

🚀 현재 개설예정 스터디 - 글로벌캠퍼스
● 파이썬 세미나 (초심자 대상 파이썬 강의 진행)
● 알고리즘 스터디
● C언어 스터디
● Java 입문 스터디
● 데이터사이언스 스터디 (머신러닝), 기초 파이썬 문법 숙지자
● 웹개발 스터디 (노베이스 대상 입문)

🧑👧 프로젝트 팀원 모집
현재 개설 프로젝트 : 웹개발 프로젝트 (웹개발 경험 있는 분 지원 가능)
원하시는 프로젝트가 있을 경우 팀원 모집을 도와드립니다.`,
        recruit: {
            period: '2월 말 / 8월 4일 (금)부터 8월 17일 (목) 오후 11:59까지',
            way: '구글폼으로 지원서 제출 후 면접', 
            num: '변동', 
        },
        logoUrl: '/images/그누빌.png', // 250px x 250px
    },
    {
        name: '피버스',
        field: '스포츠',
        topic: ['#농구'],
        activity:
`▪️23-2 활동 계획▪️
1. 농구 대회 참가
2. 월, 목(18:30~21:00) 정기 훈련
3. 타학교와의 교류전
4. 주말 연습경기
5. 3X3 농구대회 개최`,
        recruit: {
            period: '8월 1일 ~ 8월 25일',
            way: `구글폼으로 지원서 제출 후 입부 테스트`,
            applyUrl: 'https://forms.gle/q6YGLEijTdurV3G8A',
            num: '변동', //모집인원 ex)23, 변동
        },
        logoUrl: '/images/피버스.png', // 250 x 250
    },
  ],
};

export default data;