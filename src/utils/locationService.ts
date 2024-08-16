import axios from 'axios';

export const geocodeLocation = async (location: string) => {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${location}`;
    const response = await axios.get(url);
    if (response.data.length > 0) {
      console.log('Geocoded location:', response.data[0]);
      return response.data[0]; // Return the first result
    } else {
      throw new Error('Location not found');
    }
  } catch (error) {
    console.error('Error geocoding location:', error);
    throw error;
  }
};

export const fetchHospitals = async (latitude: number, longitude: number) => {
  try {
    // Increase the bounding box size to cover a wider area
    const offset = 1.0;
    const minLat = latitude - offset;
    const maxLat = latitude + offset;
    const minLon = longitude - offset;
    const maxLon = longitude + offset;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=hospital&bounded=1&limit=50&viewbox=${minLon},${maxLat},${maxLon},${minLat}`;
    console.log('Fetching hospitals with URL:', url);
    const response = await axios.get(url);
    console.log('Fetched hospitals:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    throw error;
  }
};
