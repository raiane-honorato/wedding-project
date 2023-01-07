export type countdownType = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export const getCountdown = (date: Date): countdownType => {
  const now = new Date();

  const secondInMili = 1000;
  const minuteInMili = secondInMili * 60;
  const hourInMili = minuteInMili * 60;
  const dayInMili = hourInMili * 24;

  const absoluteDistance = date.getTime() - now.getTime();

  if(absoluteDistance < 0){
    return ({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    });
  };

  const days = Math.floor(absoluteDistance / dayInMili);
  const hours = Math.floor((absoluteDistance % dayInMili) / hourInMili);
  const minutes = Math.floor((absoluteDistance % hourInMili) / minuteInMili);
  const seconds = Math.floor((absoluteDistance % minuteInMili) / secondInMili);

  return ({
    days: getStringNumber(days),
    hours: getStringNumber(hours),
    minutes: getStringNumber(minutes),
    seconds: getStringNumber(seconds),
  })
};

const getStringNumber = (number: number): string => String(number).padStart(2, '0');