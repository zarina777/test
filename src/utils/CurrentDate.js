export const getCurrentDateTime = () => {
    const now = new Date();
  
    // Get the month, day, year, hours, and minutes
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, so add 1
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    // Format the date and time
    const formattedDateTime = `${month}.${day}.${year}, ${hours}:${minutes}`;
  
    return formattedDateTime;
  };
  
  