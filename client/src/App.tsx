import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Authentication from "./pages/authentication";
import DefaultLayoutAdmin from "./layouts/admin/layoutAdmin";
import PrivateRouterAdmin from "./routers/private.router.admin";
import { configAdmin } from "./routers/config.admin";
import PrivateRouterClient from "./routers/private.router.client";
import DefaultLayoutClient from "./layouts/layoutClient";

const pathAuth = ["/login", "/register"];

function App() {
  return (
    <>
      <Router>
        <Routes>
          {pathAuth.map((path) => (
            <Route key={path} path={path} element={<Authentication />} />
          ))}
          {configAdmin.map((path, index) => (
            <Route
              key={index}
              path={path.path}
              element={
                <PrivateRouterAdmin>
                  <DefaultLayoutAdmin children={<path.component />} />
                </PrivateRouterAdmin>
              }
            />
          ))}
          <Route
            path="/"
            element={
              <PrivateRouterClient>
                <DefaultLayoutClient />
              </PrivateRouterClient>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
