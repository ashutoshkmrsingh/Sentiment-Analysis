import Chart from "react-google-charts";
import React, { Component } from 'react';
import './barchart.css';

class BarChart extends Component {
    state = {
        data: [
            ['Aspect', 'Scores'],
            ['Battery', 100],
            ['Screen', 56],
            ['Display', 66],
            ['Speaker', 17],
        ],
    }

    render() {
        return (
            <div className='barchart'>
                <Chart
                    width={'35vh'}
                    height={'25vh'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={this.state.data}
                    options={{
                        // Material design options
                        chart: {
                            title: '',
                            subtitle: '',
                        },
                        is3D: true,
                        fillOpacity: 0,
                        colors: ['#eac228',],
                        fontName: "Quicksand",
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        );
    }
}

export default BarChart;