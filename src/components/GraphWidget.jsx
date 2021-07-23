import {GraphWidgetWrapper} from "./StyledComponents";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export const GraphWidget = ({data}) => {
    const hasData = data.length > 0;
    return (
        <GraphWidgetWrapper>
            {hasData &&
            <LineChart width={1400} height={500} data={data}>
                <Line type="monotone" dataKey="yAxisValues" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="xAxisValues" />
                <YAxis />
                <Tooltip />
            </LineChart>}
        </GraphWidgetWrapper>
    )
}
