import React, {useState} from "react";
import "./uploadPost.css";
import "./ActivePost";
import ActivePost from "./ActivePost";

function UploadPost() {

  const [filename, setFileName] = useState("");
  const [Author, setAuthor] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");

  const handleBrowse = e =>{ setFileName(e.target.files[0].name);
  console.log(e.target.files[0]) };
  const ChangeAut = e =>{ setAuthor(e.target.value);  };
  const ChangeLoca = e =>{ setLocation(e.target.value);  };
  const ChangeDesc = e =>{ setDescription(e.target.value);  };

  return (
    <div className = 'display'>
      <form action="/post" method="post">

        <div className = "imageurl">
          <input className="text" placeholder="Choose file"  value = {filename}/>
          <input type = 'file' className = "browse" name = 'image' id = 'image' onChange = {handleBrowse} hidden/>
          <label className = "Filelabel" htmlFor = 'image'>Browse</label>
        </div>

        <div className="middle">
          <input className="text1" placeholder="Author" name = "username" onChange = {ChangeAut} />    
          <input className="text2" placeholder="Location" name = "location" onChange = {ChangeLoca}/>
        </div>

        <div className="end">
          <input className="text3" placeholder="Description" name = "description" onChange = {ChangeDesc}/>
        </div>

        <div>
          <ActivePost  Image = {filename}
                       Author = {Author}
                       Location = {Location}
                       Description = {Description}/>
        </div>
      </form>
    </div>
  );
}

export default UploadPost;