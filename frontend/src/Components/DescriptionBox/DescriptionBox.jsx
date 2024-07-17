import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
        </div>
      <div className='descriptionbox-description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam sapiente, in aliquam dignissimos maiores. Nemo, natus! Doloremque nostrum ratione debitis vel animi commodi, qui iure blanditiis, totam nihil dolores.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque officiis quis corrupti quibusdam, tenetur error quas, veritatis doloremque tempora sapiente quia similique reprehenderit! Architecto, illo quisquam tenetur perferendis neque deleniti?</p>
      </div>
    </div>
  )
}

export default DescriptionBox
