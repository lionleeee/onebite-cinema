import { ReactNode } from "react";
import style from "./global-layout.module.css";
export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>ONEBITE CINEMA</header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
