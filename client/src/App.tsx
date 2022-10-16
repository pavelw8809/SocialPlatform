import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(res => {
      console.log(res);
      setActivities(res.data);
    })
  }, [])

  return (
    <div className="App">
      <Header as='h2' icon='users' content='MyLife'/>

      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
