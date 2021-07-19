import logo from './me-min.jpg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <div className="App-wrap">
          <div className="App-flex">
            <article className="about">
              <img src={logo} className="App-logo" alt="logo" />
            </article>
            <article className="music">
              <iframe title="blackout" height="150" width="290" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/950619991&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </article>
            {/* <article className="music">
              <h2>Content Coming Soon...</h2>
            </article> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
