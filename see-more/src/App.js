import { DisappearedLoading } from 'react-loadingg';
import './App.css';


function App() {

  function hideLoadingDiv() {
    setTimeout(function(){
      document.getElementById('LOADING').classList.add('hidden');
      document.getElementById('PASSWORD').style.display='flex';
    },4000)
  }

  function showWelcome() {
    document.getElementById('PASSWORD').style.setProperty('display', 'none', 'important');
    document.getElementById('WELCOME').style.display='flex'
    document.getElementById("INCORRECT").style.setProperty('display', 'none')
  }

  function incorrectMessage() {
    document.getElementById("INCORRECT").style.setProperty('display', 'flex')
  }

  const enterEvent = (e) => {
    if (e.key === 'Enter') {
      //console.log('Password entered');
      if (e.target.value === 'Punters'){
        console.log("Correct password")
        console.log(e.target.value)
        showWelcome()
      }
      else {
        console.log("Incorrect password")
        incorrectMessage()
      }
    }

  }


  hideLoadingDiv()

  return (
    <div className="App">
      <header className="App-header">
        <span id="LOADING" className='Loading-div'>
          <div>
            Loading
          </div>
          <div className='Disappearingloading'>
            <DisappearedLoading color='rgb(29, 133, 50)' size='small' style={{marginLeft: '10px'}} />
          </div>
        </span>
        <div id="PASSWORD" className='Password-div'>
          Password: <input className='Text-input'type='password' onKeyDown={enterEvent}/>
        </div>
        <div id="WELCOME" className='Welcome-div'>
          Welcome Fellow HeMan Punter!
        </div>
        <div id="INCORRECT" className='Incorrect-div'>
          Incorrect Password
        </div>
      </header>
    </div>
  );
}

export default App;
