import React from 'react';

export default function Container(props) {
    return (
        <>
            <div id={props.id} className="main-container">
                <section
                    className={
                        'section-container ' +
                        (props.displayGrid ? 'section-container-grid' : '')
                    }>
                    {props.children}
                </section>
            </div>
        </>
    );
}
