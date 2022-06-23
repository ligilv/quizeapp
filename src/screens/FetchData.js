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

        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    //namwe
    fetchData();
  }, []);
  function searchName(v) {
    console.log(v);
    setSearchValue(v);
    if (v == '') {
      setData(final);
    } else {
      setData(data.filter(item => item.name.includes(v)));
    }
  }
  function onNamePress(item) {
    if (selectedName.includes(item.name)) {
      console.log(selectedName.includes(item.name));
      setSelectedName(selectedName.filter(i => i != item.name));
    } else {
      setSelectedName(prev => [...prev, item.name]);
      console.log(selectedName);
    }
  }
  const TestFun = val => {
    console.log(val);
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="search"
        onChangeText={searchName}
        // onKeyPress={TestFun}
        value={searchValue}
      />
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
            onPress={() => onNamePress(item)}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
// Glenna Reichert

export default FetchData;

const styles = StyleSheet.create({});
