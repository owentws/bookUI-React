import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";


import HomeContent from "../components/HomeContent";
import HomeCate from "../components/HomeCate";
import HomeBookLine from "../components/HomeBookLine";
import HomePromotion from "../components/HomePromotion";
import About from "../components/About";



const baseURL = "http://localhost:8080/api/book/save"

function Home() {

  const [post, setPost] = useState(null);
  

  useEffect(() => {
    axios.get('http://localhost:8080/api/book/getBooksData')
    .then((response) =>{
      const bookData = response.data.find(item => item.title === 'Hello World');
        setPost(bookData);
        console.log(response.data)
    });
  }, []);

  function createPost(){
    axios.post(baseURL, {
      title: 'Hello World',
      author: 'The Joker',
      detail: 'XXXXXXXXXXXXXXXXXXXX'
    })
    .then((response) =>{
      setPost(response.data)
    })
  }

  function updatePost(){
    axios.put('http://localhost:8080/api/book/edit', {
      bookId : 3,
      title : "King Monkey",
      author : "Author XXaX",
      detail : "XXXXXXXXXX22XXXXXXXXXX"
    })
    .then((response)=>{
      setPost(response.data)
    })
  }

  function deletePost(){
    axios.delete('http://localhost:8080/api/book/delete/6')
      .then(()=>{
        alert("Post delted!");
       
      })
  }


  if (!post) return null;

  return (
    <div>
      <HomeContent/>
      <About/>
      <HomeCate/>
      <HomeBookLine/>
      <HomePromotion/>
      <h1>{post.title}</h1>
      <h1>{post.author}</h1>
      <h1>{post.detail}</h1>
      
     
      
      <button class="bg-red-300" onClick={createPost}>Create Post</button>
      <button class="bg-blue-300" onClick={updatePost}>Update Post</button>
      <button class="bg-green-300" onClick={deletePost}>Delete Post</button>
      
      
    </div>
  );
}

export default Home;
