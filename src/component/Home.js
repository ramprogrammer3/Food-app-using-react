function Home(props){
    console.log(props);
    return (
        <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores animi non ipsum, magni sint velit consequatur repudiandae nemo quas maxime aut neque, iusto, reprehenderit explicabo accusantium rem esse enim!</h1>
            {props.greeting}
        </div>
    )
}

export default Home;