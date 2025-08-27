import React,{useState, useEffect} from 'react'
import { postData, updateData } from '../api/PostApi';

export const Form=({data,setData,updateDataApi,setUpdateDataApi})=>{
  const [addData,setAddData]=useState({
    title:"",
    body:"",
  });
// get the updated data and add into input field
  const isEditing = Boolean(updateDataApi && Object.keys(updateDataApi).length > 0);
  useEffect(()=>{
    if (isEditing) {
      setAddData({
        title: updateDataApi.title || "",
        body:  updateDataApi.body || "",
      });
    } else {
      setAddData({ title: "", body: "" });
    }
  },[isEditing, updateDataApi]);

  const handleInputChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setAddData((prev)=>{
      // console.log(prev);
      return {
        ...prev,
        [name]:value,
      };

    });
  }
  
  const addPostData=async()=>{
    const res = await postData(addData);
    console.log("res",res);
    if(res.status >= 200 && res.status < 300){
      setData([...data,res.data]);
      setAddData({title:"",body:""});
    }
  }
  //updatePostData
  const updatePostData=async()=>{
    try{
      const res =await updateData(updateDataApi.id,addData);
      console.log(res);
      if (res.status >= 200 && res.status < 300){
        setData((prev)=>{
          return prev.map((curElem)=>{
            return curElem.id === updateDataApi.id ? { ...curElem, ...res.data } : curElem;
          });
        });
      }
    }catch(error){
      // Optimistic UI fallback if API errors (e.g., JSONPlaceholder ids > 100)
      setData((prev)=>{
        return prev.map((curElem)=>{
          return curElem.id === updateDataApi.id ? { ...curElem, ...addData } : curElem;
        });
      });
    } finally {
      setUpdateDataApi({});
      setAddData({ title: "", body: "" });
    }
    }
    

  
  //form submission 
  const handleFormSubmit=(e)=>{

    e.preventDefault();
    if (isEditing) {
      updatePostData();
    } else {
      addPostData();
    }


  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='title'></label>
        <input
          type="text"
          autoComplete='off'
          id='title'
          name="title"
          placeholder='Add Title'
          value={addData.title}
          onChange={handleInputChange}
          />
      </div>
      <div>
        <label htmlFor='body'></label>
        <input
          type="text"
          autoComplete='off'
          id='body'
          name="body"
          placeholder='Add Post'
          value={addData.body}
          onChange={handleInputChange}
          />
      </div>
      <button type='submit'>{isEditing ? "Edit" : "Add"}</button>
    </form>
  )
}
