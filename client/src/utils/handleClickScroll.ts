export const handleClickScroll = (elementId: string) => {
  const element = document.getElementById(elementId);

  if(element) {
    element.scrollIntoView({ behavior: 'smooth'});
  };
};