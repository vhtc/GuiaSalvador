import React, { Component } from 'react';
import { 
    AppRegistry, 
    ScrollView, 
    Text, View,
    StyleSheet,
    Image,
    Button,
    Alert,
    TouchableOpacity,
    Dimensions } from 'react-native';   
import { tsNonNullExpression, withStatement } from '@babel/types';


        let screenWidth = Dimensions.get('window').width;      
        let screenHeight = Dimensions.get('window').height;
        
        
export default class HorizontalScrollView extends Component {
    render() { 
        
       // let screenWidth = Dimensions.get('window').width;      
       // let screenHeight = Dimensions.get('window').height;     
        return(
            //<View style={styles.container}>
                
        <ScrollView
        
                horizontal={true}  
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}    
                scrollIndicatorInsets={{top: 30, left: 10, bottom: 30, right: 10}} //ios                    
                onMomentumScrollBegin={()=>{}}
                onMomentumScrollEnd={() => {}}

                onScroll={(event)=>{
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`
                    console.log(logData);
                }}
                scrollEventThrottle={10}
            >

             <View style={styles.scroll}>
                 
             <Text 
                    style={{fontSize:25, 
                            padding: 15, 
                            color: '#3D3D3D',                                            
                            textAlign: 'center',
                            marginTop:'-20%',
                            }}                
                    >
                        Descubra lugares novos e
                        interessantes perto de você
                </Text>
                <Image
                    style={styles.image1}
                    source={require('/Users/vhtc/Desktop/GuiaSalvador/guiasalvador/images/pngs/salvador.png')}
                />
                <Text 
                    style={{fontSize:19, 
                            padding: 15, 
                            color: '#6E6E6E',                                            
                            textAlign: 'center',
                            marginTop:'-1%',
                            }}                
                    >
                        Capital da alegria, do axé, do acarajé e repleta de história 
                </Text>
                
                
            </View>

            <View style={styles.scroll}>  
            <Text 
                    style={{fontSize:25, 
                            padding: 15, 
                            color: '#3D3D3D',                                            
                            textAlign: 'center',
                            marginTop:'-20%',
                            }}                
                    >
                        Explore as melhores praias do Brasil
                </Text>      
                <Image
                    style={styles.image1}
                    source={require('/Users/vhtc/Desktop/GuiaSalvador/guiasalvador/images/pngs/farol.png')}
                />
                <Text 
                    style={{fontSize:19, 
                            padding: 15, 
                            color: '#6E6E6E',                                            
                            textAlign: 'center',
                            marginTop:'-1%',
                            }}                
                    >
                    São mais de 40 quilômetros de praias por toda orla da Cidade 
                </Text> 
            </View>
                
            <View style={styles.scroll}>  
            <Text 
                    style={{fontSize:25, 
                            padding: 15, 
                            color: '#3D3D3D',                                            
                            textAlign: 'center',
                            marginTop:'-20%',
                            }}                
                    >
                    Conheça os principais pontos turísticos de Salvador
                </Text>         
                <Image
                    style={styles.image1}
                    source={require('/Users/vhtc/Desktop/GuiaSalvador/guiasalvador/images/pngs/elevador.png')}
                />
            </View>
        </ScrollView>
        );        
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    image1:{
        width: '85%',  //largura
        height: '65%', //altura
        //borderRadius:20, //raio das bordas
        //marginTop:'-30%', //distancia da margem do top
        //borderWidth:3, //tamanho das bordas das imagens
        //borderColor:'#63535B', //cor da borda das imagens
        
    },

    scroll:{
        backgroundColor:'#F2F4FC',
        flex: 1,
        height: screenHeight,
        //borderRadius: 50,
        resizeMode: 'cover',
        //marginTop: 50,
        width: screenWidth,
        //width: null,                                 
        justifyContent: 'center',
        alignItems: 'center'
    },
})