import NavHeader from "@/components/common/NavHeader";

const Layout01 = () => {
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

export default Layout01;
