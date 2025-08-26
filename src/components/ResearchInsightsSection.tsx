import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Placeholder images will be replaced with actual uploaded data visualizations
const correlationHeatmap = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTYyOTQ3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0Y0RjFFQyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNvcnJlbGF0aW9uIEhlYXRtYXA8L3RleHQ+PC9zdmc+";
const educationWorkSavings = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTYyOTQ3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0Y0RjFFQyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVkdWNhdGlvbiB2cyBXb3JrL1NhdmluZ3M8L3RleHQ+PC9zdmc+";
const socialSecurityAccess = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTYyOTQ3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0Y0RjFFQyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNvY2lhbCBTZWN1cml0eSBBY2Nlc3M8L3RleHQ+PC9zdmc+";

const ResearchInsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeInsight, setActiveInsight] = useState(0);

  // Sample data for interactive charts
  const educationData = [
    { level: 'Illiterate', workHours: 6, savings: 2, earnings: 150 },
    { level: '10th Pass', workHours: 12, savings: 1, earnings: 200 },
    { level: '12th+', workHours: 10, savings: 8, earnings: 280 }
  ];

  const correlationData = [
    { metric: 'Age vs Savings', correlation: -0.15, color: '#DC2626' },
    { metric: 'Hours vs Earnings', correlation: 0.09, color: '#F59E0B' },
    { metric: 'Age vs Hours', correlation: 0.23, color: '#10B981' }
  ];

  const socialSecurityData = [
    { scheme: 'e-Shram Cards', enrolled: 45.9, aware: 78.2 },
    { scheme: 'PM-SYM', enrolled: 1.8, aware: 23.4 },
    { scheme: 'Skill Training', enrolled: 59.0, aware: 65.8 }
  ];

  const insights = [
    {
      title: "Education Level vs Work and Savings",
      description: "Educational attainment doesn't guarantee financial security in the informal economy",
      points: [
        "Illiterate workers have lowest savings and fewer work hours",
        "10th pass workers work longest hours but have negligible savings", 
        "12th+ workers achieve highest savings but still face high work demands"
      ],
      image: educationWorkSavings
    },
    {
      title: "Financial Correlations",
      description: "Data reveals concerning patterns in informal worker economics",
      points: [
        "Age vs Savings: Weak negative correlation (-0.15) - older workers struggle more to save",
        "Hours Worked vs Earnings: Weak positive correlation (0.09) - more hours don't guarantee higher income",
        "Age vs Hours Worked: Strongest correlation (0.23) - older workers tend to work longer hours"
      ],
      image: correlationHeatmap
    },
    {
      title: "Social Security & Awareness Gap",
      description: "Significant disconnect between program availability and utilization",
      points: [
        "Low Scheme Awareness: 45.9% have e-Shram cards, only 1.8% enrolled in PM-SYM",
        "Gender & Debt: 48.3% of women vs 41.7% of men reported being in debt",
        "Work Migration: 42.4% migrated for work; 44.9% migrate seasonally"
      ],
      image: socialSecurityAccess
    }
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveInsight((prev) => (prev + 1) % insights.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isInView, insights.length]);

  return (
    <section ref={ref} className="section-padding bg-oxford-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="animated-stripes"></div>
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blood-red to-transparent animate-[scanLine_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="container-width mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-eggshell">Data-Driven </span>
            <span className="text-blood-red">Insights</span>
          </h2>
          <p className="text-glaucous text-lg max-w-3xl mx-auto">
            Understanding India's Informal Economy Through Numbers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="card-shadow bg-eggshell/5 border-glaucous/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div
                  key={activeInsight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-blood-red mb-4">
                    {insights[activeInsight].title}
                  </h3>
                  <p className="text-glaucous mb-6 text-lg">
                    {insights[activeInsight].description}
                  </p>
                  <ul className="space-y-3">
                    {insights[activeInsight].points.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3 text-eggshell"
                      >
                        <div className="w-2 h-2 bg-federal-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <div className="flex gap-2 mt-8 justify-center">
                  {insights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveInsight(index)}
                      className={`w-3 h-3 rounded-full smooth-transition ${
                        index === activeInsight 
                          ? 'bg-blood-red' 
                          : 'bg-glaucous/30 hover:bg-glaucous/50'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="card-shadow bg-eggshell/5 border-glaucous/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <img 
                  src={insights[activeInsight].image} 
                  alt={insights[activeInsight].title}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card className="card-shadow bg-eggshell/5 border-glaucous/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-blood-red mb-4">Education vs Work Hours</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={educationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(167, 172, 175, 0.2)" />
                  <XAxis 
                    dataKey="level" 
                    tick={{ fill: '#A7ACAF', fontSize: 12 }}
                    axisLine={{ stroke: '#A7ACAF' }}
                  />
                  <YAxis 
                    tick={{ fill: '#A7ACAF', fontSize: 12 }}
                    axisLine={{ stroke: '#A7ACAF' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(22, 41, 71, 0.9)', 
                      border: '1px solid #A7ACAF',
                      borderRadius: '8px',
                      color: '#F4F1EC'
                    }}
                  />
                  <Bar dataKey="workHours" fill="#DC2626" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="card-shadow bg-eggshell/5 border-glaucous/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-blood-red mb-4">Financial Correlations</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={correlationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(167, 172, 175, 0.2)" />
                  <XAxis 
                    dataKey="metric" 
                    tick={{ fill: '#A7ACAF', fontSize: 10 }}
                    axisLine={{ stroke: '#A7ACAF' }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    tick={{ fill: '#A7ACAF', fontSize: 12 }}
                    axisLine={{ stroke: '#A7ACAF' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(22, 41, 71, 0.9)', 
                      border: '1px solid #A7ACAF',
                      borderRadius: '8px',
                      color: '#F4F1EC'
                    }}
                  />
                  <Bar dataKey="correlation" fill="#1E5390" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="card-shadow bg-eggshell/5 border-glaucous/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-blood-red mb-4">Scheme Enrollment Gap</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={socialSecurityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(167, 172, 175, 0.2)" />
                  <XAxis 
                    dataKey="scheme" 
                    tick={{ fill: '#A7ACAF', fontSize: 10 }}
                    axisLine={{ stroke: '#A7ACAF' }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    tick={{ fill: '#A7ACAF', fontSize: 12 }}
                    axisLine={{ stroke: '#A7ACAF' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(22, 41, 71, 0.9)', 
                      border: '1px solid #A7ACAF',
                      borderRadius: '8px',
                      color: '#F4F1EC'
                    }}
                  />
                  <Bar dataKey="enrolled" fill="#DC2626" />
                  <Bar dataKey="aware" fill="#A7ACAF" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="card-shadow bg-gradient-to-r from-blood-red/10 to-federal-blue/10 border-glaucous/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blood-red mb-2">42.4%</div>
                  <div className="text-glaucous">Migrated for Work</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-federal-blue mb-2">48.3%</div>
                  <div className="text-glaucous">Women in Debt</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blood-red mb-2">1.8%</div>
                  <div className="text-glaucous">PM-SYM Enrollment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-federal-blue mb-2">59%</div>
                  <div className="text-glaucous">Took Skill Training</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchInsightsSection;