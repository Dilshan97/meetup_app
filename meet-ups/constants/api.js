export const fetchMeetups = () => {
    return fetch('http://localhost:3000/api/meetups')
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
}