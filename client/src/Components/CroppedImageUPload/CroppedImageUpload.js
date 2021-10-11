import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";
import "./style.css";

const CroppedImageUpload = () => {
  const [fileName, setFileName] = useState("");
  const [upImg, setUpImg] = useState(null);
  const [userData, setUserData] = useState({});
  const [heading, setheading] = useState("");
  const [caption, setcaption] = useState("");
  const History = useHistory();
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "px", width: 500, aspect: 1 / 1 });
  const croppedImage = useRef(null);

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await axios.get("http://localhost:3001/Profile");
        setUserData(res.data);
      }
      fetchData();
    } catch (err) {
      History.push("/Login");
    }
  }, []);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setheading("Crop");
    }
  };

  const gotocompose = (e) => {
    e.preventDefault();
    setheading("Compose");
    return;
  };

  const goBack = (e) => {
    e.preventDefault();
    if (heading === "Crop") setUpImg(null);
    else if (heading === "Compose") setheading("Crop");
  };

  const goClose = (e) => {
    e.preventDefault();
    setUpImg(null);
  };

  const handleCaptionChange = (e) => {
    e.preventDefault();
    setcaption(e.target.value);
  };

  const onLoad = (img) => {
    imgRef.current = img;
  };

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };

  const makeClientCrop = async (crop) => {
    if (imgRef.current && crop.width && crop.height) {
      croppedImage.current = await getCroppedImg(
        imgRef.current,
        crop,
        "newFile.jpeg"
      );
    }
  };

  const getCroppedImg = (image, crop, fileName) => {
    if (!canvasRef.current || !imgRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      // canvas.toDataURL("image/jpeg");
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        resolve(blob);
      }, "image/jpeg");
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      //here get name of image in place of "name"
      var file = new File([croppedImage.current], fileName);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("caption", caption);
      console.log(formData);
      const res = axios.post("http://localhost:3001/selectImage", formData);
      if (res.status !== 500) {
        History.push("/Home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form method="post" enctype="multipart/form-data">
        {!upImg && (
          <div className="input-container">
            <input
              id="profile-pic"
              onChange={onSelectFile}
              type="file"
              hidden="hidden"
            />
            <label for="profile-pic">Choose File</label>
          </div>
        )}

        {upImg && (
          <div>
            <div className="boss-container">
              <div className="top-header">
                <div className="left-button">
                  <button className="back-button" onClick={goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} size="4x" />
                  </button>
                </div>
                <div className="middle-header">
                  <h1>{heading}</h1>
                </div>
                <div className="right-button">
                  <button className="close-button" onClick={goClose}>
                    <FontAwesomeIcon icon={faWindowClose} size="4x" />
                  </button>
                </div>
              </div>
              <div className="body-container">
                <div className="left-body">
                  <div className="crop-container">
                    <ReactCrop
                      src={upImg}
                      onImageLoaded={onLoad}
                      crop={crop}
                      onChange={(c) => setCrop(c)}
                      onComplete={onCropComplete}
                    />
                  </div>
                </div>
                <div className="right-body">
                  {heading === "Crop" && (
                    <div>
                      <div className="cropped-image-container">
                        <canvas ref={canvasRef} />
                      </div>
                      <div className="next-button-container">
                        <button className="next-button" onClick={gotocompose}>
                          <h3>Next</h3>
                        </button>
                      </div>
                    </div>
                  )}

                  {heading === "Compose" && (
                    <div>
                      <div className="text-area-container">
                        <textarea
                          id="subject"
                          name="subject"
                          value={caption}
                          placeholder="Write a caption"
                          onChange={handleCaptionChange}
                        >
                          {caption}
                        </textarea>
                      </div>

                      <div className="next-button-container">
                        <button className="next-button" onClick={handleSubmit}>
                          <h3>Share</h3>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CroppedImageUpload;
