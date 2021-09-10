import React from 'react';
import './index.css';
import Form from './components/Form';
import useCopyToClipboard from './utils/useCopyToClipboard';
import CopyButton from './utils/CopyButton';

function App() {
  return (
    <div className="App">
     <Form />
     <CopyButton />
     <useCopyToClipboard />
    </div>
  );
}

export default App;
