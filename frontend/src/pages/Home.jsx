import PageLayOut from "../components/PageLayOut";
import "../styles/Home.css";
import KPICard from "../components/KPICard";
import BarChartComponent from "../components/Charts";

function Home() {
  return (
    <PageLayOut>
      <MainContent />
    </PageLayOut>
  );
}

function MainContent() {
  const kpi_1 = { id: 0, title: "Total Revenue", value: 45230 };
  const kpi_2 = { id: 1, title: "Active Users", value: 1847 };
  const kpi_3 = { id: 2, title: "Conversion Rate", value: 23.5 };
  const kpi_4 = { id: 3, title: "Customer Satisfaction", value: 94.2 };

  return (
    <div className="home-main-content">
      <div className="home-main-content-item-kpi-1">
        <KPICard item={kpi_1} key={kpi_1.id} />
      </div>
      <div className="home-main-content-item-kpi-2">
        <KPICard item={kpi_2} key={kpi_2.id} />
      </div>
      <div className="home-main-content-item-kpi-3">
        <KPICard item={kpi_3} key={kpi_3.id} />
      </div>
      <div className="home-main-content-item-kpi-4">
        <KPICard item={kpi_4} key={kpi_4.id} />
      </div>
      <div className="home-main-content-item-graph-1">
        <BarChartComponent />
      </div>
      <div className="home-main-content-item-graph-2">f</div>
      <div className="home-main-content-item-chart-1">g</div>
      <div className="home-main-content-item-chart-2">h</div>
      <div className="home-main-content-item-chart-3">i</div>
    </div>
  );
}

export default Home;
