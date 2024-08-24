import React from 'react'
import {context} from './App'
import { useContext } from 'react'

const ResponseForm = () => {
   let d= useContext(context)
   
   let interestes=d.data.interests.join(",")
   console.log(interestes)
  return (
    <div className='res'>
      <div className='content'>
        <h1>Name : <span>{d.data.name}</span> </h1>
        <h1>Gender : <span>{d.data.gender}</span></h1>
        <h1>Category : <span>{d.data.category}</span></h1>
        <h1>Interests : <span> {interestes}</span></h1>
        <h1>Terms_and_conditions : <span>{(d.data.termsAndConditions)?"Agree":"Disagree"}</span></h1>
        </div>
    </div>
  )
}

export default ResponseForm
