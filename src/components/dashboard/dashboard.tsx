import {Outlet, Link} from 'react-router-dom';
import NavBar from '../shared/navbar';
import { Line,LineChart,XAxis,Tooltip,CartesianGrid,ResponsiveContainer,PieChart,Pie } from 'recharts';
import '../../../node_modules/recharts/umd/Recharts'

const DashBoard = ()=>{
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      const data1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      
    return (
        <>
            <LineChart
                width={400}
                height={400}
                data = {data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                </LineChart>

                <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data1} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
        </>
    )
}

export default DashBoard