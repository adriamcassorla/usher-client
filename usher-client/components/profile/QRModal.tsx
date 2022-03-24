import React from 'react';
import { BlurView } from 'expo-blur';
import { Center, Text } from 'native-base';
import QRCode from 'react-native-qrcode-svg';

const QRlogo = require('../../assets/qrcodelogo.png');

const QRModal = ({ ticketId }: { ticketId: string }) => {
  return (
    <BlurView
      style={{ height: '100%', width: '100%' }}
      tint="dark"
      intensity={100}
    >
      <Center w="full" h="full">
        <Center w="240" h="240" borderRadius={16} overflow="hidden">
          <QRCode
            value={ticketId}
            size={240}
            enableLinearGradient={true}
            linearGradient={['#070c15', '#516b92']}
            logo={QRlogo}
            logoBackgroundColor="#FFFFFFb5"
            logoSize={40}
            logoBorderRadius={0}
          />
        </Center>
        <Text color="white" bold fontSize="3xl">
          Scan me 🤠
        </Text>
      </Center>
    </BlurView>
  );
};

export default QRModal;
