# API 명세 (백엔드 제공)

> 작성·관리: 백엔드-젠슨황
>
> 백엔드가 관리하는 명세다. 프론트는 이 문서를 기준으로 mock을 만들고, 나중에 실제 API로 교체한다.
> 프론트에서 이 문서를 임의로 고치지 않는다. 다른 점을 발견하면 백엔드에 먼저 물어본다.

## 공통

- 날짜 형식: `YYYY-MM-DD`
- 로그인 없음 (고정 사용자 1명)

### 기분 코드

| 표시 이름 | 코드 |
| --- | --- |
| 기뻐 | `HAPPY` |
| 평온해 | `CALM` |
| 슬퍼 | `SAD` |
| 화나 | `ANGRY` |
| 피곤해 | `TIRED` |

## 1. 메모 목록 조회

`GET /api/memos`

```json
[
  { "id": 1, "date": "2026-11-01", "mood": "HAPPY", "memo": "친구랑 떡볶이 먹었다" }
]
```

## 2. 메모 저장

`POST /api/memos`

```json
// 요청
{ "date": "2026-11-07", "mood": "CALM", "memo": "산책했다" }

// 응답 201
{ "id": 7, "date": "2026-11-07", "mood": "CALM", "memo": "산책했다" }
```

- `memo`: 최대 글자 수 확인 중

## 3. 기분 통계 조회

`GET /api/stats`

```json
{
  "total": 6,
  "items": [
    { "moodCode": "HAPPY", "cnt": 2 },
    { "moodCode": "CALM", "cnt": 1 },
    { "moodCode": "SAD", "cnt": 1 },
    { "moodCode": "ANGRY", "cnt": 1 },
    { "moodCode": "TIRED", "cnt": 1 }
  ]
}
```

- `items`는 기분 코드 5개를 항상 위 순서대로 모두 반환한다. 기록이 없으면 `cnt: 0`

## 변경 이력

| 날짜 | 내용 |
| --- | --- |
| 2026-11-03 | 최초 작성 |
