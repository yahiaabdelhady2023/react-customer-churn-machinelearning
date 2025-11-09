import "../styles/KPICard.css"

function KPICard({ item }) {
  return (
    <div className="kpi-card">
      <h2 className="kpi-card-title">{item.title}</h2>
      <p className="kpi-card-value">{item.value}</p>
    </div>
  );
}


export default KPICard