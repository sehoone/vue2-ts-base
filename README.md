# vue2-ts-base
> Vue-Base for OpenObject

### 1. 기본 구성 환경 
- Node v16.13.1
- npm 8.1.2
- @vue/cli 4.5
- vue 2.6.11
- eslint 6.7.2


### 2. 개발 환경
- Visual Studio Code 1.63.2
- plugins: ESLint
- plugins: Vetur
- plugins: Vue 3 Snippets
- plugins: Vue VSCode Snippets
- plugins: Git History
- plugins: Prettier
- plugins: PowerShell


### 3. 설치
```sh
git clone ssh://git@git.openobject.net:8824/itswoong/vue2-ts-base.git
cd vue3-base
npm install

```

### 4. 서버실행
- Front Server
```sh
npm run serve
```

### 4. Source Structure

```
- .vscode
  - settings.json : 현재 프로젝트 내에서 사용되는 에디터 설정
├── vue-base        # root
  ├── public        # Contains static assets and index.html
  ├── src           # Source Directory
    ├── assets               # App Assets and Styles
    ├── components           # 공통 컴포넌트
    ├── globals              # global 상수
    ├── layout               # layout
    ├── plugins              # plugin
    ├── libs                 # lib
    ├── router               # routes
    ├── service              # service
       ├── 업무              # 업무별 패키지 생성
          ├── moduls         # store 및 비즈니스 로직
          ├── interface      # type 정의
          ├── api            # api 정의
    ├── views                # views
       ├── 업무              # 업무별 패키지 생성
          ├── components     # 업무별 Components
    ├── utils                # 유틸
    ├── App.vue              # App.vue
    ├── main.js              # main.js
  ├── browserslistrc         # browserslistrc
  ├── .env.*                 # 환경변수
  ├── eslintrc.js            # eslintrc.js
  ├── .gitignore             # gitignore
  ├── babel.config.js        # babel.config.json 
  ├── package.json           # package.json
  ├── package-lock.json      # package-lock.json
  ├── README.md              # README.md
  ├── tsconfig.json          # 타입스크립트 설정
  ├── vue.config.js          # Webpack Config
  ...

```
