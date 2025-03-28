import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ChevronLeft, ChevronRight, Calendar, Clock, Truck } from 'lucide-react';
import { TripData } from '../types/tripTypes';
interface EldLogsPageProps {
  tripData: TripData;
}
const EldLogsPage: React.FC<EldLogsPageProps> = ({
  tripData
}) => {
  const [currentDay, setCurrentDay] = useState(0);
  const totalDays = 3; // Mock data for a 3-day trip
  const handlePreviousDay = () => {
    setCurrentDay(prev => Math.max(0, prev - 1));
  };
  const handleNextDay = () => {
    setCurrentDay(prev => Math.min(totalDays - 1, prev + 1));
  };
  const generateMockEldData = (day: number) => {
    const startDate = tripData.startTime || new Date();
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + day);
    // Format date as MM/DD/YYYY
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
    // Generate different log entries based on the day
    let logEntries = [];
    if (day === 0) {
      // First day - pickup and initial driving
      logEntries = [{
        start: '06:00',
        end: '07:00',
        status: 'On Duty',
        location: tripData.pickupLocation,
        notes: 'Pre-trip inspection & loading'
      }, {
        start: '07:00',
        end: '11:00',
        status: 'Driving',
        location: 'I-80 E',
        notes: 'En route'
      }, {
        start: '11:00',
        end: '11:30',
        status: 'On Duty',
        location: 'Rest Area - I-80 Mile Marker 295',
        notes: 'Break'
      }, {
        start: '11:30',
        end: '15:30',
        status: 'Driving',
        location: 'I-80 E',
        notes: 'En route'
      }, {
        start: '15:30',
        end: '16:15',
        status: 'On Duty',
        location: 'Pilot Travel Center',
        notes: 'Fueling & break'
      }, {
        start: '16:15',
        end: '20:15',
        status: 'Driving',
        location: 'I-80 E',
        notes: 'En route'
      }, {
        start: '20:15',
        end: '06:15',
        status: 'Sleeper',
        location: 'TA Travel Center',
        notes: '10-hour rest period'
      }];
    } else if (day === 1) {
      // Second day - full driving day
      logEntries = [{
        start: '06:15',
        end: '06:45',
        status: 'On Duty',
        location: 'TA Travel Center',
        notes: 'Pre-trip inspection'
      }, {
        start: '06:45',
        end: '10:45',
        status: 'Driving',
        location: 'I-80 E',
        notes: 'En route'
      }, {
        start: '10:45',
        end: '11:15',
        status: 'On Duty',
        location: 'Rest Area',
        notes: 'Break'
      }, {
        start: '11:15',
        end: '15:15',
        status: 'Driving',
        location: 'I-80 E',
        notes: 'En route'
      }, {
        start: '15:15',
        end: '16:00',
        status: 'On Duty',
        location: 'Flying J Travel Center',
        notes: 'Fueling & break'
      }, {
        start: '16:00',
        end: '20:00',
        status: 'Driving',
        location: 'I-80 E',
        notes: 'En route'
      }, {
        start: '20:00',
        end: '06:00',
        status: 'Sleeper',
        location: 'Rest Area',
        notes: '10-hour rest period'
      }];
    } else {
      // Third day - arrival and delivery
      logEntries = [{
        start: '06:00',
        end: '06:30',
        status: 'On Duty',
        location: 'Rest Area',
        notes: 'Pre-trip inspection'
      }, {
        start: '06:30',
        end: '10:30',
        status: 'Driving',
        location: 'I-80 E',
        notes: 'En route'
      }, {
        start: '10:30',
        end: '11:00',
        status: 'On Duty',
        location: 'Rest Area',
        notes: 'Break'
      }, {
        start: '11:00',
        end: '13:00',
        status: 'Driving',
        location: 'Local Roads',
        notes: 'Approaching destination'
      }, {
        start: '13:00',
        end: '14:00',
        status: 'On Duty',
        location: tripData.dropoffLocation,
        notes: 'Delivery & unloading'
      }, {
        start: '14:00',
        end: '14:30',
        status: 'Off Duty',
        location: tripData.dropoffLocation,
        notes: 'Break'
      }, {
        start: '14:30',
        end: '18:30',
        status: 'Driving',
        location: 'Return Route',
        notes: 'Returning to base'
      }, {
        start: '18:30',
        end: '06:00',
        status: 'Off Duty',
        location: 'Home Terminal',
        notes: 'End of shift'
      }];
    }
    return {
      date: formattedDate,
      entries: logEntries
    };
  };
  const eldData = generateMockEldData(currentDay);
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Driving':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'On Duty':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Off Duty':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Sleeper':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200';
    }
  };
  const downloadPdf = () => {
    alert('PDF download functionality would be implemented here');
  };
  return <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              ELD Daily Logs
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Trip from {tripData.pickupLocation} to {tripData.dropoffLocation}
            </p>
          </div>
          <button onClick={downloadPdf} className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </button>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <button onClick={handlePreviousDay} disabled={currentDay === 0} className={`p-2 rounded-md ${currentDay === 0 ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'}`}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-teal-600 dark:text-teal-500 mr-2" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Day {currentDay + 1} - {eldData.date}
              </h2>
            </div>
            <button onClick={handleNextDay} disabled={currentDay === totalDays - 1} className={`p-2 rounded-md ${currentDay === totalDays - 1 ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'}`}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-full max-w-3xl h-16 bg-slate-200 dark:bg-slate-700 rounded-lg relative">
                {/* Visual representation of HOS */}
                <div className="absolute inset-y-0 left-0 bg-green-500 dark:bg-green-600" style={{
                width: '29%'
              }}></div>
                <div className="absolute inset-y-0 bg-yellow-500 dark:bg-yellow-600" style={{
                left: '29%',
                width: '12%'
              }}></div>
                <div className="absolute inset-y-0 bg-green-500 dark:bg-green-600" style={{
                left: '41%',
                width: '25%'
              }}></div>
                <div className="absolute inset-y-0 bg-purple-500 dark:bg-purple-600" style={{
                left: '66%',
                width: '34%'
              }}></div>
                {/* Time markers */}
                <div className="absolute top-full left-0 text-xs text-slate-600 dark:text-slate-400 mt-1">
                  00:00
                </div>
                <div className="absolute top-full left-1/4 text-xs text-slate-600 dark:text-slate-400 mt-1">
                  06:00
                </div>
                <div className="absolute top-full left-1/2 text-xs text-slate-600 dark:text-slate-400 mt-1">
                  12:00
                </div>
                <div className="absolute top-full left-3/4 text-xs text-slate-600 dark:text-slate-400 mt-1">
                  18:00
                </div>
                <div className="absolute top-full right-0 text-xs text-slate-600 dark:text-slate-400 mt-1">
                  24:00
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <div className="flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                Driving
              </div>
              <div className="flex items-center px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                On Duty
              </div>
              <div className="flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                Off Duty
              </div>
              <div className="flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                Sleeper
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                    Time Period
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {eldData.entries.map((entry, index) => <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-750'}>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-200">
                      {entry.start} - {entry.end}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(entry.status)}`}>
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-200">
                      {entry.location}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-200">
                      {entry.notes}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Daily Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center text-slate-900 dark:text-white mb-2">
                  <Clock className="h-5 w-5 text-teal-600 dark:text-teal-500 mr-2" />
                  <h4 className="text-sm font-medium">Hours of Service</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Driving:</span> 8.0 hrs
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">On Duty:</span> 2.5 hrs
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Off Duty:</span> 0.0 hrs
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Sleeper:</span> 10.0 hrs
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Cycle Remaining:</span> 62.0
                    hrs
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center text-slate-900 dark:text-white mb-2">
                  <Truck className="h-5 w-5 text-teal-600 dark:text-teal-500 mr-2" />
                  <h4 className="text-sm font-medium">Vehicle Information</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Truck #:</span> TRK-12345
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Odometer Start:</span> 45,678
                    mi
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Odometer End:</span> 46,089 mi
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Distance:</span> 411 mi
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center text-slate-900 dark:text-white mb-2">
                  <Calendar className="h-5 w-5 text-teal-600 dark:text-teal-500 mr-2" />
                  <h4 className="text-sm font-medium">Certification</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Driver:</span> John Doe
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Driver ID:</span> DRV-9876
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Certified:</span> Yes
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">Timestamp:</span>{' '}
                    {eldData.date} 23:59
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <Link to="/route-details" className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-md hover:bg-slate-300 dark:hover:bg-slate-600">
              Back to Route
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default EldLogsPage;