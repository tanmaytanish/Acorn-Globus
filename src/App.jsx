import './index.css';
import DashboardLayout from './components/layout/DashboardLayout';
import TopHeader from './components/layout/TopHeader';
import SummaryMetrics from './components/cards/SummaryMetrics';
import UserMetricsPills from './components/cards/UserMetricsPills';
import PlatformStats from './components/cards/PlatformStats';
import DealsChart from './components/charts/DealsChart';
import PlatformValueChart from './components/charts/PlatformValueChart';
import UserTable from './components/tables/UserTable';
import WorkWithPlatforms from './components/cards/WorkWithPlatforms';
import ActionTabs from './components/ui/ActionTabs';
import ErenRow from './components/cards/UserRow';

function App() {
  return (
    <DashboardLayout>
      {/* Top Header with User Pills & Actions */}
      <TopHeader />

      {/* Summary Metrics Row */}
      <SummaryMetrics />

      {/* User Metrics Pill Row */}
      <UserMetricsPills />

      {/* Main Two Column Layout */}
      <div className="flex gap-5">
        {/* Left Column - Platform Data */}
        <div className="w-[520px] flex-shrink-0 space-y-4">
          {/* Platform Stats & Deals Chart Row */}
          <div className="flex gap-4">
            <PlatformStats />
            <DealsChart />
          </div>

          {/* Platform Value Chart */}
          <PlatformValueChart />
        </div>

        {/* Right Column - User Data & Sales */}
        <div className="flex-1 space-y-4">
          {/* User Table */}
          <UserTable />

          {/* Action Tabs */}
          <ActionTabs />

          {/* Work with Platforms */}
          <WorkWithPlatforms />

          {/* Bottom User Row - Eren */}
          <ErenRow />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
