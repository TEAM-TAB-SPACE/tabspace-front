import { ResponsiveRadar } from '@nivo/radar';

function GrowthChart({ data, indexBy, keys }) {
  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy={indexBy}
      maxValue={100}
      valueFormat=">-.2f"
      margin={{ top: 20, right: 53, bottom: 20, left: 53 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={10}
      gridShape="linear"
      dotSize={7}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={{ scheme: 'set3' }}
      blendMode="multiply"
      motionConfig="wobbly"
    />
  );
}

export default GrowthChart;
