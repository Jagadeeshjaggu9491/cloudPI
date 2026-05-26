import React, { useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { FaChartPie, FaBolt, FaServer } from 'react-icons/fa';
import AnimatedHeading from '../components/AnimatedHeading';
import '../styles/PlatformAnalytics.css';

const data = [
  { name: 'Mon', cost: 4000, optimized: 2400 },
  { name: 'Tue', cost: 3000, optimized: 1398 },
  { name: 'Wed', cost: 2000, optimized: 9800 },
  { name: 'Thu', cost: 2780, optimized: 3908 },
  { name: 'Fri', cost: 1890, optimized: 4800 },
  { name: 'Sat', cost: 2390, optimized: 3800 },
  { name: 'Sun', cost: 3490, optimized: 4300 },
];

export default function PlatformAnalytics() {
  const sectionRef = useRef(null);

  return (
    <section className="analytics-section py-5" ref={sectionRef}>
      <div className="container">
        
        <div className="text-center mb-5 analytics-header">
          <span className="badge-premium mb-3">INTELLIGENT INSIGHTS</span>
          <AnimatedHeading className="section-title">
            Deep Dive Platform <span className="text-gradient">Analytics</span>
          </AnimatedHeading>
          <p className="section-desc mx-auto">
            Visualize your multi-cloud infrastructure and monitor cost reductions in real-time with our advanced AI metrics dashboard.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          {/* Main Chart */}
          <div className="col-lg-8">
            <div className="glass-card analytics-chart-card p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="chart-title mb-0">Cost Optimization Trends</h4>
                <div className="chart-legend d-flex gap-3">
                  <span className="legend-item"><span className="dot cost"></span> Actual Cost</span>
                  <span className="legend-item"><span className="dot opt"></span> Optimized</span>
                </div>
              </div>
              <div className="chart-wrapper" style={{ height: '350px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorOpt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={-10} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    />
                    <Area type="monotone" dataKey="cost" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorCost)" />
                    <Area type="monotone" dataKey="optimized" stroke="#ec4899" strokeWidth={3} fillOpacity={1} fill="url(#colorOpt)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4">
              
              <div className="glass-card stat-mini-card p-4">
                <div className="stat-icon-wrapper purple mb-3">
                  <FaChartPie size={20} />
                </div>
                <h5 className="stat-value text-gradient">42.8%</h5>
                <p className="stat-label mb-0">Average monthly cloud compute savings</p>
              </div>

              <div className="glass-card stat-mini-card p-4">
                <div className="stat-icon-wrapper pink mb-3">
                  <FaBolt size={20} />
                </div>
                <h5 className="stat-value text-gradient">Instant</h5>
                <p className="stat-label mb-0">Automated resource rightsizing execution</p>
              </div>

              <div className="glass-card stat-mini-card p-4">
                <div className="stat-icon-wrapper blue mb-3">
                  <FaServer size={20} />
                </div>
                <h5 className="stat-value text-gradient">99.99%</h5>
                <p className="stat-label mb-0">Uptime across global dedicated enclaves</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
