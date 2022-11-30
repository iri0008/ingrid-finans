import React, { useRef } from "react";
import { render } from "react-dom";
import { defaultGroupByFn } from "react-table";

const UploadFile: React.FC = () => {
  const inputRef = useRef(null);

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files[0]);
  };

  const fileUpload = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };

  return (
    <div>
      <button onClick={fileUpload}>ファイルアップロード</button>
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onFileInputChange}
      />
    </div>
  );
};

render(<UploadFile />, document.getElementById("root"));

export default UploadFile
