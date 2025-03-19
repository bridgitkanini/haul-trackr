export interface TripData {
  currentLocation: string;
  pickupLocation: string;
  dropoffLocation: string;
  currentCycleHours: number;
  startTime?: Date;
}
export interface RoutePoint {
  type: 'pickup' | 'dropoff' | 'rest' | 'fuel';
  location: string;
  coordinates: [number, number];
  time: Date;
  duration?: number; // in minutes
}
export interface RouteData {
  points: RoutePoint[];
  totalDistance: number;
  totalDuration: number;
}