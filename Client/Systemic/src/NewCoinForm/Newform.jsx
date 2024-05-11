import classes from './Newform.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NewCoinForm = () => {
    const [showMoreOptions, setShowMoreOptions] = useState(false);

    const toggleOptions = () => {
        setShowMoreOptions(!showMoreOptions);
    };

    return (
        <>
            <div className={classes.form}>
                <div className={classes.top}>
                    <Link className={classes.goback} to='/'>[go back]</Link>
                </div>
                <div className={classes.down}>
                    <form className={classes.fom} action="">
                        <div className={classes.upper}>
                            <div className={classes.lin}>
                                <label htmlFor="cname">name</label>
                                <input type="text" name="cname" id="cname" />
                            </div>

                            <div className={classes.lin}>
                                <label htmlFor="cname">ticker</label>
                                <input type="text" name="cname" id="cname" />
                            </div>

                            <div className={classes.lin1}>
                                <label htmlFor="cname">description</label>
                                {/* <input type="textarea" name="cname" id="cname" /> */}
                                <textarea name="description" id="desc"></textarea>
                            </div>
                            <div className={classes.lin2}>
                                <label htmlFor="cname">image</label>
                                <input type="file" />
                            </div>
                        </div>
                        <div className={classes.downform}>
                            <h3 onClick={toggleOptions}>
                                {showMoreOptions ? 'Hide more options ↓' : 'Show more options ↑'}
                            </h3>
                            {showMoreOptions && (
                                <>
                                    <div className={classes.lin}>
                                        <label htmlFor="cname">twitter link</label>
                                        <input type="text" name="cname" id="cname" placeholder='(optional)' />
                                    </div>
                                    <div className={classes.lin}>
                                        <label htmlFor="cname">telegram link</label>
                                        <input type="text" name="cname" id="cname" placeholder='(optional)' />
                                    </div>
                                    <div className={classes.lin}>
                                        <label htmlFor="cname">website</label>
                                        <input type="text" name="cname" id="cname" placeholder='(optional)' />
                                    </div>
                                </>
                            )}
                        </div>
                        <button className={classes.button1}>Create coin</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewCoinForm;
