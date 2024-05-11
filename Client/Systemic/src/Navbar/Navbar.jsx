import classes from "../Navbar/Navbar.module.css";

const Navbar=()=>
{    return(
        <div className={classes.nav}>
            <div className={classes.leftnav}>
                <div className={classes.leftnav1}>
                    <div className={classes.navicon}>
                        <img className={classes.imagetitle} srcSet="https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75" alt="logo" />
                    </div>
                </div>
                <div className={classes.lefttnav2}>
                    <div className={classes.communication}>
                        <ul className={classes.contactlinks1}>
                            <li className={classes.links}><a className={classes.hyper} href="https://twitter.com/pumpdotfun" target="blank">[twitter]</a></li>
                            <li className={classes.links}><a className={classes.hyper} href="https://t.me/pumpfunsupport" target="blank">[support]</a></li>
                        </ul>
                        <ul className={classes.contactlinks2}>
                            <li className={classes.links}><a className={classes.hyper} href="https://t.me/launchonpump" target="blank">[telegram]</a></li>
                            <li className={classes.links}><a className={classes.hyper} href="">[how it works]</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.rightnav}>
                <button className={classes.cw}>[Connect Wallet]</button>
            </div>
        </div>
    );
}
export default Navbar