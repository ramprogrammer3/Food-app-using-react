import style from './FoodImageCart.module.css';

const FoodImageCart = (props) =>{

    const imageCollection = props.image;
    

    return <>
        {imageCollection.map((item,i)=>{
            return(
                <div className={style.imageWrapper}>
                <img src={item.url} alt={item.name} id={item.name} key = {i} className = {style.image} />
                <h3>{item.name}</h3>
            </div>
            )
        })}
    </>
}

export default FoodImageCart;



               