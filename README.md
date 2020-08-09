# YangTube     

#### 유튜브 동영상 플레이어 페이지 클론 코딩프로젝트 YangTube입니다.
    


## 기술 스택
* ### React.js    
이 프로젝트의 목표는 유튜브 동영상 플레이 페이지의 View와 UI 구현입니다.    
따라서 해당 목표에 가장 적합한 SPA 라이브러리인 React.js를 선택했습니다.    
    
* ### react-router-dom    
각 영상별 페이지 개별 관리, 쿼리스트링을 통한 동영상 시작 시점 지정, 잘못된 입력을 받을 Not Found 페이지 구현을 위해 사용하였습니다.

* ### Hangul.js    
가상 키보드 파트에 한글 조합 및 분리 기능을 구현하기 위해 사용한 라이브러리입니다.    
    



## 구현 기능    
    
### 1. 반응형 웹 기능    
* pc (1024px ~)
* 타블렛 (767 ~ 1023px)
* 모바일 (~ 766px)<br/>
    

    

### 2. 헤더     
* 메뉴 버튼 및 로고
#### &nbsp;&nbsp;- 메뉴 버튼의 경우 메뉴 가이드바 토글 기능이, 로고의 경우 클릭 시 홈인 /#/home으로 이동하는 기능을 구현했습니다. 로고 우측에는 현재 설정된 언어가 표시되도록 하였습니다.    
    
* 가상 키보드
#### &nbsp;&nbsp;- 검색 기능은 구현하지 않았으나 검색어 입력 파트 내부의 키보드 아이콘을 클릭 시 가상 키보드를 이용할 수 있습니다.    
    
* 우상단 버튼
#### &nbsp;&nbsp;- 가장 우측에 있는 유저 아이콘 이외에는 팝업 기능만 구현하였고, 내부적 기능은 구현하지 않았습니다.<br/>
    
 - 2-1. 유저 아이콘 팝업 내부 기능    
> ** 아래 두 기능 이외에는 형태만 구현했습니다. 위치 선택 기능의 경우 체크 변경 기능만 구현했습니다.    
#### &nbsp;&nbsp;&nbsp;&nbsp; - 어두운 모드: 배경은 어두운 색으로, 글자는 밝은 색으로 전환할 수 있는 기능입니다.    
#### &nbsp;&nbsp;&nbsp;&nbsp; - 언어 변경: 한국어 / 영어 / 일본어 셋 중 하나로 설정 가능하며, 사용자가 접속한 국가에 따라 초기 언어가 세팅되도록 하였습니다. (한국 - 한국어, 일본 - 일본어, 그 외 - 영어)    
    
    
    

### 3. 메뉴 가이드 바    
* 아이콘이 빨간색인 부분만 <a>태그 기능이 구현되어 있습니다.    
* UX상 모바일 환경에서는 생성되지 않습니다.    
    
    
    

### 4. 다음 영상 / 추천 영상 네비게이션    
* 자동재생 토글 스위치
#### &nbsp;&nbsp;- 각 스위치는 전부 동기화 되어있어 하나를 클릭하여 on/off 를 전환하면 나머지 스위치도 전부 영향을 받습니다. 디폴트값은 on입니다.    
    
* 타블렛 모드, 극장 모드 등 모드에 따라 네비게이션 위치 이동
#### &nbsp;&nbsp;- pc환경 및 기본 모드일 시 메인 프레임 우측에 위치    
#### &nbsp;&nbsp;- pc환경 및 극장 모드일 시 영상 프레임 하단 및 제목/댓글란 우측에 위치    
#### &nbsp;&nbsp;- 타블렛 및 모바일 환경일 시 제목과 댓글란 사이에 위치    
    
* 다음 영상    
#### &nbsp;&nbsp;- DB상 다음 인덱스에 해당하는 영상입니다. 자동재생이 on으로 설정된 경우 이 영상 페이지로 이동합니다.    
    
* 추천 영상    
#### &nbsp;&nbsp;- DB상 현재 영상과 다음 영상을 제외한 나머지 6개의 영상입니다. 영상 배치가 단조로워 보이지 않도록 첫 렌더링 시 shuffle 후 나열하도록 설정하였습니다. 또한 추천 영상이 6개 뿐이기 때문에 너무 짧아보일 수 있어 같은 영상을 한번 더 복사 뒤 suffle배치하도록 하였습니다.    
    
* 조회수, 업로드 시각 파싱(parsing) 기능    
#### &nbsp;&nbsp;- DB에 임의로 설정한 조회수 및 타임스탬프 데이터를 파싱하여, 조회수의 경우 가장 큰 단위의 숫자가 표시되도록 하였으며 타임스탬프도 현재 시각까지의 차이를 계산하여 표기하도록 하였습니다. 수 표기가 다른 영어권의 경우도 고려하여 표기했습니다.    
    
    
    
    
### 5. 동영상 플레이어 파트    
> ** 동영상 프레임을 클릭하여 포커스를 주었을 때만 단축키가 작동합니다.    
    
* 재생 / 일시정지 / 다시 보기 기능 [단축키: spacebar]
* 다음 동영상 기능 [단축키: shift + n키]
* 음량 조절 기능 - 음소거 토글, 음량 조절 바로 조절 가능 [단축키: 음소거 토글(m), 음량 조절(↑/↓ 방향키, 5% 단위로 조절)]
* 현재 재생 시간 / 총 영상 길이 time display 기능
* 현재 재생 시간을 빨간색으로 표시하는 영상 진행 바 구현
* 재생 시간 이동 기능 [마우스 클릭 혹은 드래그로 이동, 단축키: (↑/↓ 방향키, 5초 단위로 이동)]
* 극장 모드 / 기본 모드 토글 기능 [단축키: t키]
* 풀스크린 모드 토글 기능 [단축키: f키]
* 설정 버튼, 5-1 내부 기능 설명 참조
* 동영상 컨텍스트 메뉴 (마우스 오른쪽 클릭 시 표시), 5-2 내부 기능 설명 참조    
    
 - 5-1. 설정 버튼 팝업 내부 기능
#### &nbsp;&nbsp;&nbsp;&nbsp; - 자동 재생 토글 스위치. 추천영상 네비게이션의 스위치와 동기화되어 있습니다.    
#### &nbsp;&nbsp;&nbsp;&nbsp; - 재생 속도 변경 기능. 0.5 ~ 2배 사이로 조정할 수 있습니다.    
    
 - 5-2. 컨텍스트 메뉴 내부 기능
#### &nbsp;&nbsp;&nbsp;&nbsp; - 연속 재생 기능. 디폴트는 off 상태이며 on으로 바꿀 시 영상이 끝나도 멈추지 않고 계속해서 반복 재생됩니다.    
#### &nbsp;&nbsp;&nbsp;&nbsp; - 동영상 URL 복사 기능. 클립보드에 현재 보고있는 영상의 URL이 복사됩니다.    
#### &nbsp;&nbsp;&nbsp;&nbsp; - 현재 시간 동영상 URL 복사 기능. 이 기능으로 복사할 시 현재 시청 중인 시간대부터 영상이 재생 가능한 URL이 복사됩니다.<br/>
    
    


### 6. 동영상 제목 파트    
> ** 아래 두 기능 이외에는 형태만 구현하였습니다.    
* 조회수 파싱(parsing) 기능
#### &nbsp;&nbsp;- DB에 임의로 지정한 조회수를 파싱하여 pc 환경일 땐 세 자리마다 쉼표를 추가하여 가독성을 높였으며, 타블렛 환경부터는 가장 큰 단위로 축약하여 표기합니다.    
    
* 날짜 파싱(parsing) 기능
#### &nbsp;&nbsp;- DB에 임의로 지정한 타임스탬프를 파싱하여 연월일을 표기하는 기능 구현    
    
* 좋아요/싫어요 기능
#### &nbsp;&nbsp;- 클릭 시 색상 변경. 좋아요 / 싫어요 아래의 직선은 좋아요 / 싫어요의 비율을 나타내며 마우스 커서 hover 시 정확한 수치를 표시합니다.    
    
    
    
    
### 7. 동영상 설명 파트    
> ** 아래 두 기능 이외에는 형태만 구현하였습니다.    
* 구독자 수 파싱(parsing) 기능
#### &nbsp;&nbsp;- DB에 임의로 지정한 구독자 수를 파싱하여 가장 큰 단위로 축약 표시하는 기능입니다.    
    
* 설명란 더보기/간략히 토글 기능
#### &nbsp;&nbsp;- 보이지 않는 div에 전체 텍스트를 넣어 실제 height를 구해둔 뒤 3줄 초과일 경우 넘치는 부분은 생략하여 더보기/간략히로 미리 구해둔 height만큼 높이를 확장시켜 펼쳐보기/접기 기능을 구현했습니다.    
    
    

    
### 8. 댓글 파트    
* 댓글 정렬 기능
#### &nbsp;&nbsp;- 인기 순은 좋아요 수를 내림차순으로, 최근 날짜순은 오름차순으로 댓글을 재정렬하는 기능입니다.    
    
* 유저 아이콘 기능
#### &nbsp;&nbsp;- DB에 임의로 지정한 사용자 이름의 첫글자를 따서 아이콘을 만들었습니다.    
    
* 타임스탬프 및 좋아요 수 파싱 기능
#### &nbsp;&nbsp;- DB에 임의로 지정한 타임스탬프 및 좋아요 수를 파싱하여 가장 큰 단위로 축약 표시하는 기능입니다.    
    
* 영상 시간 점프 기능
#### &nbsp;&nbsp;- 댓글 문자열을 파싱하여 00:12, 01:12 등 영상 시간 표시 형식으로 기입한 문자열의 경우 따로 파싱하여 해당 시간으로 재생 시간을 옮기는 기능을 구현하였습니다.    
    
* 댓글 자세히 보기/간략히 토글 기능
#### &nbsp;&nbsp;- 댓글이 4줄을 초과하는 경우 초과분은 생략하고 펼쳐보기/접기를 할 수 있는 기능을 구현하였습니다.<br/>
