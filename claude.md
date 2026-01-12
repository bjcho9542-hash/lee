# Claude 작업 규칙

## 프로젝트 정보
- Google Apps Script 프로젝트 (스프레드시트 연동)
- Git 연결: https://github.com/bjcho9542-hash/lee
- clasp 로컬 설치 (npx clasp 사용)

## 코드 변경 시 자동 수행 작업

코드가 수정/추가/삭제되면 다음 작업을 순서대로 수행:

1. **Git 커밋 & 푸시**
   - 변경사항 커밋
   - GitHub에 푸시

2. **clasp push**
   - `npx clasp push` 실행
   - Google Apps Script에 코드 업로드

3. **웹 배포** (웹앱이 있는 경우)
   - `npx clasp deploy` 실행
   - 새 버전 배포

## 언어
- 한국어로 응답
