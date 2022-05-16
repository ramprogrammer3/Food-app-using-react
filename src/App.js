// import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Content from './component/Content';
import FoodImageCart from './component/FoodImageCart';

const imageObj = [
  {
      name : 'Samosa',
      url : "https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900",
  },
  {
    name: "PaniPuri",
    url:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Sweet__Spicy_Pineapple_Pani_Puri_Recipe_.jpg"
  },
  {
    name : "Litti",
    url: 'https://i.pinimg.com/564x/ee/fd/34/eefd34574bfa4ec704b3c35e55540e81.jpg',
  },
  {
    name : "Rasgulla",
    url:'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe-1-500x500.jpg',
  },
  {
    name :"Jalebi",
    url : 'https://imgk.timesnownews.com/story/iStock-857489850.jpg?tr=w-400,h-300,fo-auto',
  },
];



function App() {
  
  return (
    <div>

      <Header />
      <Content breakfast = {imageObj} />
      <FoodImageCart image = {imageObj} />
      {/* <ProductCart /> */}
      
        
    </div>
  );
}

export default App;
