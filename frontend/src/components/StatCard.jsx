import { useNavigate } from "react-router-dom";

const StatCard = ({ title, route }) => {
  const navigate = useNavigate();

  return (
    <div
      className="stat-card"
      onClick={() => route && navigate(route)}
    >
      <div className="stat-icon">⚕</div>
      <p>{title}</p>
    </div>
  );
};

export default StatCard;
