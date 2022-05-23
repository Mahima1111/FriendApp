import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const ViewFriend = () => {
    var [Viewlist,setViewlist]=useState([])
    var [loadstatus,setLoadStatus]=useState(true)
    axios.get("https://dummyapifriends.herokuapp.com/adddata").then(
        (response)=>{
            console.log(response.data)
            setViewlist(response.data)
        }
    )
  return (
    <div>
        
        <Nav/>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">

           <table class="table table-bordered border-primary">
            <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">FriendName</th>
      <th scope="col">FriendNickName</th>
      <th scope="col">DescribeYourFriend</th>
      
    </tr>
  </thead>
  <tbody>


  

  {Viewlist.map( (value,key)=>{
                  return <tr>
                    <td>{value.name}</td>
                    <td>{value.friendname}</td>
                    <td>{value.friendnickname}</td>
                    <td>{value.describeyourfriend}</td>
                    
                  </tr>

                })}
                </tbody>
</table>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ViewFriend