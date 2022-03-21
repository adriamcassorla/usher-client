import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const [top, bottom] = ['#2d3952', '#070c15'];

const GradientProvider = ({children}:any) => {
  return <LinearGradient colors={[top, bottom]}>
    {children}
  </LinearGradient>;
};

export default GradientProvider;
