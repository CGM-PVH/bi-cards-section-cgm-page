import './styles/global.css';

const main = () => {
    return `
        <div>
            <h1>Hello World!</h1>
        </div>
`
}
document.querySelector('body').innerHTML = main();

export default main;
