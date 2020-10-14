import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import '../styles.css';

const UploadForm = () => {
  const [file, setFile]: any = useState(null);
  const [error, setError]: any = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e: any) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      <label> 
        <input style={{position: 'absolute'}} type="file" onChange={handleChange} />
        <h3 style={{ marginTop: '5px' }} >+</h3>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;