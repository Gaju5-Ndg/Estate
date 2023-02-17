import React from "react";
import './board.css';
import {AiOutlineBarChart} from 'react-icons/ai';
import {TbMessages} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx';
import {TiTick} from 'react-icons/ti';
import {AiOutlineCalendar} from 'react-icons/ai';
import {TiMessage} from 'react-icons/ti';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ['Pink', 'LightBlue', 'Orange', 'Blue', 'Violet', 'Pink'],
    datasets: [
      {
        label: '# of Votes',
        data: [19, 10, 7, 3, 1, 18],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export const Board = ()=>{
    return (
        <div>
            <div id="generaldashboard-under-navigation">

            </div>
            <div id="generaldashboard-options-list">
                <div className="generaldashboard-option">
                    <div className="generaldashboard-option-icon">
                        <AiOutlineBarChart/>
                    </div>
                    <div className="generaldashboard-title">
                        Active Listings
                    </div>
                    <div className="generaldashboard-nums">
                        124
                    </div>
                </div>
                <div className="generaldashboard-option">
                    <div className="generaldashboard-option-icon">
                        <AiOutlineBarChart/>
                    </div>
                    <div className="generaldashboard-title">
                        Listing Views
                    </div>
                    <div className="generaldashboard-nums">
                        1000
                        <span style={{fontSize:11,color:"grey",wordSpacing:2,marginLeft:3}}>(<span style={{color:"#59C0AB"}}>+356</span> this week)</span>
                    </div>
                </div>
                <div className="generaldashboard-option">
                    <div className="generaldashboard-option-icon">
                        <TbMessages/>
                    </div>
                    <div className="generaldashboard-title">
                        The reviews
                    </div>
                    <div className="generaldashboard-nums">
                        1000
                        <span style={{fontSize:11,color:"grey",wordSpacing:2,marginLeft:3}}>(<span style={{color:"#59C0AB"}}>+12</span> this week)</span>
                    </div>
                </div>
                <div className="generaldashboard-option">
                    <div className="generaldashboard-option-icon">
                        <AiOutlineHeart/>
                    </div>
                    <div className="generaldashboard-title">
                        Times Bookmarked
                    </div>
                    <div className="generaldashboard-nums">
                        2329
                        <span style={{fontSize:11,color:"grey",wordSpacing:2,marginLeft:3}}>(<span style={{color:"#59C0AB"}}>+234</span> this week)</span>
                    </div>
                </div>
            </div>
            <div id="realdashboard-statistic">
                Your Statistic
                <div id="statistic-chart">
                <Bar data={data} />
                </div>
            </div>
            <div id="last-activities">
                Previous activities
                <div className="dashboard-recent-activity" style={{marginTop:20}}>
                    <div className="recent-activity-close">
                        <RxCross2/>
                    </div>
                    <div className="activity-date">
                        <AiOutlineCalendar style={{color:"#6896FD",fontSize:18,marginRight:5}}/>
                        5 october 2001
                    </div>
                    <div className="recent-activity-icon">
                        <TiTick/>
                    </div>
                    <div className="activity-desc">listing <span style={{color:"#6896FD"}}>xxxxxx</span> xxxxx</div>
                </div>
                <div className="dashboard-recent-activity">
                    <div className="recent-activity-close">
                        <RxCross2/>
                    </div>
                    <div className="activity-date">
                        <AiOutlineCalendar style={{color:"#6896FD",fontSize:18,marginRight:5}}/>
                        2  feb 2021
                    </div>
                    <div className="recent-activity-icon">
                        <TiMessage/>
                    </div>
                    <div className="activity-desc">Ange got her new house <span style={{color:"#6896FD"}}></span> xxxx</div>
                </div>
                <div className="dashboard-recent-activity">
                    <div className="recent-activity-close">
                        <RxCross2/>
                    </div>
                    <div className="activity-date">
                        <AiOutlineCalendar style={{color:"#6896FD",fontSize:18,marginRight:5}}/>
                        2 feb 2021
                    </div>
                    <div className="recent-activity-icon">
                        <AiOutlineHeart/>
                    </div>
                    <div className="activity-desc"><span style={{color:"#6896FD"}}>Hello</span> i left <span style={{color:"#6896FD"}}>my home</span> xxxx</div>
                </div>
            </div>
        </div>
    )
}
export default Board