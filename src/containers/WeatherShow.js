import React, { Component } from 'react';
import axios from 'axios';

import DayCard from './DayCard/Daycard';
import classes from './WeatherShow.module.css';

class Weathershow extends Component {
    state = {
        fullData: [],
        dailyData: []
    }

    componentDidMount = () => {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=395006,IN&appid=8e333704be69bb431beb520f7e781ad9')
            .then(res => {
                const dailyData = res.data.list.filter(read => read.dt_txt.includes("15:00:00"));
                this.setState({
                    allData: res.list,
                    dailyData: dailyData
                })
            })
    }


    //////////////////////////////////////////////////////////// Accuweather API //////////////////////////////////////////////////////
        // componentDidMount = () => {
        // axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/394101?apikey=GYuP01OYbFVKxkPSNAgowZZDqI65j8b4')
        //     .then(res => {
        //         const dailyData = res.data.DailyForecasts;
        //         this.setState({
        //             allData: res.list,
        //             dailyData: dailyData
        //         })
        //     })
        // }


    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
        }

    render () {
        return (
            <div>
                <div className="container">
                    <h2 className={classes.WeatherShow}>Weather App</h2>
                    <h5 className="display-5 text-muted">Surat, Gujarat, India</h5>
                    <div className="row justify-content-center">
                        {this.formatDayCards()}
                    </div>
                </div>
            </div>
        )
    }
};

export default Weathershow;