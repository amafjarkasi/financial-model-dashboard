import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'
import axios from 'axios';


class Dashboard extends Component {
  

  state={mes:[]};

  onSearchSubmit=async()=>{
    const response = await axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL?',{

    });
    console.log(response.data[0].price);
    
   
  }
  componentDidMount(){
    this.onSearchSubmit();
  }

  render() {
    
    let dataSales = {
      labels: [
        "9:00AM",
        "10:00AM",
        "11:00AM",
        "12:00PM",
        "1:00PM",
        "2:00PM",
        "3:00PM",
        "4:00PM"
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695],
        [67, 152, 143, 240, 287, 335, 435, 437],
        [23, 113, 67, 108, 190, 239, 307, 308]
      ]
    }
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
            <button onSubmit={this.onSearchSubmit}/>
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Major World Indexes</h4>
                  <p className="card-category">24 Hours performance</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={dataSales} type="Line" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> NYSE 
                    <i className="fa fa-circle text-danger"></i> TSX 
                    <i className="fa fa-circle text-warning"></i> HSE 
                </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated -:-- minutes ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard