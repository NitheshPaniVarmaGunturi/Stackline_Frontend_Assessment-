import React  from 'react';
import * as d3 from 'd3';
import './styles.css';

const GraphData = ({data}) => {
    const parseDate = d3.timeParse('%Y-%m-%d');

    const x = d3.scaleLinear()
        .domain(d3.extent(data, d => parseDate(d.weekEnding)))
        .range([0, 1000]);

    const y = d3.scaleLinear()
        .domain([100, d3.max(data, d => d.retailSales)])
        .range([150, 100]);

    const y2 = d3.scaleLinear()
        .domain([150, d3.max(data, d => d.wholesaleSales)])
        .range([200, 150]);

    const retailLine = d3.line()
        .x(data => x(parseDate(data.weekEnding)))
        .y(data => y(data.retailSales))
        .curve(d3.curveCatmullRom.alpha(0.1));

    const wholesaleLine = d3.line()
        .x(data => x(parseDate(data.weekEnding)))
        .y(data => y2(data.wholesaleSales))
        .curve(d3.curveCatmullRom.alpha(0.1));

    const renderRow = () => {
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        return (
            <div className={'months'}>
                {months.map(month => <span>{month}</span>)}
            </div>
        );
    };

    return (
        <div className={'graph'}>
            <div className={'graphContainer'}>
            <span>Retail Sales</span>
                <svg width={1000} height={400}>
                    <path className={'retailSales'} d={retailLine(data)} />
                    <path className={'wholesaleSales'} d={wholesaleLine(data)} />
                </svg>
                {renderRow()}
            </div>
        </div>
    );
}

export default GraphData;
