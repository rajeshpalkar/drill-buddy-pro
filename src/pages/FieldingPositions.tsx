
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { Users, Target } from 'lucide-react';

const FieldingPositionsPage: React.FC = () => {
  const fieldingPositions = [
    { name: "Wicket Keeper", area: "Behind stumps" },
    { name: "First Slip", area: "Close catching" },
    { name: "Second Slip", area: "Close catching" },
    { name: "Third Slip", area: "Close catching" },
    { name: "Gully", area: "Close catching" },
    { name: "Point", area: "Off side" },
    { name: "Cover", area: "Off side" },
    { name: "Extra Cover", area: "Off side" },
    { name: "Mid Off", area: "Off side" },
    { name: "Mid On", area: "On side" },
    { name: "Mid Wicket", area: "On side" },
    { name: "Square Leg", area: "On side" },
    { name: "Fine Leg", area: "On side" },
    { name: "Third Man", area: "Off side" },
    { name: "Long On", area: "Boundary" },
    { name: "Long Off", area: "Boundary" }
  ];

  const paceFieldSetup = [
    "Slip cordon (2-3 slips + gully)",
    "Point and cover",
    "Mid off and mid on",
    "Fine leg",
    "Third man for edges"
  ];

  const spinFieldSetup = [
    "Close catching (slip, silly point)",
    "Deep mid wicket",
    "Long on and long off",
    "Covers and point",
    "Short leg for bat-pad catches"
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Users size={28} className="text-cricket-green" />
          <h1 className="text-2xl font-bold text-cricket-green">Fielding Positions</h1>
        </div>

        {/* Cricket Field Diagram */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target size={20} />
              Cricket Field Layout
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-green-100 rounded-lg p-8 min-h-96">
              {/* Simple field representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-yellow-200 w-16 h-4 rounded border-2 border-yellow-600">
                  <span className="text-xs font-bold text-center block">PITCH</span>
                </div>
              </div>
              
              {/* Field positions marked around */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <Badge>Long On</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge>Long Off</Badge>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Badge>Square Leg</Badge>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Badge>Point</Badge>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Badge>Wicket Keeper</Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <Badge>Slips</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Fielding Positions */}
        <Card>
          <CardHeader>
            <CardTitle>All Fielding Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {fieldingPositions.map((position) => (
                <div key={position.name} className="p-3 bg-cricket-cream rounded-lg">
                  <div className="font-medium text-sm">{position.name}</div>
                  <div className="text-xs text-cricket-pitch">{position.area}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Field Settings */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-cricket-green">Pace Bowling Field</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {paceFieldSetup.map((setup, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cricket-green rounded-full"></div>
                    <span className="text-sm">{setup}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-cricket-green">Spin Bowling Field</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {spinFieldSetup.map((setup, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cricket-green rounded-full"></div>
                    <span className="text-sm">{setup}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FieldingPositionsPage;
