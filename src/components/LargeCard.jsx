import React from 'react'
export const NewsCard = ({ mainPhoto, newsTitle, newsContent }) => {
    return (
        <div className="LargeCard">
            <div className="LargeCardImage">
                <img src={mainPhoto}></img>
            </div>
            <div className="LargeCardHeader">
                <div className='Large-avatar'>
                    <img src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg'></img>
                </div>
                <div>
                    <h1>{newsTitle}</h1>
                    <p className='text-sm upper'>Spotlight</p>
                    <h3>La Jolla</h3>
                </div>
            </div>
            <div className="LargeCardText">

                <p className='text-md'>
                    {newsContent}                </p>
           <a href='/viewmore'><div type="submit" className=' btn-primary'>View More</div> </a>

            </div>
                </div>
    )
}