import React from 'react';
import './App.css'; 
import 'remote/RemoteCss';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <p className='text-2xl font-bold text-blue-500'>Host App</p>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
