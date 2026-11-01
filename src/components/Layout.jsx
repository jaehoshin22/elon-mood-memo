import { NavLink, Outlet } from "react-router-dom";

const NAV = [
  { to: "/", label: "목록" },
  { to: "/write", label: "작성" },
  { to: "/stats", label: "통계" },
];

// 공통 레이아웃 — 수정 전 팀에 먼저 공유 (CLAUDE.md)
function Layout() {
  return (
    <div className="app">
      <header className="header">
        <h1>오늘의 기분 메모</h1>
        <nav className="nav">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end>
              {n.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
