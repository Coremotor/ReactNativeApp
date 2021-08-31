import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgAbout(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 45.999 45.999" {...props}>
      <Path d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 11-6 0V21a3 3 0 116 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z" />
    </Svg>
  );
}

export default SvgAbout;
