import "@/assets/scss/pages/layout02.scss";
import NavHeader from "@/components/common/NavHeader";

const Layout02 = () => {
  return (
    <div className="layout-02">
      <ul className="layout-02-left-menu">
        <li>01</li>
        <li>02</li>
        <li>03</li>
      </ul>
      <div className="layout-02-right-content">
        <header>
          <NavHeader />
        </header>
        <main className="layout-02-container">
          <section className="box-left">Left</section>
          <section className="box-right">Right</section>
        </main>
        <footer className="layout-02-footer">Footer</footer>
      </div>
    </div>
  );
};

export default Layout02;
