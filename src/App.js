
import './App.css';
import Content from './Contents/Content';
import Slider from './Largeslider/Slider';
import Slick from './SlickSlider/Slick';
import { Provider } from 'react-redux';
import store from './Stores/store';


function App() {

  


  return (
  <>
  <Provider store={store}>
  <Slick/>
<Slider/>
<Content />



  </Provider>



  </>
  );
}

export default App;
