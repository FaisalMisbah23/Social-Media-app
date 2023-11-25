import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";
import ProfilePage from "./Components/ProfilePage";
import AddFriend from "./Components/AddFriend";
import Friends from "./Components/Friends";

function App() {
  const [name, setName] = useState("Guest 123");
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState("guest123");
     
  const [bio, setBio] = useState("i'm a ...");
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState(null)
  const [city,setCity] = useState(null)
const [RelationShip,setRelationShip] = useState(null)
const [address,setAddress]=useState(null)

const [caption, setCaption] = useState("");

const captionChange=(e)=>{
  setCaption(e.target.value);
}

const [postImage, setPostImage] = useState(null);
const postImageChange=(e)=>{
  setPostImage(e.target.files[0]);
}


const [posts, setPosts] = useState([]);

const handlePost = () => {
  // Check if both caption and postImage are available
  if (caption && postImage) {
    // Create a new post object
    const newPost = {
     caption: caption,
      image: postImage || "https://bootdey.com/img/Content/avatar/avatar1.png",
    };

    // Add the new post to the posts array
    setPosts([...posts, newPost]);

    // Clear caption and postImage for the next post
    setCaption("");
    setPostImage(null);
  }
};








const [manageColor,setManageColor] = useState(null);
const [likes,setlikes]=useState(null)

const [manageColor2,setManageColor2]=useState(null)
const [likes2,setlikes2]=useState(null)

const [comment, setComment] = useState("");
const [comments, setComments] = useState([]);

const [comment2, setComment2] = useState("");
const [comments2, setComments2] = useState([]);

const commintComment = (e) => {
setComment(e.target.value);
};

const commintComment2 = (e) => {
setComment2(e.target.value);
};

const saveComment = () => {
// Validate if the comment is not empty before saving
if (comment.trim() !== "") {
  // Save the comment to the comments state
  setComments((prevComments) => [...prevComments, comment]);
  // Clear the input field after saving the comment
  setComment("");
}
};

const saveComment2 = () => {
// Validate if the comment is not empty before saving
if (comment2.trim() !== "") {
  // Save the comment to the comments state
  setComments2((prevComments2) => [...prevComments2, comment2]);
  // Clear the input field after saving the comment
  setComment2("");
}
};





const manageLikes=()=>{
if(likes==null){
setManageColor('#3b5998')
setlikes('1' )}
else{
    setManageColor('')
    setlikes(null)
}
}


const manageLikes2=()=>{
if(likes2==null){
setManageColor2('#3b5998')
setlikes2('1' )
}
else{
setManageColor2('')
setlikes2('')
}}




const[manageFollow,setManageFollow]=useState("Follow")
const[followedNumber,setFollowNUmber]=useState(null)


const handleFollow = () => {
    if(manageFollow=="Follow"){
  setManageFollow("Following")
    setFollowNUmber("1")
}
  else{
  setManageFollow("Follow")
setFollowNUmber(null)}
  }






  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route
          exact
          path="/home"
          render={(props) => (
            <Home {...props} name={name} profileImage={profileImage}  setProfileImage={setProfileImage} userName={userName} 
            captionChange={captionChange}
            postImageChange={postImageChange}
            handlePost={handlePost}
            manageColor={manageColor} setManageColor={setManageColor}
            manageLikes={manageLikes} likes={likes}
            manageColor2={manageColor2} setManageColor2={setManageColor2}
            likes2={likes2}
            manageLikes2={manageLikes2}
            comment={comment} setComment={setComment}
            comments={comments} setComments={setComments}
            comment2={comment2} setComment2={setComment2}
            comments2={comments2} setComments2={setComments2}
            commintComment={commintComment} commintComment2={commintComment2}
            saveComment={saveComment} saveComment2={saveComment2}

            />
          )}
        />
        <Route
          exact
          path="/createprofie"
          render={(props) => (
            <Profile
              {...props}
              name={name}
              setName={setName}
              profileImage={profileImage}
              setProfileImage={setProfileImage}
              userName={userName}
              setUserName={setUserName}
              bio={bio}
              setBio={setBio}
              email={email}
              setEmail={setEmail}
              country={country}
              setCountry={setCountry}
              city={city}
              setCity={setCity}
              RelationShip={RelationShip}
              setRelationShip={setRelationShip}
              address={address}
              setAddress={setAddress}
            />
          )}
        />
        <Route
          exact
          path="/profilepage"
          render={(props) => (
            <ProfilePage {...props} name={name} profileImage={profileImage}  userName={userName} bio={bio} country={country} email={email}
              address={address}
              RelationShip={RelationShip}
              city={city}
              caption={caption} setCaption={setCaption} captionChange={captionChange}
              postImageChange={postImageChange} postImage={postImage} setPostImage={setPostImage}
              handlePost={handlePost}
              setPosts={setPosts} posts={posts}
              manageColor={manageColor} setManageColor={setManageColor}
              manageLikes={manageLikes} likes={likes}
              manageColor2={manageColor2} setManageColor2={setManageColor2}
              likes2={likes2}
              manageLikes2={manageLikes2}
              comment={comment} setComment={setComment}
              comments={comments} setComments={setComments}
              comment2={comment2} setComment2={setComment2}
              comments2={comments2} setComments2={setComments2}
              commintComment={commintComment} commintComment2={commintComment2}
              saveComment={saveComment} saveComment2={saveComment2}
              manageFollow={manageFollow} setManageFollow={setManageFollow} followedNumber={followedNumber} setFollowNUmber={setFollowNUmber} handleFollow={handleFollow}
           />  )}
           />
           <Route
           exact
           path="/addfriend"
           render={(props) => (
<AddFriend {...props} name={name} profileImage={profileImage}  userName={userName} bio={bio} country={country} email={email}
              address={address}
              RelationShip={RelationShip}
              city={city}
              caption={caption} setCaption={setCaption} captionChange={captionChange}
              postImageChange={postImageChange} postImage={postImage} setPostImage={setPostImage}
              handlePost={handlePost}
              setPosts={setPosts} posts={posts}
              />  )}
              />


           <Route
           exact
           path="/friendslist"
           render={(props) => (
             <Friends {...props} name={name} profileImage={profileImage}  userName={userName} bio={bio} country={country} email={email}
               address={address}
               RelationShip={RelationShip}
               city={city}
               caption={caption} setCaption={setCaption} captionChange={captionChange}
               postImageChange={postImageChange} postImage={postImage} setPostImage={setPostImage}
               handlePost={handlePost}
               setPosts={setPosts} posts={posts}
               manageColor={manageColor} setManageColor={setManageColor}
               manageLikes={manageLikes} likes={likes}
               manageColor2={manageColor2} setManageColor2={setManageColor2}
               likes2={likes2}
               manageLikes2={manageLikes2}
               comment={comment} setComment={setComment}
               comments={comments} setComments={setComments}
               comment2={comment2} setComment2={setComment2}
               comments2={comments2} setComments2={setComments2}
               commintComment={commintComment} commintComment2={commintComment2}
               saveComment={saveComment} saveComment2={saveComment2}
               manageFollow={manageFollow} setManageFollow={setManageFollow} followedNumber={followedNumber} setFollowNUmber={setFollowNUmber} handleFollow={handleFollow}
               />  )}
               />


        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;
