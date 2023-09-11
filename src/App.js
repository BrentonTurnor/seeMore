import './App.css';
import { SpinningCircles } from 'react-loading-icons';
import { ReactNavbar } from './NavBar';
import { Leaderboard } from './Components/Leaderboard';
import { Contact } from './Components/Contact';

function App() {

  const Home = () => <h1 className='text'>Welcome Fellow HeMan Punter!</h1>;
  const ClubHistory = () => <h1 className='text'>Club History</h1>;
  //const Contact = () => <h1 className='text'>Contact</h1>;

  
  function hideLoadingDiv() {
    setTimeout(function () {
      document.getElementById('LOADING').classList.add('hidden');
      document.getElementById('PASSWORD').style.display = 'flex';
    }, 4000)
  }

  function showWelcome() {
    document.getElementById('PASSWORD').style.setProperty('display', 'none', 'important');
    document.getElementById('WELCOME').style.display = 'flex'
    document.getElementById("INCORRECT").style.setProperty('display', 'none')
  }

  function incorrectMessage() {
    document.getElementById("INCORRECT").style.setProperty('display', 'flex')
  }

  const enterEvent = (e) => {
    if (e.key === 'Enter') {
      //console.log('Password entered');
      if (e.target.value === 'Punters') {
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
      <header id='WELCOME' className='Welcome-div'>
        <div className='navbar'>
          <ReactNavbar
            color="#1a1a1a"
            menu={[
              { name: "HOME", to: "/", component: Home },
              { name: "LEADERBOARD", to: "/leaderboard", component: Leaderboard },
              { name: "CLUB HISTORY", to: "/clubhistory", component: ClubHistory },
              { name: "CONTACT", to: "/contact", component: Contact },
            ]}
            social={[
              {
                name: "Facebook",
                url: "https://www.facebook.com/messages/t/6561965867194356",
                icon: ["fab", "facebook-f"],
              },
              {
                name: "Sportsbet",
                url: "http://sportsbet.com.au/",
                icon: "https://pbs.twimg.com/profile_images/1693386181864812544/iqgEuLln_400x400.jpg",
              },
              {
                name: "Twitter",
                url: "https://twitter.com/BrentonTurnor",
                icon: ["fab", "twitter"],
              },
            ]}
            sticky
          />
        </div>
      </header>
      <div className="App-header">

        <span id="LOADING" className='Loading-div'>
          <div>
            Loading
          </div>
          <div className='Disappearingloading'>
            <SpinningCircles fill='#fc6431' style={{ marginLeft: '10px' }} />
          </div>
        </span>
        <div id="PASSWORD" className='Password-div'>
          Password: <input className='Text-input' type='password' onKeyDown={enterEvent} />
        </div>
        <div id="INCORRECT" className='Incorrect-div'>
          Incorrect Password
        </div>
      </div>

    </div>
  );
}

export default App;
