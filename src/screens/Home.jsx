import React from 'react'
import NavBar from '../components/NabBar'
import {Popup} from './creat';

import { PropertyCard } from '../components/PropertyCard'
import { Filter } from '../components/Filter';
function Home() {
  const data = [
    {
      'price': '1,300,000',
      'bed': '42',
      'bath': '92',
      'square': '82',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    }, {
      'price': '300,000',
      'bed': '42',
      'bath': '12',
      'square': '12',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    }, {
      'price': '410,000',
      'bed': '32',
      'bath': '12',
      'square': '12',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    },{
      'price': '1,300,000',
      'bed': '42',
      'bath': '92',
      'square': '82',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    }, {
      'price': '220,000',
      'bed': '42',
      'bath': '12',
      'square': '12',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    }, {
      'price': '440,000',
      'bed': '32',
      'bath': '12',
      'square': '12',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    },{
      'price': '1,300,000',
      'bed': '42',
      'bath': '92',
      'square': '82',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    }, {
      'price': '210,000',
      'bed': '42',
      'bath': '12',
      'square': '12',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    }, 
  ];
  return (

    <div>
    <Popup/>
      <NavBar />

     <Filter/>



      <div className='banner-area'>
        <div className='banner-item flex-1'>
          <h5>Blair Owens</h5>
          <h1>Our Properties</h1>
        </div>

        <div className='banner-item flex-2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis, vulputate id eleifend sit amet, varius non ipsum.
          </p>
        </div>

      </div>




      <div className='container'>
        <div className='properties'>
          {data.map((item, index) => {
            return (
              <PropertyCard  price={item.price} bath={item.bath} bed={item.bed} square={item.square} img={item.image} />
            );
          })
        }
        </div>
      </div>
    </div>

  )

}
export default Home