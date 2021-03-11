import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Sidebar from './Components/Siidebar/sidbar';
import Content from './Components/Content/content';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="wrapper">
        <Navbar />
        <Sidebar />
        <Content />
        <Footer />
    </div>
  );
}
export default App;
