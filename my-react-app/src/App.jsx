import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';
import Student from './components/Student.jsx';
import UserGreeting from './components/UserGreeting.jsx';
import List from './components/List.jsx';


function App() {
 
  return(
    <>
       <Header/>
       <Food/>
       <Card/>
       <Button/>
       <Footer/>
       <Student name = "Priyanka" age = {50} isStudent = {true}/>
       <Student name = "Nezuko" age = {49} isStudent = {false}/>
       <Student name = "Zenitsu" age = {51} isStudent = {true}/>
       <Student name = "Giyu"/>
       <Student/>
       <UserGreeting isLoggedIn= {true} username = "Priyanka"/>
       <List/>
  );
}

export default App;
