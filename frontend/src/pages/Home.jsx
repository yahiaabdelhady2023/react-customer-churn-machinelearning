import PageLayOut from "../components/PageLayOut";
import "../styles/Home.css"

function Home() {
  return (
    <PageLayOut>
        <MainContent/>
    </PageLayOut>
  )
}

function MainContent() {
  return (
    <div className="home-main-content">
        <div className="home-main-content-item-kpi-1">a</div>
        <div className="home-main-content-item-kpi-2">b</div>
        <div className="home-main-content-item-kpi-3">c</div>
        <div className="home-main-content-item-kpi-4">d</div>
        <div className="home-main-content-item-graph-1">e</div>
        <div className="home-main-content-item-graph-2">f</div>
        <div className="home-main-content-item-chart-1">g</div>
        <div className="home-main-content-item-chart-2">h</div>
        <div className="home-main-content-item-chart-3">i</div>
    </div>
  );
}

export default Home;
