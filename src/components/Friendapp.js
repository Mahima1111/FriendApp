import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Friendapp = () => {
  var [name,setName]=useState(" ")
  var [friendname,setFriendname]=useState(" ")
  var [friendnickname,setFriendnickname]=useState(" ")
  var [describeyourfriend,setDescribeyourname]=useState(" ")
  const subData=()=>{
    const data={"name":name,"friendname":friendname,"friendnickname":friendnickname,"describyourfriend":describeyourfriend}
    console.log(data)
    axios.post("https://dummyapifriends.herokuapp.com/view",data).then(
      (response)=>{
        console.log(response.data)
        if(response.data.status=="success")
        {
          alert("Successfully Added")
        }
        else{
          alert("Insertion Failed")
        }
        
      }
    )
  }
  return (
    <div>
      <Nav/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">FriendName</label>
                    <input onChange={(e)=>{setFriendname(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">FriendNickName</label>
                    <input onChange={(e)=>{setFriendnickname(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">DescribeYourFriend</label>
                   <textarea onChange={(e)=>{setDescribeyourname(e.target.value)}} name="" id="" cols="10" rows="5" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Friendapp