import React from 'react';

//Redux
import store from './Redux/store'
import { Provider } from 'react-redux';

//firebase
// import { firebaseConfig } from './firebaseConfig';
// import firebase from 'firebase/app'

//Css
import './App.css';

//Components
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';



// firebase.initializeApp(firebaseConfig);

export default function App() {

  
  return (
    <Provider store = {store}>
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </Provider>
    
  );
}


