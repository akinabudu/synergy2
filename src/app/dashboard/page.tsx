import CardItems from "./card/CardItems";
// import Chart from "./dashboardComponents/chartComponents/Chart";
import TransactionHistory from "./transactions/TransctionHistory";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col md:flex-row">
        <CardItems/>
        {/* <Chart/> */}
      </div>
      <TransactionHistory/>
    </div>
  );
}
