import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { statesData, StateData } from "@/data/surveyData";
import { Users, TrendingUp, AlertCircle, MapPin, Settings } from "lucide-react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// State coordinates for India
const stateCoordinates: { [key: string]: [number, number] } = {
  rajasthan: [74.2179, 27.0238],
  punjab: [75.3412, 31.1471],
  haryana: [76.0856, 29.0588],
  delhi: [77.1025, 28.7041],
  up: [80.9462, 26.8467],
  mp: [78.6569, 22.9734],
  maharashtra: [75.7139, 19.7515]
};

const IndiaMapSection = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [mapInitialized, setMapInitialized] = useState(false);
  
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const COLORS = ['#0066FF', '#87CEEB', '#FF0000', '#FFB366', '#66FFB2'];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [78.9629, 20.5937], // Center of India
        zoom: 4.5,
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        addStateMarkers();
        setMapInitialized(true);
      });

    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Invalid Mapbox token. Please check your token and try again.');
    }
  };

  const addStateMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    statesData.forEach((state) => {
      const coordinates = stateCoordinates[state.id];
      if (!coordinates) return;

      // Create custom marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      markerElement.style.cssText = `
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #0066FF, #87CEEB);
        border: 3px solid white;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 12px;
        box-shadow: 0 4px 12px rgba(0,102,255,0.3);
        transition: all 0.3s ease;
        transform: scale(${Math.min(1.2, state.surveys / 2000)});
      `;
      
      markerElement.innerHTML = (state.surveys / 1000).toFixed(1) + 'k';
      
      // Add hover effects
      markerElement.addEventListener('mouseenter', () => {
        markerElement.style.transform = `scale(${Math.min(1.4, state.surveys / 1500)})`;
        markerElement.style.boxShadow = '0 6px 20px rgba(0,102,255,0.5)';
      });
      
      markerElement.addEventListener('mouseleave', () => {
        markerElement.style.transform = `scale(${Math.min(1.2, state.surveys / 2000)})`;
        markerElement.style.boxShadow = '0 4px 12px rgba(0,102,255,0.3)';
      });

      // Create marker and add click handler
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat(coordinates)
        .addTo(map.current!);

      // Add popup on hover
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        closeOnClick: false
      }).setHTML(`
        <div style="padding: 8px; font-family: system-ui;">
          <h4 style="margin: 0 0 4px 0; font-weight: 600; color: #0066FF;">${state.name}</h4>
          <p style="margin: 0; font-size: 14px; color: #666;">${state.surveys.toLocaleString()} surveys</p>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #888;">Click to view details</p>
        </div>
      `);

      markerElement.addEventListener('mouseenter', () => {
        popup.addTo(map.current!);
        marker.setPopup(popup);
      });

      markerElement.addEventListener('mouseleave', () => {
        popup.remove();
      });

      markerElement.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelectedState(state);
        setShowModal(true);
        popup.remove();
      });

      markers.current.push(marker);
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

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
            Interactive Survey Map of India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive survey coverage across key Indian states. 
            Click on any point to discover detailed insights and worker demographics.
          </p>
        </motion.div>

        {/* Mapbox Token Input */}
        {showTokenInput && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-card border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Settings className="w-5 h-5 text-primary" />
                  Mapbox Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  To display the interactive map, please enter your Mapbox public token. 
                  You can find this at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a> in your dashboard under Tokens.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                  <div className="flex gap-2">
                    <Input
                      id="mapbox-token"
                      type="text"
                      placeholder="pk.eyJ1Ijoi..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
                      Load Map
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Map and Stats Container */}
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="bg-card border-border shadow-xl overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="w-6 h-6 text-primary" />
                  Survey Coverage Map
                  {mapInitialized && (
                    <Badge variant="secondary" className="ml-auto">
                      {statesData.length} States
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  ref={mapContainer} 
                  className="w-full h-[600px] bg-muted/20 rounded-lg"
                  style={{ 
                    display: showTokenInput ? 'none' : 'block' 
                  }}
                />
                {showTokenInput && (
                  <div className="w-full h-[600px] bg-muted/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Enter your Mapbox token above to load the interactive map</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Map Legend */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white shadow-md"></div>
                    <span className="text-sm">Survey Points</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-9">
                    Size indicates survey volume
                  </p>
                  <p className="text-xs text-muted-foreground ml-9">
                    Hover for quick stats
                  </p>
                  <p className="text-xs text-muted-foreground ml-9">
                    Click for detailed insights
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Coverage Overview
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
                  <div className="text-sm text-muted-foreground">Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    {Math.round(statesData.reduce((acc, state) => acc + state.surveys, 0) / statesData.length).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Avg per State</div>
                </div>
              </CardContent>
            </Card>

            {/* Top States */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Top Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {statesData
                    .sort((a, b) => b.surveys - a.surveys)
                    .slice(0, 5)
                    .map((state, index) => (
                      <div key={state.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-medium text-muted-foreground">
                            #{index + 1}
                          </div>
                          <div className="text-sm font-medium">{state.name}</div>
                        </div>
                        <div className="text-sm text-primary font-semibold">
                          {state.surveys.toLocaleString()}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* State Detail Modal - Same as before */}
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

export default IndiaMapSection;