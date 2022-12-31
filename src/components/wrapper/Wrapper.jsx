import React from 'react';
import classes from "./Wrapper.module.scss";

const Wrapper = ({
                     children,
                     error = ''
                 }) => {
    return <div className={classes['container']}>
        <div>
            {children}
        </div>
        <span>{error}</span>
    </div>
}

export default Wrapper;