# THG 홈페이지 — GitHub Pages 배포 안내

현재 시안의 디자인·문구·10개 페이지를 유지한 정적 배포 파일입니다.
별도의 서버, 데이터베이스, Node.js 설치, 빌드 명령, 유료 호스팅이 필요하지 않습니다.
이 ZIP을 만드는 작업은 기존 시안 사이트의 공유 설정이나 게시 상태를 변경하지 않습니다.

## 1. ZIP 압축 풀기

`thg-github-pages` 폴더 안의 `index.html`이 첫 화면입니다.
HTML 10개, `assets/css`, `assets/js`, 이미지, 한글 글꼴과 글꼴 라이선스가 포함되어 있습니다.
THG 로고는 기존과 동일하게 텍스트와 CSS로 표시하며 별도 이미지 파일이 필요하지 않습니다.

## 2. GitHub 저장소 만들기

1. https://github.com 에 로그인합니다.
2. 오른쪽 위 `+` → `New repository`를 선택합니다.
3. 저장소 이름을 예를 들어 `thg-website`로 입력합니다.
4. 무료 GitHub Pages를 이용하려면 `Public`으로 만듭니다.
5. `Add a README file`을 선택하고 `Create repository`를 누릅니다.

## 3. 홈페이지 파일 업로드

1. 저장소에서 `Add file` → `Upload files`를 선택합니다.
2. 압축을 푼 `thg-github-pages` 폴더를 엽니다.
3. 그 안의 모든 HTML 파일, `assets` 폴더, README.md, `.nojekyll`을 업로드 화면으로 끌어 놓습니다.
4. 아래의 `Commit changes`로 저장합니다.

중요: ZIP 파일 자체를 올리지 마세요. `thg-github-pages`라는 바깥 폴더째 올리지 말고 그 **안의 내용**을 올려야 합니다.
저장소 첫 화면에서 `index.html`과 `assets`가 바로 보여야 합니다.
Windows에서 `.nojekyll`이 보이지 않으면 파일 탐색기에서 숨김 항목 표시를 켜거나, GitHub의 `Add file` → `Create new file`에서 `.nojekyll`이라는 이름의 파일을 만들고 내용에 줄바꿈을 넣어 저장합니다.
이미지나 폰트 파일을 따로 이름 변경하지 마세요. 모든 파일은 웹 업로드의 25 MiB 단일 파일 제한보다 작습니다.

## 4. GitHub Pages 켜기

1. 저장소의 `Settings` → 왼쪽 `Pages`로 들어갑니다.
2. `Build and deployment` → `Source`에서 `Deploy from a branch`를 선택합니다.
3. `Branch`는 `main`, 폴더는 `/(root)`를 선택합니다.
4. `Save`를 누릅니다.
5. 배포가 끝나면 Pages 설정에 표시되는 사이트 주소를 엽니다. 진행 상태는 `Actions`에서도 볼 수 있습니다.

일반 저장소의 주소 형식은 `https://사용자이름.github.io/저장소이름/`입니다.
예시의 사용자이름과 저장소이름은 본인 계정과 실제 저장소 이름으로 바꾸어야 합니다.
GitHub Pages에서는 기존 시안의 ChatGPT 로그인·이메일 열람 권한 제한 없이 인터넷에 공개됩니다.

## 5. 직원에게 전달

배포 후 GitHub Pages 설정에 표시된 실제 주소를 복사해 카카오톡이나 이메일로 보내면 됩니다.
직원은 ChatGPT 계정 없이 브라우저로 볼 수 있습니다.

## 6. 포함된 기능과 유지한 동작

- 회사소개·사업분야·제품소개·제조역량·사업장 안내·문의하기의 개별 페이지
- 제품 3종 상세 페이지 및 제품 목록으로 돌아가기
- 모바일 접기/펼치기 메뉴와 화면 폭에 따른 반응형 레이아웃
- 장비 원본 이미지 보기
- 이메일 문의: `mailto:` 링크이므로 사용자의 기본 메일 앱이 열립니다. 웹 문의를 서버에 저장하거나 자동 발송하는 기능은 없습니다.
- 사업장 지도: 네이버 지도 외부 링크를 새 창으로 엽니다.
- 브랜드 배너 및 제품 배경 정리 이미지와 제공 원본을 모두 포함합니다.

## 7. 파일을 수정할 때

- 문구·주소: 해당 `.html` 파일
- 디자인: `assets/css/styles.css`
- 글꼴 정의: `assets/css/fonts.css`
- 모바일 메뉴: `assets/js/main.js`
- 사진: `assets` 폴더

경로는 모두 상대 경로입니다. `file://`, `localhost`, 개발 PC 경로, Sites 전용 실행 코드나 인증 정보는 포함하지 않습니다.
폰트도 함께 포함하여 디자인 표시를 위한 외부 다운로드를 없앴습니다.
GitHub 프로젝트 사이트와 계정 메인 사이트 모두 동일한 파일을 사용할 수 있습니다.

## 8. 확인과 문제 해결

- 로컬에서는 압축 해제 후 `index.html`을 열어 확인할 수 있습니다.
- 첫 화면이 README로 나오거나 404라면 저장소 루트에 `index.html`이 있는지 확인합니다.
- 이미지가 안 보이면 `assets` 폴더 전체가 올라갔는지, 이름의 대소문자가 일치하는지 확인합니다.
- 메뉴 버튼이 반응하지 않으면 `assets/js/main.js` 업로드 여부를 확인합니다.
- 변경이 안 보이면 배포 완료 후 Ctrl+F5로 새로고침합니다.
- 화면 폭 800px 이하에서는 모바일 메뉴, 800px 초과에서는 PC 메뉴가 표시됩니다.
- 포함된 `DEPLOYMENT_CHECKS.txt`는 파일 구조·상대 경로·원본 콘텐츠 유지 검사 결과입니다. 실제 GitHub 계정 배포는 사용자가 위 절차로 진행합니다.

## 공식 안내

- GitHub Pages 게시 설정: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- 파일 업로드: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- 한글 글꼴: Noto Sans KR, SIL Open Font License 1.1 (`assets/fonts/OFL.txt` 포함)
