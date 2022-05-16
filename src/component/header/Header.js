import style from './Header.module.css';


const Header = () =>{
    var headerObj = [
        {header : "Home",id: '1',href: "#home"},
        {header : "News",id: '2',href: "#news"},
        {header : "Contact",id: '3',href: "#contact"},
        {header : "About",id: '4',href: "#about"},
        {header : "Product",id: '5',href: "#product"},
      ]

    return(
        <ul className={style.ul}>
            {headerObj.map((item) =>{
        return <li key={item.id} className = {style.li}><a href={`./index.html`} className={style.a}>{item.header}</a></li>
      })}    
        </ul>
    )


}
export default Header;