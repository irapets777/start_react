import React from 'react'

const Students = () => {
  // create a state variable to store  the post
  let [posts, setPosts] = useState([]);
  //create a fnction to fetch the post from the API
  async function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then ((res) => res.json())
    .then ((data) => {
      setPosts(data);
    });
}
  return (
    <div>Students</div>

  )
}

export default Students