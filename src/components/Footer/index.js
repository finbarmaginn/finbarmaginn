import './index.css';

function Header(){
  const date = new Date();
  const year  = date.getFullYear();
  return (
    <footer className="App-footer">
      <div className="App-wrap">
        <p><small>Copyright Finbar Maginn 2020 - {year}</small></p>
      </div>
    </footer>
  )
}

export default Header;
