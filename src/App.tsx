import React, { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router";

export class App extends React.Component {
  render(): ReactNode {
    return (
      <BrowserRouter>
        <Routes>
          {routes.map((item, index) => 
           ( <Route
            path={item.path}
            key={index}
            element={<item.component></item.component>}
          ></Route>)
          )}
        </Routes>
      </BrowserRouter>
    );
  }
}
