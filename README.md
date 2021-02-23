# reactNative

---

# insta clone coding 도전

## 프론트앤드 react-native

---

### 1주차 ver1

- 인스타 프로필을 맡았고 가장 먼저 전체적인 레이아웃을 만드려고 함 (다른 협업자들은 홈/로그인 창)
- react native를 아직 잘 모르는 상태이기 때문에 라이브러리 사용보다는 기본적인 <View> <Text>.. 등만 사용
- 페이지가 넘어가는 것은 구현하지 않고 아이콘만 보여주기 식으로 넣음

### 2주차 ver2

- 전체적인 라이브러리 다운로드, 주요 라이브러리는 react-navigation
- navigation을 사용하여 위, 아래 nav를 추가함
- navigation을 사용하여 버튼을 누르면 페이지가 넘어가도록 기능을 추가함
- 기능이 없지만 눈에 보이는 부분은 대부분 완성
- modal을 사용했지만 아직 js 개념이 부족하여 연결은 아직 못함.

### 3주차 ver3

- madal 연결함. header에 있는 버튼을 누르면 modal 가장 위에 뜨게 됨
- component를 세분화함
- state랑 props 개념 읽어보기만 했지 직접 적용시키는 걸 못해봐서 이번에 리팩토링하면서 해봄
- react-navigation을 사용해서 screen component에 props를 전달해주는 법을 몰랐는데 이번에 알게됨..


### 4주차 ver4
- modal 두개 다 완성
- 내가 올린 사진, 태그 된 사진 component 모두 만듦, 아이콘 버튼 클릭해서 컴포넌트를 변경해서 보여줄 수 있음 
- 게시물 재사용할 component만들고, 전체 게시물 보는 component를 네비게이션 stack에 삽입함 

### 5주차 ver5
- 팔로워, 팔로잉 Screen에 react-native-tab-view/material-top을 적용해서 탭으로 팔로우-> 팔로잉, 팔로잉-> 팔로우 이동할 수 있도록 함 
- 홈 화면과 프로필 화면 합침 : 하나의 탭에 각각 component가 지정되어 있는 형태 (Home, Profile, Magnifier..)
- 특정 화면이 띄워질 때 TabBar가 보여지지 않도록 해야 함. (아직 완성 못함)
