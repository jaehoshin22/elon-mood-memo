# 오늘의 기분 메모 — Frontend

기분을 고르고 한 줄 메모를 남기면, 목록과 기분 통계를 보여주는 모바일 웹.

> 수업 실습용 레포입니다. 진행 방법은 [실습안내.md](./실습안내.md)를 먼저 읽어 주세요.

## 실행 방법

Node 20.19 이상이 필요합니다. (`node -v`로 확인)

```
npm ci
cp .env.example .env
npm run dev
```

브라우저에서 `http://localhost:5173` 접속.

- `npm ci`는 `package-lock.json` 그대로 설치합니다. 처음 받을 때는 `npm i` 대신 `npm ci`를 씁니다.
- `cp`가 안 되는 환경(PowerShell)에서는 `.env.example`을 복사해 이름을 `.env`로 바꿔도 됩니다.

## 기술 스택

- Vite + React (JavaScript)
- react-router-dom
- 일반 CSS (`src/index.css`)

## 폴더 구조

```
src/
  api/         API 호출 함수 (지금은 mock)
  mocks/       mock 데이터
  constants/   기분 코드 등 상수
  components/  공통 컴포넌트
  pages/       화면 단위
docs/
  api.md       백엔드 API 명세
```

- import는 `@/` 절대경로를 씁니다. 예: `import { getMemos } from "@/api/memos"`

## 문서

- [CLAUDE.md](./CLAUDE.md): 작업 규칙 (사람과 AI 공통)
- [TODO.md](./TODO.md): 할 일과 인수인계 메모
- [docs/api.md](./docs/api.md): 백엔드 API 명세
