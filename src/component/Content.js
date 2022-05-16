import style from './Content.module.css';
function Content(props) {
 const foodName = props.breakfast;
 
  return (
    <>
      <h2 className={style.h2}>My top five Favourite food</h2>
      <ul className={style.ul}>

          {foodName.map((item,i) =>{
            return <li key={i}><a href={`./index.html#${item.name}`}>{item.name}</a></li>
          })}
      </ul>
      <h2>Food Image Below</h2>
    </>
  );
}

export default Content;
