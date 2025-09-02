import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { statesData, StateData, getStateColor } from "@/data/surveyData";
import { Users, TrendingUp, AlertCircle, MapPin } from "lucide-react";

const StatesHeatmapSection = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleStateClick = (stateData: StateData) => {
    setSelectedState(stateData);
    setShowModal(true);
  };

  const handleStateHover = (stateData: StateData | null) => {
    setHoveredState(stateData);
  };

  const COLORS = ['#0066FF', '#87CEEB', '#FF0000', '#FFB366', '#66FFB2'];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,102,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Survey Coverage Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive map showing our research coverage across key Indian states. 
            Click on any state to explore detailed survey data and insights.
          </p>
        </motion.div>

        {/* Map and Legend Container */}
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="bg-card border-border shadow-xl overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="w-6 h-6 text-primary" />
                  Survey Distribution Heatmap
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-background to-muted/20 p-8">
                  <svg
                    viewBox="0 0 600 500"
                    className="w-full h-auto max-w-2xl mx-auto"
                    style={{ filter: 'drop-shadow(0 4px 20px rgba(0,102,255,0.1))' }}
                  >
                    {/* Simplified India Map - State Paths */}
                    
                    {/* Rajasthan */}
                    <path
                      d="M200 180 L280 180 L300 220 L280 280 L220 300 L180 280 L160 240 Z"
                      fill={getStateColor(statesData.find(s => s.id === 'rajasthan')?.surveys || 0)}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:stroke-primary hover:stroke-4 hover:filter hover:brightness-110"
                      onClick={() => handleStateClick(statesData.find(s => s.id === 'rajasthan')!)}
                      onMouseEnter={() => handleStateHover(statesData.find(s => s.id === 'rajasthan')!)}
                      onMouseLeave={() => handleStateHover(null)}
                    />
                    
                    {/* Punjab */}
                    <path
                      d="M220 100 L280 100 L290 140 L270 160 L220 160 L200 140 Z"
                      fill={getStateColor(statesData.find(s => s.id === 'punjab')?.surveys || 0)}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:stroke-primary hover:stroke-4 hover:filter hover:brightness-110"
                      onClick={() => handleStateClick(statesData.find(s => s.id === 'punjab')!)}
                      onMouseEnter={() => handleStateHover(statesData.find(s => s.id === 'punjab')!)}
                      onMouseLeave={() => handleStateHover(null)}
                    />
                    
                    {/* Haryana */}
                    <path
                      d="M280 140 L320 140 L330 170 L310 180 L280 180 L270 160 Z"
                      fill={getStateColor(statesData.find(s => s.id === 'haryana')?.surveys || 0)}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:stroke-primary hover:stroke-4 hover:filter hover:brightness-110"
                      onClick={() => handleStateClick(statesData.find(s => s.id === 'haryana')!)}
                      onMouseEnter={() => handleStateHover(statesData.find(s => s.id === 'haryana')!)}
                      onMouseLeave={() => handleStateHover(null)}
                    />
                    
                    {/* Delhi */}
                    <circle
                      cx="315"
                      cy="155"
                      r="15"
                      fill={getStateColor(statesData.find(s => s.id === 'delhi')?.surveys || 0)}
                      stroke="#ffffff"
                      strokeWidth="3"
                      className="cursor-pointer transition-all duration-300 hover:stroke-primary hover:stroke-4 hover:filter hover:brightness-110"
                      onClick={() => handleStateClick(statesData.find(s => s.id === 'delhi')!)}
                      onMouseEnter={() => handleStateHover(statesData.find(s => s.id === 'delhi')!)}
                      onMouseLeave={() => handleStateHover(null)}
                    />
                    
                    {/* Uttar Pradesh */}
                    <path
                      d="M330 170 L420 170 L440 220 L420 260 L380 270 L340 250 L320 220 L310 180 Z"
                      fill={getStateColor(statesData.find(s => s.id === 'up')?.surveys || 0)}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:stroke-primary hover:stroke-4 hover:filter hover:brightness-110"
                      onClick={() => handleStateClick(statesData.find(s => s.id === 'up')!)}
                      onMouseEnter={() => handleStateHover(statesData.find(s => s.id === 'up')!)}
                      onMouseLeave={() => handleStateHover(null)}
                    />
                    
                    {/* Madhya Pradesh */}
                    <path
                      d="M280 280 L380 270 L400 320 L380 360 L320 370 L280 350 L260 320 Z"
                      fill={getStateColor(statesData.find(s => s.id === 'mp')?.surveys || 0)}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:stroke-primary hover:stroke-4 hover:filter hover:brightness-110"
                      onClick={() => handleStateClick(statesData.find(s => s.id === 'mp')!)}
                      onMouseEnter={() => handleStateHover(statesData.find(s => s.id === 'mp')!)}
                      onMouseLeave={() => handleStateHover(null)}
                    />
                    
                    {/* Maharashtra */}
                    <path
                      d="M220 360 L320 370 L340 420 L300 460 L240 450 L200 420 L180 380 Z"
                      fill={getStateColor(statesData.find(s => s.id === 'maharashtra')?.surveys || 0)}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:stroke-primary hover:stroke-4 hover:filter hover:brightness-110"
                      onClick={() => handleStateClick(statesData.find(s => s.id === 'maharashtra')!)}
                      onMouseEnter={() => handleStateHover(statesData.find(s => s.id === 'maharashtra')!)}
                      onMouseLeave={() => handleStateHover(null)}
                    />
                    
                    {/* State Labels */}
                    {statesData.map((state) => (
                      <text
                        key={state.id}
                        x={state.coordinates.x}
                        y={state.coordinates.y}
                        textAnchor="middle"
                        className="fill-white text-xs font-semibold pointer-events-none"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
                      >
                        {state.name}
                      </text>
                    ))}
                  </svg>
                  
                  {/* Hover Tooltip */}
                  {hoveredState && (
                    <div className="absolute top-4 right-4 bg-background border border-border rounded-lg p-4 shadow-lg z-20">
                      <h4 className="font-semibold text-lg text-foreground">{hoveredState.name}</h4>
                      <p className="text-muted-foreground">Surveys: {hoveredState.surveys.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground mt-1">Click to view details</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Legend and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Legend */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Survey Intensity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { range: "4000+", color: "#1e3a8a", label: "Highest" },
                  { range: "3000-3999", color: "#1e40af", label: "High" },
                  { range: "2500-2999", color: "#2563eb", label: "Medium-High" },
                  { range: "2000-2499", color: "#3b82f6", label: "Medium" },
                  { range: "1500-1999", color: "#60a5fa", label: "Low-Medium" },
                  { range: "< 1500", color: "#93c5fd", label: "Lowest" }
                ].map((item) => (
                  <div key={item.range} className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded border border-border"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">{item.range}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {statesData.reduce((acc, state) => acc + state.surveys, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Surveys</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{statesData.length}</div>
                  <div className="text-sm text-muted-foreground">States Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-accent">95%</div>
                  <div className="text-sm text-muted-foreground">Coverage Rate</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* State Detail Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <MapPin className="w-6 h-6 text-primary" />
              {selectedState?.name} - Survey Insights
            </DialogTitle>
          </DialogHeader>
          
          {selectedState && (
            <div className="space-y-8 py-4">
              {/* Overview Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{selectedState.surveys.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Surveys</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">{selectedState.workerTypes.length}</div>
                  <div className="text-sm text-muted-foreground">Worker Categories</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {selectedState.demographics.genderSplit.find(g => g.gender === 'Female')?.percentage}%
                  </div>
                  <div className="text-sm text-muted-foreground">Female Workers</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {Math.round(selectedState.surveys / selectedState.workerTypes.length)}
                  </div>
                  <div className="text-sm text-muted-foreground">Avg per Category</div>
                </div>
              </div>

              {/* Charts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Worker Types Distribution */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Worker Type Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={selectedState.workerTypes}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ type, percentage }) => `${type}: ${percentage}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="count"
                        >
                          {selectedState.workerTypes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Age Demographics */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Age Group Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={selectedState.demographics.ageGroups}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="group" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="percentage" fill="#0066FF" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Income Distribution */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Income Range Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={selectedState.demographics.incomeRanges}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="range" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="percentage" fill="#87CEEB" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Gender Split */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Gender Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={selectedState.demographics.genderSplit}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ gender, percentage }) => `${gender}: ${percentage}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="percentage"
                        >
                          {selectedState.demographics.genderSplit.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#0066FF' : '#FF0000'} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Key Insights */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="w-5 h-5 text-primary" />
                      Key Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {selectedState.insights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      Top Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedState.topChallenges.map((challenge, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="mr-2 mb-2 text-xs"
                        >
                          {challenge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default StatesHeatmapSection;