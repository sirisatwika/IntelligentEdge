import React from 'react'
import ReactApexChart from "react-apexcharts";
import {useState, useEffect} from "react";
import axios from "axios";

function Subnets(){
	
	let [val, setVal] = useState([]);
	useEffect(()=>{
	axios.get('http://localhost:5000/api/v1/gateway/name/getdevicenames')
	.then(response =>{
	console.log(response);
	const gatewaydata = response.data;
	const gatewaynames = [];
	const devicedata = [];
	
	gatewaydata.forEach(gateway=>{
		gatewaynames.push(gateway.name);
		
		const devicecnt = [];
		devicecnt.push(gateway.data);
		devicedata.push({ 
		name : gateway.name,
		data : devicecnt
		
		});
	});
	setVal(devicedata);
	
	})
	.catch(console.error);
	},[]);
	
	console.log(val);
	
	const series = val;
     
	const options = {
        colors: ['#5614B0', '#89253e', '#fdbb2d'],
        chart: {
          height: 350,
          type: 'bar',
          stacked: true,
          toolbar: {
            show: false
          },
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
        },
        dataLabels: {
          enabled: true,
          position: 'center',
          style: {
              fontSize: '10px',
              fontWeight: 600
          }
      },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            distributed: false,
            dataLabels: {
              enabled: true,
              total: {
                enabled: true,
                style: {
                  fontSize: '10px',
                  fontWeight: 600
                }
              },
              position: 'center',
              style: {
                fontSize: '10px',
                fontWeight: 500
              }
            },

          },
        },
        legend: {
          show: false
          //position: 'top',
          //fontSize: '11px',
        },
        xaxis: {
          categories: ['Gateway-01'],
          labels: {
            show: true,
            hideOverlappingLabels: true,
            trim: true,
            style: {
              fontSize: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 500,
            },
          },
          title: {
            text: 'Gateways',
            offsetY: 75,
            style: {
              color: '#004a87',
              fontSize: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: '600',
            },
          },
        },
        yaxis: {
          min: 0,
          max: 50,
          tickAmount: 2,
          show: true,
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            style: {
              fontSize: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 500,
            },
          },
          axisBorder: {
            show: true,
            color: '#ccc',
          },
          title: {
            text: 'Values',
            style: {
              color: '#004a87',
              fontSize: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: '600',
            },
          },

        },
      }

return (
	 <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={210} />
      </div>	
	)

}export default Subnets;


/*class Subnets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: 'Thermal Sensor',
        data: [30, 40, 35, 20]
      }, {
        name: 'Voltage Sensor',
        data: [40, 25, 30, 33]
      },
      {
        name: 'Pressure Sensor',
        data: [20, 24, 20, 26]
      }],
      options: {
        colors: ['#5614B0', '#89253e', '#fdbb2d'],
        chart: {
          height: 350,
          type: 'bar',
          stacked: true,
          toolbar: {
            show: false
          },
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
        },
        dataLabels: {
          enabled: true,
          position: 'center',
          style: {
              fontSize: '10px',
              fontWeight: 600
          }
      },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            distributed: false,
            dataLabels: {
              enabled: true,
              total: {
                enabled: true,
                style: {
                  fontSize: '10px',
                  fontWeight: 600
                }
              },
              position: 'center',
              style: {
                fontSize: '10px',
                fontWeight: 500
              }
            },

          },
        },
        legend: {
          show: true,
          position: 'top',
          fontSize: '11px',
        },
        xaxis: {
          categories: ['Gateway-01', 'Gateway-02', 'Gateway-03', 'Gateway-04'],
          labels: {
            show: true,
            hideOverlappingLabels: true,
            trim: true,
            style: {
              fontSize: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 500,
            },
          },
          title: {
            text: 'Gateways',
            offsetY: 75,
            style: {
              color: '#004a87',
              fontSize: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: '600',
            },
          },
        },
        yaxis: {
          min: 0,
          max: 100,
          tickAmount: 2,
          show: true,
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            style: {
              fontSize: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 500,
            },
          },
          axisBorder: {
            show: true,
            color: '#ccc',
          },
          title: {
            text: 'Values',
            style: {
              color: '#004a87',
              fontSize: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: '600',
            },
          },

        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={210} />
      </div>
    )
  }
}*/

