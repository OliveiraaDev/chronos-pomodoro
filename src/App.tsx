import { Fragment } from "react/jsx-runtime";
import { Heading } from "./components/Heading";
import './styles/tema.css';
import './styles/global.css';

 export function App () {
    console.log('oi');

    return (
    <Fragment>
        <Heading/>
        
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid consequatur ab vitae similique molestiae adipisci quos enim voluptatibus, assumenda perferendis dolorem nulla unde dolores provident! Culpa incidunt illum qui dignissimos?</p>
    </Fragment>);

}
