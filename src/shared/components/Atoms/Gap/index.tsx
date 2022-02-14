import React from 'react';
import {View} from 'react-native';

interface GapProps {
  width?: number;
  height?: number;
}

const Gap = ({width, height}: Partial<GapProps>) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
