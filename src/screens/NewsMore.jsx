import React from "react";
import { Filter } from "../components/Filter";
import NavBar from "../components/NabBar";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { NewsCard } from "../components/NewsCard";
import {Popup} from './creat';

const news = [
  {
    mainPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtqIIUres0BxnahQb9vm3Kdqa0pr53QhvKg&usqp=CAU",
    newsTitle: "The Crosby Estates At Rancho Sante Fe",
    newsContent:
      "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]",
  },
  {
    mainPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jBW0SkkJvPp3HRZ8XS32NiKdtiHOIYEdrMeIaSSHMYqdKZjxt_3W3RHqAniHrOfV18I&usqp=CAU",
    newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
    newsContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]",
  },
  {
    mainPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHzn_FKRqnOllGG1piB14IB2PLau1UQZRmB6gLNFSiuDMRuUvZHJKzfhfyxP1UXS1tcY&usqp=CAU",
    newsTitle: "The Crosby Estates At Rancho Sante Fe",
    newsContent:
      "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]",
  },
  {
    mainPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjbKaD7d9DLZMEeROeRdKSnagCvIrgOIWnA&usqp=CAU",
    newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
    newsContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]",
  },
];

function NewsMore() {
  return (
    <div>
      <Popup/>
      <NavBar />
      
      <Filter />
      <div className="bg-white">
        <div className="blogBanner ">
          <div className="blogTitle">
            <div className="avatar">
              <img
                src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg"
                alt="blog"
              />
            </div>
            <div className="blogInfo">
              <h1 className="text-xl text-white">
                New Development: The Crosby Estates At Rancho Sante Fe
              </h1>
            </div>
          </div>
          <div className="overLay"></div>
        </div>

        <div className="container">
          <div className="blogContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              ex mi. Morbi erat felis, elementum eget odio venenatis, pretium
              congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim
              vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam
              urna dolor, dapibus at tempus at, euismod quis diam. Aenean non
              lacus arcu. Nam ligula felis, mattis vel interdum nec, tempus
              commodo arcu.
            </p>
            <p>
              Praesent aliquet lacus vel libero porttitor, at rhoncus erat
              tincidunt. Nunc sodales magna ut purus tempor gravida. Vestibulum
              quis pulvinar lacus, quis molestie turpis. In sit amet dui
              commodo, elementum diam vitae, placerat elit. Integer luctus nec
              ligula nec elementum. Ut fermentum purus a nibh pulvinar, sit amet
              tempus erat laoreet. Suspendisse bibendum eu purus quis convallis.
              Fusce eu pulvinar ante, quis aliquet purus.
            </p>
            <p>
              Nullam tristique leo finibus turpis sollicitudin, interdum gravida
              tortor ultrices. Fusce condimentum leo et arcu laoreet, eu
              ultrices turpis venenatis. Mauris ac lacus ac arcu tristique
              auctor id sed ante. Pellentesque volutpat luctus ex vel ultricies.
              Suspendisse potenti. Nam bibendum justo a arcu viverra tempus.
              Maecenas eget fringilla velit. Duis at libero eu turpis sagittis
              gravida at vitae magna. Integer quis porta quam. Duis gravida
              neque ex, ac mollis quam eleifend a.
            </p>
            <p>
              Sed nec faucibus sapien, ac bibendum ligula. Vivamus iaculis
              euismod cursus. Vivamus porttitor consectetur faucibus. Fusce
              bibendum vehicula enim, in posuere sapien tempus ac. Ut facilisis
              mi ac justo pharetra ullamcorper. Praesent sed lacus libero.
              Vestibulum vitae ipsum sed justo consectetur sagittis in vel sem.
              Aenean eleifend ultricies ex, sed laoreet eros imperdiet nec. Sed
              vitae neque eu tortor dapibus facilisis. Ut egestas mollis lectus
              posuere suscipit.
            </p>
            <p>
              Maecenas commodo tincidunt justo vel faucibus. Morbi ullamcorper
              vehicula tellus, eget fringilla ipsum. In ut ante vitae ligula
              elementum fermentum. Fusce efficitur neque ac faucibus sodales.
              Pellentesque eu arcu dictum, convallis ante in, dictum ipsum.
              Maecenas ac nunc nec ex tristique tristique. Aliquam condimentum
              justo eu gravida tristique. Vivamus ipsum ante, ultrices in
              tincidunt vitae, pellentesque eget mauris. Praesent eleifend odio
              et tortor ullamcorper tempor. Donec tempor sodales quam sit amet
              molestie. Proin porttitor orci vitae elit faucibus gravida. In
              iaculis nulla sed urna imperdiet, a aliquet nunc blandit. Donec
              rhoncus aliquet commodo. Vestibulum gravida venenatis pharetra.
            </p>
          </div>
        </div>

        <div className="padding bg-white">
          Share this post
          <div className="social ">
            <div className="socialIcon">
              <FaFacebookF />
            </div>
            <div className="socialIcon">
              <IoLogoTwitter />
            </div>

            <div className="socialIcon">
              <FaLinkedinIn />
            </div>
          </div>
          <hr></hr>
        </div>

        <div className="container">
          <h3>Related Posts</h3>

          <div className="newsContainer">
            {news.map((item, index) => {
              return (
                <NewsCard
                  mainPhoto={item.mainPhoto}
                  newsTitle={item.newsTitle}
                  newsContent={item.newsContent}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsMore;
