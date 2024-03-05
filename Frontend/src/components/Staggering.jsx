import { Box, Hidden } from "@mui/material";
import { React, useEffect } from "react";
import anime from "animejs";
import "../components/staggering.css"; // Import a CSS file for additional styling

const Staggering = () => {
    // Define the number of rows and columns
    const rows = 70;
    const columns = 70;

    // Create an array to represent the grid
    const gridArray = Array.from(
        { length: rows * columns },
        (_, index) => index
    );

    const animateGrid = () => {
        anime({
            targets: ".grid-item",
            scale: [
                { value: 0.1, easing: "easeOutSine", duration: 500 },
                { value: 1, easing: "easeInOutQuad", duration: 1200 },
            ],
            opacity: 1,
            easing: "easeInOutQuad",
            duration: 800,
            delay: anime.stagger(200, {
                grid: [rows, columns],
                from: "first",
            }),
            complete: animateGrid,
        });
    };

    useEffect(() => {
        animateGrid(); // Start the initial animation
    }, [rows, columns]);
    return (
        <Box
            overflow={"hidden"}
            height={"100%"}
            width={"100%"}
            position={"absolute"}
        >
            <div className="grid-container">
                {gridArray.map((index) => (
                    <Box
                        key={index}
                        className="grid-item"
                        bgcolor={"tomato"}
                        sx={{ opacity: 0.5 }}
                    ></Box>
                ))}
            </div>
        </Box>
    );
};

export default Staggering;
