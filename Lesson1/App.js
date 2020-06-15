
// Function 1: Scan QR code get the log information
// Function 2: Solve the issue that robot can not store log when issue happens
// Function 3: Solve the return case 
// Function 4: Optilize the rework workflow, 
// Function 5: Store time cost in every stage including production line, ship, runtime, clean time,
// Function 6: More easy way to repair product when you change key commpont system will update commpont information to server
// Function 7: More easy way to tell seals people 
// Function 8: Have camer view to record a vieo and log file, Devloper can view log realtime and video and draw back slider
// Function 9: 

// import React, {Commponent, useState} from 'react';
// import { Text, TextInput, View, Image, Button, ScrollView, ListView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Platform, ListView, SectionList, FlatList, StyleSheet, Text, View } from 'react-native';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}
export default SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <Text>'Platform.Version'</Text>
        <SectionList
          sections={[
            // {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            // {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title:'D', data: ['Devin', 'Dan', 'Dominic']},
            {title:'J', data: ['Jacks','James','Jimmy','Johsn']},
          ]}
          // renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderItem={({item}) => <Text style={styles.item}>{item}></Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}
// export default SectionListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={[
//           {title:'D', Data:['Devin', 'Dan', 'Dominic']},
//           {title:'J',data:['Jack','James','Jimmy','John']},
//         ]}
//         renderItem={({item}) => <Text style={style.item}>{item}></Text>}
//         renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>} 
//         // renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//         keyExtractor={(item,index) => index}
//       />
//     </View>
//   );
// }


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// const style = StyleSheet.create({
//   container:{
//     flex: 1,
//     paddingTop:22
//   },
//   sectionHeader:{
//     paddingTop:2,
//     paddingLeft:10,
//     paddingRight:10,
//     paddingBottom:2,
//     fontSize:14,
//     fontWeight:'bold',
//     backgroundColor:'rgba(247,247,247,1.0)',
//   },
//   item:{
//     padding: 10,
//     fontSize:18,
//     height:44,
//   },

// });


// export default function PizzaTranslator(){
//   const [text, setText] = useState('');
//   return (
//     <View style={style.container, {padding: 10}}>
//       <FlatList 
//           data={[
//             {key: 'Devin'},
//             {key: 'Devin1'},
//             {key: 'Devin2'},
//             {key: 'Devin3'},
//             {key: 'Devin4'},
//           ]}
//           renderItem={({item})=> <Text style={style.item}>{item.key}</Text>}
//         />
//       <ScrollView>
//         <TextInput
//           style={{height:40}}
//           placeholder="Type here to translate!"
//           onChangeText={text => setText(text)}
//           dafaultValue={text}
//         />
//         <Text style={{padding: 10, fontSize: 24}}>
//           {text.split(' ').map((word) => word && 'Nice').join(' ')}
//         </Text>
//         <Cat name = "jff" />
//         <Cat name = "two" />
      
//         <Text style={{ fontSize:96}}> Scroll me plz </Text>
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Text style={{ fontSize:96}}> Scroll me plz </Text>
        
//     </ScrollView>
//     </View>
//   );
// }

// function Cat(props) {
//   const [isHungry, setIsHungry] = useState(true);

//   return(
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? "Hungry":"Full"} 
//       </Text>
//       <Button onPress={() => {
//         setIsHungry(false);
        
//       }}
//       disabled={!isHungry}
//       title={isHungry ? "Give me some milk!" : "Thank you!"}
//       />
//     </View>
//   );
// }
