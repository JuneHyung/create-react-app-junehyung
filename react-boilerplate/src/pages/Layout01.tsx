import "@/assets/scss/pages/layout01.scss";
import { NavHeader } from "@/components/common/NavHeader";

export const Layout01 = () => {
  return (
    <div className="layout-01">
      <header className="layout-01-header">
        <NavHeader />
      </header>
      <main className="layout-01-container">
        <section className="box-left">Left</section>
        <section className="box-right">Right</section>
      </main>
      <footer className="layout-01-footer">Footer</footer>
    </div>
  );
};
