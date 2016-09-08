import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
//need npm install --save react-sparklines for this component to run!
import _ from 'lodash';
//need npm install --save lodash for this component to run!

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props)=> {
  return (
    <div>
    <Sparklines height={100} width={100} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(props.data)}{props.units}</div>
    </div>
  );
}
