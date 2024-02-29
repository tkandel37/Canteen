
const Greeting = () => {
  const date = new Date();
  const currentHour = date.getHours();
  const greeting = currentHour < 12 ? 'Good morning' : 'Good evening';

  return greeting
};

export default Greeting;