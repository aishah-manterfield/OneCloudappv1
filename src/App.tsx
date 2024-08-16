import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import SiteNav from "./Components/Common/SiteNav";
import SiteFooter from "./Components/Common/SiteFooter";
import Home from "./Pages/Home";

import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <Authenticator
      signUpAttributes={[
        "address",
        "birthdate",
        "email",
        "family_name",
        "gender",
        "given_name",
        "locale",
        "middle_name",
        "name",
        "nickname",
        "phone_number",
        "picture",
        "preferred_username",
        "profile",
        "updated_at",
        "website",
        "zoneinfo",
      ]}
    >
      {({ signOut }) => (
        <div>
          <SiteNav />
          <div className="container">
            <h1>Hello</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
          <SiteFooter />
        </div>
      )}
    </Authenticator>
  );
}
export default App;
