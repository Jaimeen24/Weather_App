import React, { Component } from 'react';
import axios from 'axios';

import DayCard from './DayCard/Daycard';
import classes from './WeatherShow.module.css';

class Weathershow extends Component {
    state = {
        fullData: [],
        dailyData: []
    }

    // componentDidMount = () => {
    //     axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=394101,IN&appid=8e333704be69bb431beb520f7e781ad9')
    //         .then(res => {
    //             // console.log(res.data); 
    //             const data = res.data.list;
    //             // // console.log(data);
    //             // data.forEach((reading) => {
    //             //     // console.log(batch);
    //             // })

    //             const dailyData = data.forEach(reading =>
    //                 reading.dt_txt.includes("18:00:00"));
    //             // console.log(dailyData);
    //             this.setState({
    //                 allData: res.list,
    //                 dailyData: dailyData
    //             })
    //         })
    // }

    componentDidMount = () => {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=395006,IN&appid=8e333704be69bb431beb520f7e781ad9')
            .then(res => {
                console.log(res.data);
                const dailyData = res.data.list.filter(read => read.dt_txt.includes("15:00:00"));
                this.setState({
                    allData: res.list,
                    dailyData: dailyData
                })
            })
    }

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
        }

    render () {
        // const API_KEY = process.env.WEATHER_API_KEY;
        // const weatherURL = 
        //     'http://api.openweathermap.org/data/2.5/forecast?zip=394101,IN&appid={process.env.WEATHER_API_KEY}'

        //     fetch(weatherURL)
        //         .then(res => res.json())
        //         .then(data => {
        //             const dailyData = data.filter(read => read.dt_txt.includes("18:00:00"))
        //             this.setState({
        //                 allData: data.list,
        //                 dailyData: dailyData
        //             },() => console.log(this.state))
                // });
        


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