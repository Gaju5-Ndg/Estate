import React from 'react'
import { ProperViewCard } from '../components/ProperViewCard'
import { Filter } from '../components/Filter'
import NavBar from '../components/NabBar'


function ViewCard () {
  const data = [
    {
      'price': '2,000',
      'bed': '4',
      'bath': '2',
      'square': '2',
      'image': 'https://th.bing.com/th/id/OIP.cWuy28gWlixNHNUfslwF0wHaHZ?w=177&h=180&c=7&r=0&o=5&pid=1.7.jpg'
    }, {
      'price': '2,000',
      'bed': '3',
      'bath': '2',
      'square': '2',
      'image': 'https://th.bing.com/th/id/OIP.cWuy28gWlixNHNUfslwF0wHaHZ?w=177&h=180&c=7&r=0&o=5&pid=1.7.jpg'
    },
  ];
  return (<div>
    <NavBar />
    <Filter />
      <div className='U-full'>
      <button className='for-sale'>FOR SALE</button>
      
      
        <div className='size-De'>France, Paris <span className='right-text0'>$2000</span></div>
        <div className='size-santa'>xxxxxxx<span className='right-text'>Payment $2000/mo</span></div>
      
      
       </div>
    <div className='ViewCard-cOntainer'>
       <div className='all-flex'>
      <div className='img-view-container'></div>
      <div className='card-Contain'>
      <div className='img-view-contain'/>
      <div className='img-view-contain2'/>
      </div>
      </div>
      
        <div className='left-cards'>
          
          {data.map((item, index) => {
            return (
              <ProperViewCard price={item.price} bath={item.bath} bed={item.bed} square={item.square} img={item.image} />
            );
          })
          }
        </div>
        <div className='text-block'>
        <div className='text-line'>
          <span className='text1'>Bed</span> <span className='text-num1'>4</span>
          </div>
          <hr/>
          <div className='text-line1'>
          <span className='text2'>Bath</span> <span className='text-num2'>4</span>
          </div>
          <hr/>
          <div className='text-line2'>
          <span className='text3'>Sq Ft</span> <span className='text-num3'>2,000</span>
          </div>
          <hr/>
          <div className='text-line3'>
          <span className='text4'>Price Per Sq Ft</span> <span className='text-num4'>$2000</span>
          </div>
          <hr/>
          <div className='text-line4'>
          <span className='text5'>Year Built</span> <span className='text-num5'>2001</span>
          </div>
          <hr/>
          <div className='text-line5'>
          <span className='text6'>Lost Size</span> <span className='text-num6'>xxx</span>
          </div>
          <hr/>
          <div className='text-line6'>
          <span className='text7'>Community</span> <span className='text-num7'>Parid</span>
          </div>
          <hr/>
          <div className='text-line7'>
          <span className='text8'>MLS #</span> <span className='text-num8'>2200</span>
          </div>
          <div className='long-text'>his error message typically means that there is a syntax error in your code, and the JavaScript parser is expecting a comma at a certain position but found something else instead.<span className='grey-text'>an ideal floor plan with not a single step in the whole house! On one wing of the house, you will find the master bedroom suite, stunning movie theater, beautiful office & powder bathroom. On the other wing, you will find 3 spacious en-</span>
</div>
<button className='read-more'>READ MORE</button>
          </div>
      </div>
    
  </div>

  )
}
export default ViewCard