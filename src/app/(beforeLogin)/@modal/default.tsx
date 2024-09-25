export default function Default() {
  return null;
}

//Parallel Routes - 동일한 layout.tsx 내에서 하나 이상의 페이지를 동시에 또는 조건부 렌더링

//주소가 http://localhost:3000/ 일때는 childern -> page.tsx, modal -> @modal/default/tsx
//주소가 http://localhost:3000/i/flow/login 일때는 childern -> i/flow/login/page.tsx, modal -> @modal/i/flow/default/tsx

//Intercepting Routes - Intercepting routes를 사용하면 현재 레이아웃 내에서 애플리케이션의 다른 부분의 라우트를 로드할 수 있습니다.
//이 라우팅 패러다임은 사용자가 다른 컨텍스트로 전환하지 않고도 라우트의 콘텐츠를 표시하려는 경우에 유용합니다.

// 클라이언트에서 라우팅 할 때만 적용
// 이 두개를 잘 호환하면 기존 화면 유지하고 다른 페이지를 뛰울 수 있어

// (.)는 동일 레벨의 세그먼트를 매칭합니다.
// (..)는 한 레벨 위의 세그먼트를 매칭합니다.
// (..)(..)는 두 레벨 위의 세그먼트를 매칭합니다.
// (...)는 루트 app 디렉토리의 세그먼트를 매칭합니다.