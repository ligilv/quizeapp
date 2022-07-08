import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const FetchData = () => {
  const [data, setData] = useState([]);
  const [final, setFinal] = useState([]);
  const [selectedName, setSelectedName] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        setData(result.data);
        setFinal(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    //namwe
    fetchData();
  }, []);
  const onItemPress = item => {
    if (selectedName.includes(item.name)) {
      setSelectedName(selectedName.filter(x => x != item.name));

      console.log(selectedName);
    } else {
      console.log(item.name);
      setSelectedName([...selectedName, item.name]);
      console.log(selectedName);
    }
  };
  const searchName = item => {
    console.log(item);
    setSearchValue(item);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: selectedName.includes(item.name)
                ? 'yellow'
                : 'grey',
            }}
            onPress={() => onItemPress(item)}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </TouchableOpacity>
        )}
      />
      <TextInput
        placeholder="search"
        onChangeText={searchName}
        // onKeyPress={TestFun}
        value={searchValue}
      />
    </View>
  );
};
// Glenna Reichert

export default FetchData;

const styles = StyleSheet.create({});
