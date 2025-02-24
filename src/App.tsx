import { useState, useEffect } from 'react';
import Image from './components/Image.tsx';
import './App.css';

interface ImageItem {
  title: string;
  url: string;
  description: string;
}

interface ApiResponse {
  data: ImageItem[];
}

function App() {
  const [info, setInfo] = useState<ImageItem[] | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      console.log('Fetching data...');
      try {
        const response = await fetch('https://fakerapi.it/api/v1/images?_width=380');
        console.log(response);
        const { data }: ApiResponse = await response.json();
        setInfo(data);
      } catch (error: unknown) {
        console.error('Error fetching data:', error instanceof Error ? error.message : error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <>
      {info && (
        <div>
          {info.map((item, index) => (
            <Image 
              key={index}
              title={item.title} 
              url={item.url} 
              description={item.description} 
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;