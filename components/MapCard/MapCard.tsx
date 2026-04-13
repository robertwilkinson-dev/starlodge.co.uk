import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect } from 'react';
import { Paper, Box } from '@mui/material';

export const MapCard = () => {

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? '';
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-2.5628569, 53.5969431],
      zoom: 15,
      attributionControl: false,
    });

  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <Box>
        <div ref={mapContainer}
          style={{
            height: '250px',
            width: '100%',
          }}
        />
      </Box>
    </Paper>
  )
};
