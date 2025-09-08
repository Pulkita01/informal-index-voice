import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { locationsData, LocationData, getTotalSurveyed, getTotalReached, getStateWiseData } from "@/data/surveyData";
import { Users, TrendingUp, AlertCircle, MapPin } from "lucide-react";

const StatesHeatmapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<LocationData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleLocationClick = (locationData: LocationData) => {
    setSelectedLocation(locationData);
    setShowModal(true);
  };

  const handleLocationHover = (locationData: LocationData | null) => {
    setHoveredLocation(locationData);
  };

  const COLORS = ['#0066FF', '#87CEEB', '#FF0000', '#FFB366', '#66FFB2'];
  const stateWiseData = getStateWiseData();

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
            Survey Locations Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive map showing our on-ground survey locations across India. 
            Click on any red pin to explore detailed location data and insights.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{getTotalSurveyed()}+</div>
              <div className="text-sm text-muted-foreground">People Surveyed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{getTotalReached()}+</div>
              <div className="text-sm text-muted-foreground">People Reached</div>
            </div>
          </div>
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
                  Survey Locations Map
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-background to-muted/20 p-8">
                  <svg
                    viewBox="0 0 600 500"
                    className="w-full h-auto max-w-2xl mx-auto"
                    style={{ filter: 'drop-shadow(0 4px 20px rgba(0,102,255,0.1))' }}
                  >
                    {/* Accurate India Map Outline - Distinctive Triangular Shape */}
                    <path
                      d="M 200 100 
                         C 230 90, 270 90, 300 100
                         C 330 95, 360 95, 390 100
                         C 410 110, 420 120, 430 140
                         C 440 160, 445 180, 450 200
                         C 455 230, 460 260, 450 290
                         C 445 320, 435 350, 420 380
                         C 400 410, 375 440, 350 460
                         C 325 480, 300 490, 300 500
                         C 300 490, 275 480, 250 460
                         C 225 440, 200 410, 180 380
                         C 165 350, 155 320, 150 290
                         C 140 260, 145 230, 150 200
                         C 155 180, 160 160, 170 140
                         C 180 120, 190 110, 200 100 Z"
                      fill="hsl(var(--muted))"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                    
                    {/* State Boundaries - More Accurate */}
                    {/* Rajasthan */}
                    <path
                      d="M 120 180 L 220 160 L 260 200 L 240 260 L 180 280 L 120 240 Z"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    
                    {/* Madhya Pradesh */}
                    <path
                      d="M 220 240 L 360 230 L 380 280 L 360 320 L 280 330 L 220 300 Z"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    
                    {/* Maharashtra */}
                    <path
                      d="M 180 330 L 300 340 L 320 390 L 280 420 L 220 410 L 160 380 Z"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    
                    {/* Punjab */}
                    <path
                      d="M 200 90 L 260 90 L 270 130 L 230 140 L 200 120 Z"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    
                    {/* Haryana */}
                    <path
                      d="M 260 120 L 300 120 L 310 150 L 280 160 L 260 150 Z"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    
                    {/* Location Pins */}
                    {locationsData.map((location) => {
                      // Improved coordinate conversion for accurate positioning
                      const x = 100 + (location.coordinates.lng - 68) * 6;
                      const y = 420 - (location.coordinates.lat - 8) * 10;
                      
                      return (
                        <g key={location.id}>
                          {/* Pin Shadow */}
                          <circle
                            cx={x + 2}
                            cy={y + 2}
                            r="8"
                            fill="rgba(0,0,0,0.2)"
                            className="pointer-events-none"
                          />
                          {/* Pin */}
                          <circle
                            cx={x}
                            cy={y}
                            r="8"
                            fill={location.pinColor}
                            stroke="#ffffff"
                            strokeWidth="3"
                            className="cursor-pointer transition-all duration-300 hover:r-10 hover:stroke-4"
                            onClick={() => handleLocationClick(location)}
                            onMouseEnter={() => handleLocationHover(location)}
                            onMouseLeave={() => handleLocationHover(null)}
                          />
                          {/* Pin Center */}
                          <circle
                            cx={x}
                            cy={y}
                            r="3"
                            fill="#ffffff"
                            className="pointer-events-none"
                          />
                        </g>
                      );
                    })}
                    
                    {/* State Labels */}
                    <text x="170" y="220" textAnchor="middle" className="fill-muted-foreground text-xs font-medium pointer-events-none">
                      Rajasthan
                    </text>
                    <text x="300" y="280" textAnchor="middle" className="fill-muted-foreground text-xs font-medium pointer-events-none">
                      Madhya Pradesh
                    </text>
                    <text x="250" y="380" textAnchor="middle" className="fill-muted-foreground text-xs font-medium pointer-events-none">
                      Maharashtra
                    </text>
                    <text x="230" y="110" textAnchor="middle" className="fill-muted-foreground text-xs font-medium pointer-events-none">
                      Punjab
                    </text>
                    <text x="280" y="140" textAnchor="middle" className="fill-muted-foreground text-xs font-medium pointer-events-none">
                      Haryana
                    </text>
                  </svg>
                  
                  {/* Hover Tooltip */}
                  {hoveredLocation && (
                    <div className="absolute top-4 right-4 bg-background border border-border rounded-lg p-4 shadow-lg z-20">
                      <h4 className="font-semibold text-lg text-foreground">{hoveredLocation.name}</h4>
                      <p className="text-muted-foreground">Surveyed: {hoveredLocation.surveyed}+ people</p>
                      <p className="text-muted-foreground">Reached: {hoveredLocation.reached}+ people</p>
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
                <CardTitle className="text-lg">Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-md"></div>
                  <span className="text-sm text-muted-foreground">Survey Locations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-1 bg-border"></div>
                  <span className="text-sm text-muted-foreground">State Boundaries</span>
                </div>
              </CardContent>
            </Card>

            {/* State-wise Stats */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  State-wise Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(stateWiseData).map(([state, data]) => (
                  <div key={state} className="border-b border-border pb-3 last:border-b-0">
                    <div className="font-medium text-foreground">{state}</div>
                    <div className="text-sm text-muted-foreground">
                      {data.surveyed}+ surveyed, {data.reached}+ reached
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {data.locations} location{data.locations > 1 ? 's' : ''}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-primary" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{getTotalSurveyed()}+</div>
                  <div className="text-sm text-muted-foreground">Total Surveyed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{getTotalReached()}+</div>
                  <div className="text-sm text-muted-foreground">Total Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{locationsData.length}</div>
                  <div className="text-sm text-muted-foreground">Survey Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground">
                    {Object.keys(stateWiseData).length}
                  </div>
                  <div className="text-sm text-muted-foreground">States Covered</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Location Detail Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <MapPin className="w-6 h-6 text-primary" />
              {selectedLocation?.name} - Survey Details
            </DialogTitle>
          </DialogHeader>
          
          {selectedLocation && (
            <div className="space-y-8 py-4">
              {/* Location Info */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{selectedLocation.name}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground"><strong>City:</strong> {selectedLocation.city}</p>
                    <p className="text-muted-foreground"><strong>State:</strong> {selectedLocation.state}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground"><strong>Surveyed:</strong> {selectedLocation.surveyed}+ people</p>
                    <p className="text-muted-foreground"><strong>Reached:</strong> {selectedLocation.reached}+ people</p>
                  </div>
                </div>
              </div>

              {/* Overview Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{selectedLocation.surveyed}+</div>
                  <div className="text-sm text-muted-foreground">People Surveyed</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{selectedLocation.reached}+</div>
                  <div className="text-sm text-muted-foreground">People Reached</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">{selectedLocation.workerTypes.length}</div>
                  <div className="text-sm text-muted-foreground">Worker Categories</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {Math.round((selectedLocation.reached / selectedLocation.surveyed) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Reach Rate</div>
                </div>
              </div>

              {/* Worker Types */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Worker Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.workerTypes.map((type, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Insights */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Key Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {selectedLocation.keyInsights.map((insight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Impact Visualization */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Survey vs Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={[
                        { name: 'Surveyed', value: selectedLocation.surveyed },
                        { name: 'Reached', value: selectedLocation.reached }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#0066FF" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Impact Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Survey Coverage</span>
                      <span className="font-semibold">{selectedLocation.surveyed}+ people</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Donation Reach</span>
                      <span className="font-semibold">{selectedLocation.reached}+ people</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Efficiency Rate</span>
                      <span className="font-semibold">
                        {Math.round((selectedLocation.reached / selectedLocation.surveyed) * 100)}%
                      </span>
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