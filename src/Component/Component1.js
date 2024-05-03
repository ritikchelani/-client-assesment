import React, { useEffect, useState } from 'react'
import { addComponent1Services, getComponent1CountServices, getComponent1Services, updateComponent1Services } from '../services/component1Services';
import ResizePanel from 'react-resize-panel';

const Component1 = () => {
    const [addStatus,setAddStatus] = useState("");
    const [data,setData] = useState("")
    const [count,setCount] = useState("")
    const [isUpdate,setIsUpdate] = useState(false)
    const [addComponentData,setAddComponent1] = useState({
      content: ""
    })
    
    useEffect(()=>{
      const fetchData = async () => {
        try {
    
          const response = await getComponent1Services();
          setData(response);
         isUpdate && setAddComponent1({...addComponentData,content:response?.content})
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const fetchCount = async () => {
        try {

          const response = await getComponent1CountServices();
          setCount(response);
        } catch (error) {
          console.error('Error fetching count:', error);
        }
      };
       
      fetchData();
      fetchCount();
    },[isUpdate,addStatus])
  const handleAdd = () =>{
    setAddStatus("add")
  }
  
  const handleUpdate = () =>{
    setIsUpdate(true)
  }
  
  const handleSubmit = async() => {
    
    setAddComponent1({...addComponentData,content:""})
  
  try{
    const response = await (!isUpdate ? addComponent1Services(addComponentData) : updateComponent1Services(data?._id,addComponentData));
    console.log(response);
    setAddStatus("")
    setIsUpdate(false)
  } catch(err){
  console.log(err);
  }
  
  }
  return (
  <>
   <ResizePanel direction="e" style={{ flexGrow: '0.5' }} >
        <div className='sidebar withMargin panel'> 
        <div style={{ 
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '300px',
      }}>
      <h2 style={{ margin: '0' }}>{"Component 1"}</h2>
      
     {addStatus === "add" || isUpdate ? <> <label>Content : </label>
      <input 
          type="text" 
          id="input2" 
          value={addComponentData.content} 
          onChange={(e) => setAddComponent1({...addComponentData, content: e.target.value})} 
        /> <button  onClick={handleSubmit} style={{marginTop: "10px"}}>Submit</button></> : <p style={{ marginBottom: '0' }}>{data?.content}</p> }
      <div>
        <button 
        onClick={handleAdd}
          style={{
            marginTop: "100px",
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '3px',
            padding: '8px 16px',
            marginRight: '8px',
            cursor: 'pointer',
          }}
        >
          {"Add"}
        </button>
        <button 
        onClick={handleUpdate}
                 style={{
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '3px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          {"Update"}
        </button>
      </div>
      <div style={{ paddingTop: '10px'}}><label style={{ paddingTop: '10px'}}><strong>{"Added"} : {count.addCount?count.addCount:0}</strong></label></div>
      <div style={{ paddingTop: '10px'}}><label style={{ paddingTop: '10px'}}><strong>{"Updated"} : {count.updateCount?count.updateCount:0}</strong></label></div>
    </div></div>
      </ResizePanel>
  </>
  )
}

export default Component1
