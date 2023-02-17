import React from 'react'
import NavBar from '../components/NabBar'
import { Filter } from '../components/Filter'

function Communities () {
    return(
<div>
    <NavBar/>
    <Filter/>
    <div className='banner-comm'>
        <div className='banner-comm-item flex-1'>
          <h6>San Diego</h6>
          <h2>Communities</h2>
        </div>
        <div className='banner-comm-item flex-2'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis, vulputate id eleifend sit amet, varius non ipsum.
          </p>
        </div>
        </div>
</div>
    )
}
export default Communities
