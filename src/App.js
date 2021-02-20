import logo from './logo.svg';
import './App.css';
import TradeFederationDonutChart from './components/tradeFederationChart'

function App() {


  let data1=[
    {label:"OM", value: 42000000, color:"rgb(190, 76, 153)"},
    {label:"OM", value: 10000000, color:"rgb(235, 29, 108)"},
  ];

  let data2=[
    {label:"OM", value: 77000000, color:"rgb(190, 76, 153)"},
    {label:"OM", value: 22000000, color:"rgb(235, 29, 108)"},
  ];

  let data3=[
    {label:"OM", value: 42000000, color:"rgb(190, 76, 153)"},
    {label:"OM", value: 23000000, color:"rgb(235, 29, 108)"},
  ];



  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="body">
        <div style={{height:'2000px'}}>
    
          <TradeFederationDonutChart width="300" id="ss0990ds" theme={'dark'} data={data1}/>
          <TradeFederationDonutChart width="300" id="f9d9d9f8" theme={'dark'} data={data2}/>

          <div style={{backgroundColor:'white'}}>
            <TradeFederationDonutChart width="500" id="s0s9d9d" theme={'light'} data={data3} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
