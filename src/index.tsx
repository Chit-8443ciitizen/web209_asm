import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
);

// reportWebVitals();

// import React, { useMemo, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './routes/Routes';

// function App() {
//   const root = useMemo(() => ReactDOM.createRoot(
//     document.getElementById('root')
//   ), []);

//   useEffect(() => {
//     root.render(
//       <React.StrictMode>
//         <RouterProvider router={router} />
//       </React.StrictMode>
//     );
//   }, [root, router]);

//   return <React.Fragment />;
// }

// export default App;