import React from 'react';
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';

// import { Container } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}
 
const Option: React.FC<Props> = (props) => {
  const { title, image, ...rest } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Image
        source={image}
        style={styles.image}
      />
      <Text style={styles.title}>Title</Text>
    </TouchableOpacity>
  );
}

export default Option;