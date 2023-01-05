import './App.css';
import Banner from './Banner';
import Cards from './Cards';
import Featuredcards from './Featuredcards';
import Featuredcontent from "./Featuredcontent"
import Footer from './Footer';
import Testimonials from './Testimonials';


function App() {
  return (
    <div className="App">
      <Featuredcontent
title="LETS GET STARTED"
heading="Smart Partner For to Grow your Best Businnes "
para="Leverage our proven process of building intuitive, easy-to-use applications that attract and retain user attention."
/>
<Banner
  title="Get Organic Traffict From search Engine Optimazaion"
  para=" We design functional interfaces for an aesthetically pleasing digital presence that helps tell a story and boost brand performance."
/>
    <Cards/>
    <Testimonials/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   
    <Featuredcards
    title="Make sales even when you’re offline."
    heading=" Join 100,000 others who live more flexibly with Gumroad."
    contenttitle1="Mr.john Doe"
    contenttitle1para=" Stay relevant in the competitive Android landscape. Embrace latest tech and design to make your mobile app scalable"
    contenttitle2="Mr.Ronal G."
    contenttitle2para="Stand out from the Apple Store crowd. We mix an analytical mindset with creativity to deliver a tailor-made solution "
    contenttitle3="mRS.cRISTINA"
    contenttitle3para="Expand your market reach while saving time and money. Use one codebase to build an app that’ll delight both Android"
    bgcolor="black"
    textcolor="white"
    />

    <Footer/>
    </div>
  );
}

export default App;
