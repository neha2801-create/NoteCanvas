import React from "react";

import { motion } from "framer-motion";
import { Container } from "@mui/material";

const Canvas = () => {
    return (
        <div id="svg-container" style={{ zIndex: -1 }}>
            <svg
                width="100vw"
                height="100vh"
                viewBox="0 0 2031 1839"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="morphing-svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1879.97 848.178C1918.09 1094.17 1620.58 1244.03 1442.91 1418.46C1329.85 1529.45 1205.24 1611.59 1054.05 1658.99C893.556 1709.32 718.361 1771.04 569.812 1692.21C418.263 1611.79 384.702 1424.4 315.865 1267.28C225.725 1061.54 36.8516 862.429 113.796 651.378C195.146 428.245 446.945 307.682 680.842 266.182C897.766 227.693 1093.49 346.207 1291.66 442.391C1514.47 550.531 1842.05 603.478 1879.97 848.178Z"
                    fill="#FF5300"
                />
            </svg>
        </div>
    );
};

export default Canvas;
