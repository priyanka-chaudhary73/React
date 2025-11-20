import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';
import Student from './components/Student.jsx';
import UserGreeting from './components/UserGreeting.jsx';
import List from './components/List.jsx';
import Button1 from './components/Button1.jsx';
import ProfilePicture from './components/ProfilePicture.jsx';
import MyComponent from './components/MyComponent.jsx';
import Counter from './components/Counter.jsx';
import MyComponent1 from './components/MyComponent1.jsx';
import ColorPicker from './components/ColorPicker.jsx';
import MyComponent2 from './components/MyComponent2.jsx';
import MyComponent3 from './components/MyComponent3.jsx';
import MyComponent4 from './components/MyComponent4.jsx';
import MyComponent5 from './components/MyComponent5.jsx';
import ToDoList from './components/ToDoList.jsx';
import MyComponent7 from './components/MyComponent7.jsx';
import DigitalClock from './components/DigitalClock.jsx';
import ComponentA from './components/MyComponentA.jsx';
import ComponentB from './components/MyComponentB.jsx';
import ComponentC from './components/MyComponentC.jsx';
import ComponentD from './components/MyComponentD.jsx';
import MyComponentAa from './components/MyComponentAa.jsx';



function App() {

  const fruits = [{id : 1, name : "apple",      calories : 95}, 
        {id : 2, name : "orange", calories : 73}, 
        {id : 3, name : "banana", calories : 105}, 
        {id : 4, name : "coconut", calories : 1405}, 
        {id : 5, name : "pineapple", calories : 453}];

        const vegetables = [{id : 6, name : "cucumber",  calories : 14}, 
        {id : 7, name : "potatoes", calories : 77}, 
        {id : 8, name : "broccoli", calories : 34}, 
        {id : 9, name : "carrots", calories : 41}, 
        {id : 10, name : "tomato", calories : 20}];
 
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
       {fruits.length > 0 &&
       <List items = {fruits} category = "Fruits"/>}
       {vegetables.length > 0 &&
       <List items = {vegetables} category = "Vegetables"/>}
       <Button1/>
       <ProfilePicture/>
       <MyComponent/>
       <Counter/>
       <MyComponent1/>
       <ColorPicker/>
       <MyComponent2/>
       <MyComponent3/>
       <MyComponent4/>
       <MyComponent5/>
       <ToDoList/>
       <MyComponent7/>
       <DigitalClock/>
       <MyComponentA/>
       <MyComponentB/>
       <MyComponentC/>
       <MyComponentD/>
       <MyComponentAa/>
      </>
  );
}

export default App;
