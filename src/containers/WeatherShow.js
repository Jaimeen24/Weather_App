import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import DayCard from './DayCard/Daycard';
import classes from './WeatherShow.module.css';
import SearchCity from '../components/SearchCity/SearchCity';
import * as actions from '../store/actions/index';

class Weathershow extends Component {
    constructor(props) {
        super( props );
        this.state = {
          zipcode: ''
        }
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue(val) {
        this.setState({ zipcode: val });
      }

    componentDidUpdate = () => {
        this.props.onfetchWeatherData(this.state.zipcode);
    }

    formatDayCards = () => {
        return this.props.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
        }

    render () {
        return (
            <div>
                <div className="container">
                    <h2 className={classes.WeatherShow}>Weather App</h2>
                    <hr />
                    <SearchCity handleInput={this.handleInputValue}/>
                    <hr />
                    <h5 className="display-5 text-muted">Surat, Gujarat, India</h5>
                    <div className="row justify-content-center">
                        {this.formatDayCards()}
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        dailyData : state.dailyData,
        zipcode: state.zipcode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onfetchWeatherData : (zipcode) => dispatch(actions.fetchWeatherData(zipcode))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Weathershow);