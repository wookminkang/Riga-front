# Riga-front (React + TypeScript Project)

---

## 🧩 Tech Stack

| Category | Stack |
|-----------|--------|
| **Language** | TypeScript |
| **Framework** | React (Latest) |
| **State Management** | Zustand |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Form Validation** | React Hook Form + Zod |
| **Runtime** | Node.js v20 |
| **Build Tool** | Vite |

---

## 📂 Folder Structure

```bash
src/
 ┣ components/
 │  ┣ common/           # 공통 레이아웃 및 구조 컴포넌트
 │  │  ┣ Header.tsx
 │  │  ┣ Footer.tsx
 │  │  ┣ Sidebar.tsx
 │  │  ┗ Layout.tsx
 │  │
 │  ┗ ui/               # shadcn/ui 기반의 UI 요소 컴포넌트
 │     ┣ Button.tsx
 │     ┣ Badge.tsx
 │     ┣ Card.tsx
 │     ┣ Input.tsx
 │     ┗ Tabs.tsx
 │
 ┣ hooks/               # 커스텀 훅 (예: useModal, useScroll, useForm 등)
 │  ┗ useModal.ts
 │
 ┣ pages/               # 라우트별 페이지 컴포넌트
 │  ┣ Home.tsx
 │  ┗ Settings.tsx
 │
 ┣ stores/              # Zustand 상태 관리 모듈
 │  ┣ userStore.ts
 │  ┗ themeStore.ts
 │
 ┣ types/               # 전역 타입 정의 (e.g. user, form, api types)
 │  ┗ user.type.ts
 │
 ┣ utils/               # 공통 유틸 함수
 │  ┗ formatDate.ts
 │
 ┗ main.tsx             # 애플리케이션 진입점
