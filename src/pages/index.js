// pages/index.js

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import StatCard from '@/components/StatCard';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';
import TimeSelector from '@/components/TimeSelector';

export default function Home() {  // <-- Correct default export
  const [timeRange, setTimeRange] = useState('1 day');
  const [stats, setStats] = useState({
    leads: 0,
    conversions: 0,
    bounced: 0,
  });

  const fetchStats = async (range) => {
    let newStats;
    if (range === '1 day') {
      newStats = { leads: 150, conversions: 45, bounced: 12 };
    } else if (range === '1 week') {
      newStats = { leads: 700, conversions: 210, bounced: 60 };
    } else if (range === '1 month') {
      newStats = { leads: 3000, conversions: 900, bounced: 300 };
    }
    setStats(newStats);
  };

  useEffect(() => {
    fetchStats(timeRange);
  }, [timeRange]);

  return (
    <Layout>
    <TimeSelector onSelectTime={setTimeRange} />

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <StatCard title="Total Leads" value={stats.leads} icon="👥" />
      <StatCard title="Conversions" value={stats.conversions} icon="💼" />
      <StatCard title="Bounced" value={stats.bounced} icon="📉" />
    </div>

    {/* Charts with responsive containers */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-full max-w-md mx-auto aspect-w-1 aspect-h-1 mt-9">
        <PieChart stats={stats} />
      </div>
      <div className="w-full max-w-md mx-auto aspect-w-2 aspect-h-1 mt-9">
        <LineChart stats={stats} />
      </div>
    </div>
  </Layout>
  );
}
