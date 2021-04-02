import React, {useState, useEffect, useContext} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {NavBar} from "./components/navbar"
import {Footer} from "./components/footer"
import {Blog} from "./views/blogDocAtHome"
import {Home} from "./views/home"
import {BlogEdit} from "./views/blogEdited"
import {About} from "./views/aboutUs"
import "./App.css"

export function App() {
  let NavOptions = {
    "1": "Home",
    "2": "Acerca de Nosotros",
    "3": "Blog",
    "4": "Galeria",
    "5": "Afiliate",
    "6": "Contacto"
  }
  let FootOptions = {
    "1":"PresbereArt"
  }
  let BlogImg = {
    "0": "https://picsum.photos/id/1002/800/300",
    "1": "https://picsum.photos/id/1015/800/300",
    "2": "https://picsum.photos/id/1016/800/300",
    "3": "https://picsum.photos/id/1018/800/300",
    "4": "https://picsum.photos/id/1023/800/300",
    "5": "https://picsum.photos/id/1024/800/300",
  }
  let cards = [];
  for (let i = 0; i<6; i++){
    cards[i]= <Blog blog1={BlogImg[i]} id={i}/>
  }
  return (
    <>
       <BrowserRouter>
          <div className="text-center">
            <NavBar nav1={NavOptions["1"]} nav2={NavOptions["2"]} nav3={NavOptions["3"]} nav4={NavOptions["4"]} nav5={NavOptions["5"]} nav6={NavOptions["6"]}/>
          </div>  
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about_us">
              <About/>
            </Route>
            <Route exact path="/blog">
              <div className="container">
                <div className="row">
                  {cards}
                </div>
              </div>
            </Route>
            <Route exact path="/post/:blogid">
              <div className="container">
                <BlogEdit blog1={BlogImg}/>
              </div>
            </Route>
          </Switch>
          <footer className="text-center">
            <Footer foot1={FootOptions["1"]}/>
          </footer>
       </BrowserRouter>
    </>
  );
}