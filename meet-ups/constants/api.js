// export const fetchMeetups = () => fetch('http://localhost:3000/api/meetups')
//   .then((response) => response.json())
//   .catch((error) => {
//     console.error(error);
//   });
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const faceGroupId = '594fc513059acd6b3e6cf530';

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
