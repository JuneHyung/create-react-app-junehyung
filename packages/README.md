# 🐳 create-react-app-junehyung

## 🌏 Install

```cmd
npx create-react-app-junehyung [project-name]
```

> ❗ 주의
>
> node-sass 오류가 난다면, node-sass 버전 확인.
>
> 📘 [npm사이트 - node-sass](https://www.npmjs.com/package/node-sass)
<br/>

## 🌏 Change logs

### 👉 v0.1.7

* install `chalk`, `semver`
* install 시 Node version 체크 (20.0.0 이상)
* PATCH버전 (0.1.0 ~ 0.1.7) 해결사항
  * 배포 후 라이브러리 버전 문제 해결
  * `프로젝트 이름 공백체크 -> Node 버전 체크 -> 동일한 프로젝트명` 체크 순서로 동작하도록 수정.
