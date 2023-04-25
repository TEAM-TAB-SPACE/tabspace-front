# 탭스페이스
온라인 국비 교육 플랫폼입니다.

## 설명
탭스페이스는 참여 중인 교육 과정에서 LMS가 없어 출석, 미션 등을 수기로 관리하시는 것을 보고 그 문제를 해결하고자 프로젝트를 기획하게 되었습니다. 저희 사이트에서는 수강생에게 사전 신청, 회원가입, 로그인, 대시보드(LMS), 강의 수강 기능을 제공합니다. 또한 수강생을 관리할 수 있는 관리자 사이트가 존재하여 탭스페이스의 매니저는 수강생의 출결 관리, 과제 관리, 강의평가 조회, 사전 신청자 조회 기능을 사용할 수 있습니다.

## WIKI
프로젝트의 정보는 [WIKI](https://github.com/TEAM-TAB-SPACE/tabspace-front/wiki)에서 확인하실 수 있습니다.
- [프로젝트 소개](https://github.com/TEAM-TAB-SPACE/tabspace-front/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%86%8C%EA%B0%9C)
- [페이지 소개](https://github.com/TEAM-TAB-SPACE/tabspace-front/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%86%8C%EA%B0%9C)
- [와이어프레임 / 유저플로우](https://github.com/TEAM-TAB-SPACE/tabspace-front/wiki/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84----%EC%9C%A0%EC%A0%80%ED%94%8C%EB%A1%9C%EC%9A%B0)
- [유저스토리](https://github.com/TEAM-TAB-SPACE/tabspace-front/wiki/%EC%9C%A0%EC%A0%80%EC%8A%A4%ED%86%A0%EB%A6%AC)
- [Git](https://github.com/TEAM-TAB-SPACE/tabspace-front/wiki/Git)

## 디렉토리 구조
```
└─ chatbot              - 랜딩페이지 챗봇 관련 디렉토리
└─ components           - 컴포넌트 관련 디렉토리
   ├─ common            - 유틸성 공통 컴포넌트
   ├─ layout            - 페이지 레이아웃 관련 공통 컴포넌트
   ├─ comment           - 강의 수강장 댓글 기능 관련 컴포넌트
   ├─ dashboard         - 대시보드 페이지 관련 컴포넌트
   ├─ lecture           - 강의 수강장 관련 컴포넌트
   ├─ home              - 랜딩페이지 관련 컴포넌트
└─ config               - 개발 / 운영 환경을 세팅하기 위한 디렉토리
└─ constant             - 상수를 모아둔 디렉토리
└─ hooks                - 커스텀 훅을 모아둔 컴포넌트
└─ mocks                - mock api 관련 디렉토리
└─ pages                - 페이지 라우팅 디렉토리
   ├─ api               - api 관련 (url, axios 인스턴스) 디렉토리
└─ store                - 데이터 가공, 상태 관련 디렉토리
└─ styles               - scss 디렉토리
└─ theme                - antd theme 커스텀 관련 디렉토리
└─ utils                - 유틸 함수 관련 디렉토리
└─ ...
```

## 사용기술
![image](https://user-images.githubusercontent.com/75062526/232316704-7386e258-298f-48b1-b4fe-eac1ffc82ff5.png)
