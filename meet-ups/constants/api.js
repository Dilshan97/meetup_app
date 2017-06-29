// export const fetchMeetups = () => fetch('http://localhost:3000/api/meetups')
//   .then((response) => response.json())
//   .catch((error) => {
//     console.error(error);
//   });
import axios from 'axios';
import { Platform } from 'react-native';

let url;

if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;

const faceGroupId = '59512f0c52dca218da57b130';

class MeetupApi {
  constructor() {
    this.groupId = faceGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async featchGroupMeetups() {
    const { data } = await axios.get(this.path);

    return data.meetups;
  }
}

export {
  MeetupApi,
};
