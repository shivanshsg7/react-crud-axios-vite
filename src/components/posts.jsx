import { useEffect, useState } from "react";
import { getPost ,deletePost} from "../api/PostApi";

export const Posts = () => {
    const [data, setData] = useState([]);
    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        setData(res.data);
    }

    //directly agaar getPost() function ko call karenge toh woh sirf promise return karta hai 
    // if we want to fetch data so we need to use async await
    useEffect(() => {
        getPostData();
    }, []);
    //function to delete post
    const handleDeletePost = async (id) => {
        try{
            const res=await deletePost(id);
            if(res.status===200){
                const newUpdatedPosts = data.filter((currPost)=>{
                    return currPost.id != id;
                });
                setData(newUpdatedPosts);
            }

        }catch(error){
            console.log(error);
        }
    }
    return (
        <section className="section-post">
            <ol>
            {data.map((currElem) => {
                const { id, body, title } = currElem;
                return (
                    <li key={id}>
                        <p>Title: {title}</p>
                        <p>Body: {body}</p>
                        <button className="btn-edit">Edit</button>
                        <button className="btn-delete" onClick={()=>handleDeletePost(id)}>Delete</button>
                    </li>
                )
            })}
            </ol>
            
        </section>
    )
}
