import Plot from 'react-plotly.js'
import Radio from './Radio';
import NoData from "./NoData";


const radios = [
  { name: 'Europe', value: 'europe' },
  { name: 'Asia', value: 'asia' },
];


export const Chart = ({data, radioChangeHandler}) => {
  if(!data) {
    return (
      <div>
        <Radio radios={radios} radioChangeHandler={radioChangeHandler}/>
        <NoData />
      </div>
    );
  }else {
    return (
      <div>
        <Radio radios={radios} radioChangeHandler={radioChangeHandler}/>
      <br />
      <Plot
        data={[
          {
            x: data.map((item, index) => { return ( item.TotalDeaths ) }),
            y: data.map((item, index) => { return ( item.Country ) }),
            type: 'bar',
            orientation: 'h'
          },
        ]}
        layout={ {width: 500, height: 400, title: 'Deaths by continent'} }
    />
    <Plot
        data={[
          {
            x: data.map((item, index) => { return ( item.TotalCases ) }),
            y: data.map((item, index) => { return ( item.Country ) }),
            type: 'bar',
            orientation: 'h'
          },
        ]}
        layout={ {width: 500, height: 400, title: 'Cases by continent'} }
    />
    <Plot
        data={[
          {
            x: data.map((item, index) => { return ( item.TotalTests ) }),
            y: data.map((item, index) => { return ( item.Country ) }),
            type: 'bar',
            orientation: 'h'
          },
        ]}
        layout={ {width: 500, height: 400, title: 'Tests by continent'} }
    />
    </div>
    )
  }
}
export default Chart;