import './App.css';
import Header from './components/Header'; 
import ImageGallery from './components/imageg';
import GallaryFooter from './components/GallaryFooter';
import imageData from './components/imageData';

function App() {
  return (
    <div>
      <Header />
      <ImageGallery imageData={imageData} />
      <GallaryFooter />
    </div>
  );
}

export default App;
