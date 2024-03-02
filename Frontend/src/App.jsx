import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Canvas from "./pages/Canvas";
import NoteFound from "./pages/NotFound";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import SignUpStepTwo from "./pages/SignUpStepTwo";
import anime from 'animejs/lib/anime.es.js';

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: "Satoshi",
        },
    });
    // 1st create grids all over the page
    // then apply anime for every click over the page 

    useEffect(() =>  {

           //step 1: create small grids for entire webpage

           function createGridElements(rows,columns){
                const totalElements = rows * columns;
                const fragments = document.createDocumentFragment();

                for (let i =0; i< totalElements; i++){
                    const el = document.createElement('div');
                    el.classList.add('el');
                    fragments.appendChild(el);

                }

                document.body.appendChild(el);
            }
            // creatingn grids finally 
            createGridElements(50,50);

            anime({
                targets:'.el',
                scale: [
                    { value: 0.1, easing: 'easeOutSine', duration: 500 },
                    { value: 1, easing: 'easeInOutQuad', duration: 1200 }
                ],

                delay: anime.stagger(200, { grid: [50, 50], from: 'center' })

                
            });



           },[]);


    return (
        <ThemeProvider theme={theme}>
            {/* <Login /> */}
            {/* <Canvas /> */}
            <SignUpStepTwo />
        </ThemeProvider>
        // <Router>
        //       <Switch>
        //           <Route path="/" component={Login} />
        //           <Route path="/canvas" component={Canvas} />
        //           <Route component={NoteFound} />
        //       </Switch>
        //   </Router>
    );
}

export default App;
