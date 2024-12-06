import Header from "../components/common/Header";

import OverviewCards from "../components/analytics/OverviewCards.jsx";
import RevenueChart from "../components/analytics/RevenueChart.jsx";
import ChannelPerformance from "../components/analytics/ChannelPerformance.jsx";
import ProductPerformance from "../components/analytics/ProductPerformance.jsx";
import UserRetention from "../components/analytics/UserRetention.jsx";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation.jsx";
import AIPoweredInsights from "../components/analytics/AIPoweredInsights.jsx";
function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
        <RevenueChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>

        <AIPoweredInsights />
      </main>
    </div>
  );
}

export default AnalyticsPage;
