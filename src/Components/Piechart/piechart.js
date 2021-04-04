import Chart from "react-google-charts";
import React, { Component } from 'react';
import './piechart.css';

class PieChart extends Component {
    positive = this.props.positive;
    negative = this.props.negative;

    render() {
        return (
            <div className='pie-chart'>
                <Chart
                    width={'40vw'}
                    height={'30vh'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Sentiment', 'Score'],
                        ['Positive', this.positive],
                        ['Negative', this.negative],
                    ]}
                    options={{
                        is3D: true,
                        backgroundColor: 'transparent',
                        colors: ['#64E460', '#DD4444'],
                        fontName: "Quicksand",
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        );
    }
}

export default PieChart;