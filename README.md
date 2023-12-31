# ⏰ stretch-alarm
* vscode extension program


## 목차

- [Motivation](#introduction)
- [Description](#installation)
- [Usage](#usage)

## Motivation <a name="introduction"></a>

* 많은 사람들이 vscode를 사용을 하는데 하다보면 장시간 스트레칭도 안하고 작업을 진행해 스트레칭을 권장할 겸 만들게 되었다.

## Description <a name="installation"></a>

* vscode의 확장 프로그램으로 내가 원하는 interval을 설정해 알림을 주는 시스템

1. 시작시 알림을 주어 프로그램이 실행 됐다는 것을 알려준다.  
![시작알림](./image/real_start.png)

2. 본인이 지정한 시간이 지나면 해당 알림이 온다. (알림의 내용은 3가지중에서 랜덤으로 옵니다)  
![스트레칭](./image/result.png)  
![스트레칭](./image/result2.png)  
![스트레칭](./image/result3.png)  

3. 예를 눌렀을 시 (체조 동영상 url로 이동할 수 있다)   
![예](./image/result_yes.png) 

4. 아니오를 눌렀을 시  
![아니오](./image/result_no.png)  

* 프로그램이 실행된 상태에서 다시 시작시 종료가 된다.
![종료](./image/down.png)   
## Usage <a name="usage"></a>

1. 다운받는 방법
    * vscode extensions에 `stretch-alarm`이라고 검색하고 install한 후 command palette(F1키)에서 `stretching`을 입력하면 사용해볼 수 있다.    
    ![다운](./image/alarm.png)  
    * [Marketplace](https://marketplace.visualstudio.com/items?itemName=sobogil.stretch-alarm&ssr=false#overview)에서 직접 다운 받아서 사용해 볼 수도 있다.
      `.vsix`파일을 다운 받았으면 extensions에 들어가서  `···`을 누른다음 `install from VSIX...`를 클릭해 다운받은 파일을 열면 된다.

2. 알람시간 지정 방법
![시간지정](./image/interval.png)  
`manage`(좌측 하단 톱니바퀴모양) -> `setting`-> 검색창에 `interval` -> `Extensions` -> `strtching alarm`에서 알람 시간을 본인이 지정 할 수 있다.(0.1분도 설정가능)
(프로그램 시작전에 설정해 주세요)

## Reference
https://github.com/microsoft/vscode-generator-code.git   
https://www.youtube.com/watch?v=q5V4T3o3CXE  

## Requirement
vscode가 최신버전이 아니면 실행이 안될 수도 있습니다.
## LICENSE
[MIT](LICENSE)  


