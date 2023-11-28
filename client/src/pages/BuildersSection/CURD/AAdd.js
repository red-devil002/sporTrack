import { useState } from "react";
import  "./styles.css";
import { Box } from "@mui/material";
import Fheader from "components/Fheader";
import Ffooter from "components/Ffooter";


const MAX_COUNT = 50;

const Refresh = () => {
  window.location.reload();
};

function AAdd(){
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);
    
    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${50} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)

    }

    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);


        console.log(chosenFiles)
    }
    return (
      <Box>
        <Fheader title="Documents"></Fheader>
                    <div className="app" >
                       <div className="parent">
                        <h2>Upload documents </h2>
                           <div className="file-upload">
                                <h3>Click box to upload</h3>
                                <input id='fileupload'  onChange={handleFileEvent} accept="image/png,image/jpg,image/jpeg" type="file" multiple  />

                                <div className="uploaded-files-list">
                                    <p>chosen files</p>
				                   {uploadedFiles.map(file => (
                                       <div >
                                           {file.name}
                                        </div>
                                    ))}
			                    </div>
                            </div>
                            <button type="submit" id="Submit"
                                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={Refresh}>
                                      Submit
                                  </button>
                       </div>
                    </div>
                    <Ffooter></Ffooter>
    </Box>
	);
}

export default AAdd;