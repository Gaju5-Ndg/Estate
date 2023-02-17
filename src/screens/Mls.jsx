import React from 'react'
import { PropertyCard } from '../components/PropertyCard'

import { Filter } from '../components/Filter'
import NavBar from '../components/NabBar'
import {Popup }from './creat';


function Mls() {
  const data = [
    {
      'price': '230,000',
      'bed': '42',
      'bath': '12',
      'square': '12',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    }, {
      'price': '330,000',
      'bed': '32',
      'bath': '12',
      'square': '12',
      'image': 'https://th.bing.com/th/id/OIP.nE86R8bSQ8Njh6xYa3eb4gHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7.jpg'
    },
  ];
  return (<div>
    <Popup/>
    <NavBar />
    <Filter />
    <div className='mls-cOntainer'>
      <div className='map-container'>map</div>
      <div className='w-full'>
      <p><b>Searching: For Sale</b>, Cardiff, Carlsbad, Del Mar, La Jolla, North Park San Diego, Ramona, Rancho Santa Fe</p>
        <div className='left-properties'>
          
          {data.map((item, index) => {
            return (
              <PropertyCard price={item.price} bath={item.bath} bed={item.bed} square={item.square} img={item.image} />
            );
          })
          }
        </div>
      </div>
    </div>
  </div>

  )
}
export default Mls