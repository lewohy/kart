# kart-util

## 다운로드

[여기](https://drive.google.com/file/d/13K9DUtovtpBITO59GXGkOrNGLyfywJEp/view?usp=sharing)에서 받을 수 있습니다.

[바이러스 검사 결과](https://www.virustotal.com/gui/file/e336325e1b70379fa2ac1f88cf23c83ce7edd350ef13f1fdd418324a10fb1868/detection)

만약 실행이 안된다면 [여기](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)에서 **vc_redist.x64.exe**을 받아 설치해 주세요.

다운로드 후 kart-util 파일을 관리자 권한으로 실행 해 주세요.   
(관리자 권한으로 실행하지 않을 경우 게임 도중에 키 인식을 하지 못합니다.)

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/png1.png) 

### 미리 만들어진 스타일 다운로드

[여기](https://drive.google.com/file/d/1SkoZzhNziQ7OKDXV5EVAhMgFDExuPmHM/view?usp=sharing)에서 받을 수 있습니다.   



## 기능

### 키 뷰어 (Key Viewer)

주 기능입니다. 실행하시면 키뷰어가 메인으로 뜹니다.

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/gif1.gif)   

누른 키를 보여주는 기능입니다.

#### 설정 창 열기

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/gif2.gif)   

설정 창에서 추가 기능들을 활성화, 비활성화 할 수 있으며 새로운 키 등록과 창 크기를 설정할 수 있습니다.

#### 키 추가하기

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/gif3.gif)

설정창의 KEY VIEWER 탭에서 + 버튼으로 새 키를 등록할 수 있습니다.   
등록 후 기본적으로 비활성화상태 입니다. 오른쪽의 스위치로 활성화 해야 키뷰어에 보입니다.   

### 키 흔적 보기 (Key Trace Viewer)

누른 키의 흔적을 보여주는 기능입니다. 리듬게임의 막대기가 반대로 움직인다고 생각하시면 됩니다.   
   
기술을 보여줄 때 커맨드를 키뷰어보다 좋은 방식으로 보여줄 수 있도록 하기 위해 만들어봤습니다.   
   
설정창의 KEY TRACE VIEWER 탭에서 활성화 시킬 수 있습니다.

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/gif4.gif) 

#### 예시

- 연타 드리프트   
![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/gif5.gif)  
   
- 고속 연타 드리프트    
![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/gif6.gif)   
   
(사실 연타 잘 못합니다.)

#### 막대 속도 조절하기

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/gif7.gif)   

창의 넓이, 높이도 설정 가능합니다.  

키뷰어 설정과 마찬가지로 +버튼을 눌러 새 키를 등록할 수 있습니다.

### 팀 점수 보기 (Team Score Viewer)

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/gif8.gif)   

4:4 팀전에서만 작동하는 실시간 팀 점수 계산기 입니다.
   
왼쪽에 블루팀 점수, 가운데 등수, 오른쪽에 레드팀 점수가 표시됩니다.   
   
예를들어 3번째 칸이 파란색이 되었다면 3등까지 완주하고 4등부터 리타이어일 때 블루팀이 승리한다는 표시입니다.   

## 커스터마이징

거의 모든 부분이 css를 사용해 커스터마이징이 가능합니다.

css 문법을 알아야 쉽게 사용하실 수 있습니다.

### 공통

#### 배경

    body {
        // ...
    }

### 키뷰어 커스터마이징

kart-util/settings 폴더 내의 key-viewer.css 파일을 수정해서 설정할 수 있습니다.

#### 설정 버튼

    #setting-button {
        // ...
    }

#### 종료 버튼

    #exit-button {
        // ...
    }
   
#### 모든 키의 기본 상태

    .key-view {
        // ...
    }

#### 특정 키의 기본 상태

예를 들어 KEY VIEWER탭에서 등록한 키의 이름이 **left-shift**일 경우

    #left-shift.key-view {
        // ...
    }

#### 모든 키의 눌린 상태

    .key-view-pressed {
        // ...
    }

#### 특정 키의 눌린 상태

예를 들어 KEY VIEWER탭에서 등록한 키의 이름이 **left-shift**일 경우

    #left-shift.key-view-pressed {
        // ...
    }

#### 특정 키 안에 글자를 추가할 경우

가상 선택자를 이용해 해당 키 뒤에 새 요소를 추가하는 방식을 사용합니다.

먼저 아래 내용을 추가합니다.

    .key-view::after {
        width: auto;
        height: auto;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        display: flex;
        position: absolute;
    }

그 후 예를 들어 **left-shift**라는 이름의 키에 **DRIFT**라는 글자를 추가하고 싶을 경우

    #left-shift::after {
        content: "DRIFT";
    }

와 같이 하면 됩니다.

글자의 위치, 크기, 색상 등 따로 지정할 수도 있습니다.

### 키 흔적 커스터마이징

kart-util/settings 폴더 내의 key-trace-viewer.css 파일을 수정해서 설정할 수 있습니다.

해당 창은 아래 모양의 구조를 가집니다.

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/png2.png)   

따라서 아래처럼 css 선택자를 이용해 수정하시면 됩니다.

#### 막대 나오는 곳의 기본 상태

    .trace-key {
        // ...
    }

#### 특정 키의 기본 상태

예를 들어 KEY TRACE VIEWER탭에서 등록한 키의 이름이 **left-shift**일 경우

    #left-shift.trace-key {
        // ...
    }

#### 막대가 눌린 곳의 눌린 상태

    .trace-key-pressed {
        background-color: rgba(120, 120, 120, 0.5);
    }

#### 특정 키의 눌린 상태

예를 들어 KEY TRACE VIEWER탭에서 등록한 키의 이름이 **left-shift**일 경우

    #left-shift.trace-key-pressed {
        // ...
    }

#### 막대가 지나가는 공간

    .trace-frame {
        // ...
    }

#### 특정 키의 막대가 지나가는 공간

예를 들어 KEY TRACE VIEWER탭에서 등록한 키의 이름이 **left-shift**일 경우

    #left-shift-frame {
        // ...
    }

#### 막대

    .trace {
        // ...
    }

#### 특정 키의 막대

예를 들어 KEY TRACE VIEWER탭에서 등록한 키의 이름이 **left-shift**일 경우

    #left-shift-trace {
        // ...
    }

### 팀 점수 커스터마이징

kart-util/settings 폴더 내의 team-score-viewer.css 파일을 수정해서 설정할 수 있습니다.

해당 창은 아래 모양의 구조를 가집니다.

![](https://raw.githubusercontent.com/lewohy/kart/master/res/images/png3.png)   

.ranking-item 영역은 블루팀이 이기는 경우 두 번째 그림처럼, 레드팀이 이기는 경우 세 번째 그림처럼 클래스가 지정됩니다.

따라서 아래처럼 css 선택자를 이용해 수정하시면 됩니다.

#### 각각의 아이템

    .ranking-item {
        // ...
    }

#### 등수 표시 구역

    .rank-view {
        // ...
    }

#### 각 팀 점수 표시 구역

    .blue-score-view {
        // 블루팀 점수 표시 구역
    }

    .red-score-view {
        // 레드팀 점수 표시 구역
    }

#### 특정 팀이 이기는 아이템 선택

    .blue-win {
        // ...
    }

    .red-win {
        // ...
    }
