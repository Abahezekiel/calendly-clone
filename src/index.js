// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import './index.css';
// import reportWebVitals from "./reportWebVitals";
// import { ClerkProvider, RedirectToSignIn, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import ProtectedPage from "./ProtectedPage";

// // Make sure the environment variable is loaded
// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }
// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const ClerkWithRoutes = () => {
//   const navigate = useNavigate();

//   return (
//     <ClerkProvider
//       publishableKey={clerkPubKey}
//       navigate={(to) => navigate(to)}
//     >
//       <Routes>
//         <Route path="/" element={<App />} />
        
//         <Route
//           path="/sign-in/*"
//           element={<SignIn redirectUrl={'/protected'} routing="path" path="/sign-in" />}
//         />
//         <Route
//           path="/sign-up/*"
//           element={<SignUp redirectUrl={'/protected'} routing="path" path="/sign-up" />}
//         />
//         <Route
//           path="/protected"
//           element={
//             <>
//               <SignedIn>
//                 <ProtectedPage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         />
//       </Routes>
//     </ClerkProvider>
//   );
// };

// root.render(
//   <React.StrictMode>
//     <BrowserRouter> {/* Only wrap with BrowserRouter once */}
//       <ClerkWithRoutes />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
