import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'

const NewCollections = () => {
  return (
    <div className='new_collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {new_collection.map((item,i)=>{
               return <item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      
    </div>
  )
}

export default NewCollections
