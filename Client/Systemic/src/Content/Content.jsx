import classes from'./Content.module.css'
import {Link} from 'react-router-dom'
const Content=()=>{
    return(
        <div >
            <Link className={classes.san} to='/newcoinform'>[start a new coin]</Link>
        </div>
    );
}
export default Content