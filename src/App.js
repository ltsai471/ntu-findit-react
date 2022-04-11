import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuthToken } from "./utils";
import { verifyAccount } from "./webAPI";
import AuthContext from "./contexts";
import axios from 'axios';
import {
    LoginPage,
    Navigation,
    Footer,
    OrderListContainer,
    OrderDetail,
    ApplyLossPage,
    TestPage,
    SignIn,
    SignUp,
    LostDeclaration,
    MainPage,
    LostReturn,
    PersonalPage,
} from "./components";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getAuthToken()) {
      verifyAccount().then((response) => {
        if (response.token != null) {
          setUser(response.token);
        }
      });
    }
  }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <Router>
                {/* <Navigation /> */}
                <Routes>
                    {/* <Route path="/login" element={<LoginPage />} /> */}
                    <Route path="/" element={<SignIn pageColor="primary" />} />
                    <Route path="/signUp" element={<SignUp pageColor="primary" />} />
                    <Route path="/lostReport" element={<LostDeclaration title="遺失物申報" pageColor="secondary" />} />
                    <Route path="/lostPublish" element={<LostDeclaration title="拾獲案件刊登" pageColor="secondaryLight" />} />
                    <Route path="/mainPage" element={<MainPage />} />
                    <Route path="/lostReturn" element={<LostReturn pageColor="secondaryLight" />} />
                    <Route path="/personalPage" element={<PersonalPage pageColor="primary" />} />
                    {/* <Route path="/applyloss " element={<ApplyLossPage />} />
                    <Route path="/test " element={<TestPage />} /> */}
          {/* <Route path="/order" element={<OrderListContainer />} /> */}
          {/* <Route path="/order/:orderDetail" element={<OrderDetail />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </AuthContext.Provider>
  );
}