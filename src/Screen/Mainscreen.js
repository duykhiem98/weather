import React from 'react';
import { Text, TouchableOpacity, View,ImageBackground,Image,StyleSheet } from "react-native";
import styled from 'styled-components/native';
import { IC_BIEN1, IC_MAY, IC_MAYMU, IC_SUB } from "../assets";

const App=()=>{
  return(
    <Scontainer>
      <Stop>
        <Sbgroud resizemode={'stretch'} source={IC_BIEN1}>
          <Sbg1>
            <View style={{flexDirection:'row',justifyContent:'center',paddingTop:15}}>
              <Image resizemode={'contain'} source={IC_SUB} style={{width:17,height:17}} />
              <Shn>Ha Noi</Shn>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center',paddingTop:15}}>
              <Image resizemode={'contain'} source={IC_MAY} style={{width:17,height:17}} />
              <SdoC>16°C</SdoC>
            </View>
          </Sbg1>
          <Sbg2>
            <View style={{flexDirection:'row',justifyContent:'center',paddingTop:0}}>
              <Text style={{color:'white'}}>Nhieu may khong mua</Text>
            </View>

            <View style={{width:299,height:90,backgroundColor:'#FF0000',alignItems:'center',left:25,top:10}}>
              <View style={{flexDirection:'column',paddingTop:10,paddingLeft:5}}>
                <St>TIN KHONG KHI LANH TANGG CUONG,RET VA CANH BAO GIO MANH</St>
                <St>Khong khi lanh tang cuong</St>
                <St>05/01/2020  9:30</St>
              </View>
            </View>
          </Sbg2>

          <Sbg3>
            <View style={{paddingLeft:30,paddingTop:30}}>
              <St>Du bao trong ngay</St>
            </View>

            <View style={{paddingHorizontal:30,paddingTop:40}}>
              <Image source={require('../assets/icon/Line1.png')} style={{width:285,height:50}}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:30,paddingHorizontal:20}}>
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
              <Image source={IC_MAYMU} style={{width:15,height:10}} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:10,paddingHorizontal:20}}>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
              <Sm>10:00</Sm>
            </View>

          </Sbg3>

          <Sbg4>
            <View style={{flex:1,paddingTop:25}}>
              <Text style={{fontWeight:'bold',color:'white'}}>TP. Ha Noi</Text>
              <Text style={{color:'white'}}>Du bao trong 3 gio toi</Text>
            </View>
            <View style={{flex:2,flexDirection:'row'}}>
              <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={IC_MAYMU} style={{width:20,height:15}} />
                <Image source={IC_MAYMU} style={{width:20,height:15}} />
              </View>
              <View style={{flex:2,flexDirection:'column',justifyContent:'space-around'}}>
                <View>
                  <ST3>50°C</ST3>
                  <ST2>Xac xuat co mua</ST2>
                </View>
                <View>
                  <ST1>1.25 m/s</ST1>
                  <ST2>Toc do gio</ST2>
                </View>
              </View>
              <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={IC_MAYMU} style={{width:20,height:15}} />
                <Image source={IC_MAYMU} style={{width:20,height:15}} />
              </View>
              <View style={{flex:2,flexDirection:'column',justifyContent:'space-around'}}>
                <View>
                  <ST1>91.3 %</ST1>
                  <ST2>Do am</ST2>
                </View>
                <View>
                  <ST1>3.5</ST1>
                  <ST2>Chi so UV</ST2>
                </View>
              </View>
            </View>
          </Sbg4>
        </Sbgroud>
      </Stop>
      <Sbot>
        <View style={{flex:1}}>
          <TouchableOpacity style={{backgroundColor:'#C4C4C4',alignItems:'center',justifyContent:'center',height:50,borderRadius:6}}>
            <Text>Dong</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:20}}></View>
        <View style={{flex:1}}>
          <TouchableOpacity style={{backgroundColor:'#03A0FF',alignItems:'center',justifyContent:'center',height:50,borderRadius:6}}>
            <Text>Chia se</Text>
          </TouchableOpacity>
        </View>
      </Sbot>

    </Scontainer>
  )
}
const Scontainer=styled(View)`
  flex: 1;
  background-color: #193654;
`;
const Stop=styled(View)`
  flex: 8.5;
  flex-direction: column;
  padding: 40px 20px 20px 20px;
  align-items: center;
`;
const Sbot=styled(View)`
  flex: 1.5;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;

`;
const Sbgroud=styled(ImageBackground)`
  flex: 1;
  width: 350px;
  height: 630px;
  border-radius: 8px;
`;
const Shn=styled(Text)`
  font-size: 17px;
  color: white;
  margin-left: 10px;
`;
const SdoC=styled(Text)`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
`;
const St=styled(Text)`
  font-size: 13px;
  color: white;
`;
const STo=styled(View)`
  flex-direction: row-reverse;
`;
const Sbg1=styled(View)`
  flex: 1.5;
`;
const Sbg2=styled(View)`
  flex: 2.5;
`;
const Sbg3=styled(View)`
  flex: 3;
`;
const Sbg4=styled(View)`
  flex: 3;
  padding-left: 20px;
  padding-right: 20px;
`;
const Sm=styled(Text)`
  font-size: 12px;
  color: white;
`;
const ST3=styled(Text)`
  font-size: 15px;
  font-weight: bold;
  color: #86EFFD;
`;
const ST2=styled(Text)`
  font-size: 12px;
  color: white;
`;
const ST1=styled(Text)`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

export default App;
