import { useEffect, useState } from "react";
// import { createUser } from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import { uploadSong } from "../../store/song";
import AWS from 'aws-sdk'
import { useHistory } from "react-router-dom";
import {BarLoader} from "react-spinners"




const UploadFormPage = () => {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1534817043788-41286c872b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
    const [bucketSong, setBucketSong] = useState("")
    const [selectedFile, setSelectedFile] = useState(null);
    const [errors, setErrors] = useState([]);



    const [success, setSuccess] = useState("")
    const history = useHistory()

    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id

    


    const postToS3 = async (url, body) => {
        try {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body,
            });

            if (res.ok && errors.length === 0) {
                const songURL = res.url.split('?')[0];
                const newSong = {
                    title,
                    songURL,
                    userId,
                    imageUrl
                }
                if (title === "") {

                    setErrors(["please enter a title first"])
                    setSelectedFile("")
                    console.log(errors)
                } else {
                    console.log(title)
                    setBucketSong(newSong)
                    setSuccess("confirmed")
                    return songURL;
                }
            } else {
                console.error('response from s3 fetch not ok, but did not error out');
            }
            postToS3.on("httpUploadProgress", (progress) => {
                console.log(progress);
            });

        } catch (e) {
            console.log('PUT REQUEST TO S3 FAILED!');
            console.log(e);
        }
    }


    // image s3
    const imgPostToS3 = async (url, body) => {
        try {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body,
            });

            if (res.ok && errors.length === 0) {
                const imageUrl = res.url.split('?')[0];
                return imageUrl;
            } else {
                console.error('response from s3 fetch not ok, but did not error out');
            }
            console.log('imgpost')

        } catch (e) {
            console.log('PUT REQUEST TO S3 FAILED!');
            console.log(e);
        }
    }



    const s3Upload = async (file, inputName) => {
        if (!file) return console.log('upload a file first');

        // if (inputName === 'song') dispatch(showLoading());

        const res = await fetch('/api/s3URL');
        const { url } = await res.json();
        console.log(url)
        if (inputName === 'image') {
            setImageUrl("https://amuse-bucket.s3.amazonaws.com/39c538e3b015afdd8273993844136d6c")
            const fileURL = await imgPostToS3(url.split("?")[0], file);
            setImageUrl(fileURL)
            console.log("imagepost entered")
        } else if (inputName === 'song') {
            const fileURL = await postToS3(url.split("?")[0], file);
            console.log(inputName)
        }
        // dispatch(hideLoading());
        // if (inputName === 'song') return setSongURL(fileURL);
        // if (inputName === 'artwork') return setArtworkURL(fileURL);
    }

    useEffect(() => {
        setErrors([]);
        setSuccess("pending")
        // if (!title) errors.push('Please provide a value for Song Title.');
        // if (!imageUrl) errors.push('Please provide a value for Cover Art URL.');

    }, [])


    // const S3_BUCKET = "amuse-bucket";
    // const REGION = "us-east-1";




    AWS.config.update({
        region: 'us-east-1',
        apiVersion: 'latest',
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY
        }
    })

    // const myBucket = new AWS.S3({
    //     params: { Bucket: S3_BUCKET },
    //     region: REGION,
    // })

    const redirect = () => {
        history.push(`users/${userId}`)
    }

    const handleFileInput = (e) => {
        dispatch(uploadSong(bucketSong)).then(() => redirect())

    }


    const titleEvent = (e) => {
        setTitle(e.target.value)
        setErrors([])
    }




    return (
        <div className="upload">

            <div className="upload-container">
                <div className="img-preview" style={{ backgroundImage: `url("${imageUrl}")`, backgroundSize: "cover" }} >
                    <p>Image preview</p>
                    <label>

                        <div className="sign-up-button image">
                            <input type="file"
                                name="image"
                                onChange={e => {
                                    s3Upload(e.target.files[0], "image");
                                    setImageUrl(e.target.files[0].name)
                                }}
                            />
                            Upload
                        </div>
                    </label>
                </div>
                <form
                    className="loginForm upload"
                // onSubmit={handleSubmit}
                >
                    {errors.length > 0 &&
                        errors.map((error) => <div className="error upload" key={error}>{error}</div>)}
                    <h3 className="webkit">{title ? "Upload a file" :"Enter a title" }</h3>
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={titleEvent}
                    />
                    {success === "pending" ?
                        <label>
                            {title ? <div className="sign-up-button upload">
                                <input type="file"
                                    name="song"
                                    onChange={e => {
                                        s3Upload(e.target.files[0], e.target.name);
                                        setSelectedFile(e.target.files[0].name)
                                        setSuccess("pending")
                                    }}
                                />
                                Select a File
                            </div> : null}
                            <p>{selectedFile}</p>
                            {selectedFile && success === "pending" ? 
                                <BarLoader width={450} color="#ff9c40" />: null
                            }
                        </label> :
                        <div
                            className='sign-up-button done'
                            onClick={handleFileInput}
                        >
                            Upload Song
                        </div>
                    }
                </form>
            </div>
        </div>

    );
};

export default UploadFormPage;