import db from "JS/dbInitialize.js"

export default async function addData(name, money, rounds) {
    try {
      await db.collection('Leaderboard').add({
        Name: name,
        Geldbetrag: money,
        Zeitpunkt: getDate(),
        Spielrunden: rounds,
      });
      console.log('Data added successfully!');
    } catch (error) {
      console.error('Error adding data: ', error);
    }
  }

  function getDate(){
    const date = new Date();
    const dateString = date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit' });
    const timeString = date.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });
    const dateTimeString = `${dateString} ${timeString}`;
    return dateTimeString;
  }