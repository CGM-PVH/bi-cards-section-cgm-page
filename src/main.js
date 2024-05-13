import './styles/global.css';
import cards from "./components/BiSectionCards/cards.js";

const main = () => {
    return `
        <div id="content">
            <!--COMPONENT LOAD-->
        </div>
`
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('app').innerHTML += main()
    document.getElementById('content').innerHTML += cards()
})

export default main;
