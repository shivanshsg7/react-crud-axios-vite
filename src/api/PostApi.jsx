import axios from "axios";
const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});
//get method
export const getPost=()=>{
    return api.get("/posts")
};
//delete method 
export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`);
};
//post method 
export const postData=(data)=>{
    return api.post("/posts",data);
};
//patch method (JSONPlaceholder often errors on PUT for ids > 100)
export const updateData=(id,post)=>{
    return api.patch(`/posts/${id}`,post);

}