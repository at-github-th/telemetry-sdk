import React from 'react';
import { SafeAreaView, Text, Button, ScrollView } from 'react-native';

export default function App() {
  const [data, setData] = React.useState(null);
  return (
    <SafeAreaView style={ flex:1, padding:16 }>
      <ScrollView>
        <Text style={ fontSize:22, fontWeight:'600', marginBottom:12 }>SDK for Telemetry/Analytics – Mobile</Text>
        <Button title="Ping API" onPress={async()=>{
          try {
            const r = await fetch('http://10.0.2.2:4108/'); // Android emulator loopback
            setData(await r.json());
          } catch(e) { setData({ error: String(e) }); }
        }} />
        <Text selectable style={ marginTop:16 }>{JSON.stringify(data,null,2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
