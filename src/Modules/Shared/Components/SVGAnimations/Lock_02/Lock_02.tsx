import {useEffect, useState} from 'react'
import "./Lock_02.css"

const Lock02 = () => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <svg
            viewBox="0 0 210 297"
            className={active ? "active" : ""}
            width="340"
        >
            <g>
                <rect
                    className="svg-elem-1"
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeWidth: "13.2934",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                    width="164.35541"
                    height="130.51999"
                    x="22.822296"
                    y="116.13557"
                    ry="45.110275"
                />

                <path
                    className="svg-elem-2"
                    d="M 146.94726,111.79208 V 74.029495 c 0,-15.767414 -14.29474,-28.549429 -31.9282,-28.549429 H 97.469046 c -19.007598,0 -34.416304,13.778098 -34.416304,30.774243 v 35.537771"
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />

                <circle
                    className="svg-elem-3"
                    cx="105"
                    cy="179.51582"
                    r="29.136078"
                    style={{
                        fill: "none",
                        stroke: "black",
                        strokeWidth: "12",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />
            </g>
        </svg>
    );
}
export default Lock02;
