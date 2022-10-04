import React from 'react'
import './ProgressCircular.css'



export default function ProgressCircular(props) {

    // function counter(id, start, end, duration) {
    //     let obj = document.getElementById(id),
    //         current = start,
    //         range = end - start,
    //         increment = end > start ? 1 : -1,
    //         step = Math.abs(Math.floor(duration / range)),
    //         timer = setInterval(() => {
    //             current += increment;
    //             obj.textContent = current + " %";
    //             if (current == end) {
    //                 clearInterval(timer);
    //             }
    //         }, step);
    // }



    return (
        <div>
            <div className='flex' style={{
                width: "100%",
                height: 1.3*parseInt(props.size)+"px"
            }}>
                <div className="circle-skill"
                    style={{
                        width: props.size + "px",
                        height: props.size + "px"
                    }}>
                    {/* <style>{`
                        @keyframes anime{
                            100%{
                            stroke-dashoffset: ${(-2.75 * parseInt(props.value) + 450)};
                            }
                        }
                    `}</style> */}

                    <div className="outer-circle">
                        <div className="inner-circle">
                            <div id="count">
                                {/* {counter("count", 0, props.value, 2000)} */}
                                {props.value + " %"}
                            </div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" >
                        <circle cx={parseInt(props.size) * 0.5}
                            cy={parseInt(props.size) * 0.5}
                            r={parseInt(props.size) * 0.45} strokeLinecap="round"
                            style={{
                                strokeDasharray: props.size * 4.5 + "px",
                                strokeDashoffset: -2.75 * parseInt(props.value) + 450+ "px",
                            }} />

                    </svg>

                </div>
            </div>
            <div className='skillname flex'>
                {props.name}
            </div>

        </div>
    )
}
