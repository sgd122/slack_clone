# slack_clone

슬랙 클론 코딩

# 백그라운드 세팅

0. node 14버전(12나 15도 괜찮음)과 MySQL을 미리 설치하기
1. cd back (멀티캠퍼스 강좌 수강자라면 cd multicampus-back)
2. npm i
3. .env 작성하기(COOKIE_SECRET과 MYSQL_PASSWORD 비밀번호 설정)
4. config/config.json 설정(MYSQL 접속 설정)
5. npx sequelize db:create(스키마 생성)
6. npm run dev했다가 ctrl + c로 끄기(테이블 생성)
7. npx sequelize db:seed:all(기초 데이터 넣기)
8. npm run dev
9. localhost:3095에서 서버 돌아가는 중
10. 백엔드 개발자가 API.md와 typings/db.ts를 남겨둔 상황

# production 환경구성 (front -> backend)

```markdown
front/public -> backend/public/public
front/dist -> backend/public/dist
front/index.html -> backend/public/index.html
front/favicon.ico -> backend/public/favicon.ico
```
