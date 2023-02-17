import React from 'react'

import NavBar from "../components/NabBar";
import { Filter } from '../components/Filter';
import { NewsCard } from '../components/NewsCard';
import {Popup} from './creat';

const news = [
    {
        mainPhoto: "https://th.bing.com/th/id/OIP.OUL-DdWtQbaiaxiM6ke27wHaD4?w=331&h=180&c=7&r=0&o=5&pid=1.7.jpg",
        newsTitle: "The Crosby Estates At Rancho Sante Fe",
        newsContent: "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://th.bing.com/th/id/OIP.OUL-DdWtQbaiaxiM6ke27wHaD4?w=331&h=180&c=7&r=0&o=5&pid=1.7.jpg",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://th.bing.com/th/id/OIP.OUL-DdWtQbaiaxiM6ke27wHaD4?w=331&h=180&c=7&r=0&o=5&pid=1.7.jpg",
        newsTitle: "The Crosby Estates At Rancho Sante Fe",
        newsContent: "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://th.bing.com/th/id/OIP.OUL-DdWtQbaiaxiM6ke27wHaD4?w=331&h=180&c=7&r=0&o=5&pid=1.7.jpg",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://th.bing.com/th/id/OIP.cWuy28gWlixNHNUfslwF0wHaHZ?w=177&h=180&c=7&r=0&o=5&pid=1.7.jpg",
        newsTitle: "The Crosby Estates At Rancho Sante Fe",
        newsContent: "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://th.bing.com/th/id/OIP.cWuy28gWlixNHNUfslwF0wHaHZ?w=177&h=180&c=7&r=0&o=5&pid=1.7.jpg",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    }
];


export const News = () => {
    return (
        <div>
            <Popup/>
            <NavBar />
            <Filter />
            
            <div className="newsBanner">
                <div className="overLay">
                    <div className="newsBannerText">
                        <h1>Our Blog</h1>
                        <p className='text-sm'>The latest real estate news and insights from San Diego, and Beyond.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="newsContainer">
                    {news.map((item, index) => {
                        return (
                            <NewsCard
                                mainPhoto={item.mainPhoto}
                                newsTitle={item.newsTitle}
                                newsContent={item.newsContent}
                            />
                        )
                    }  )}
                </div>
                </div>

            </div>
            );
}