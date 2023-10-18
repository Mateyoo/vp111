window.onload = () => {
  let activeButton = null;
  let activeInfo = null;

  const buttons = document.querySelectorAll('button[id$="Button"]');
  buttons.forEach(button => {
    const info = document.getElementById(button.id.replace('Button', 'Info'));
    button.addEventListener('click', () => {
      if (activeButton && activeInfo) {
        toggleButtonInfo(activeInfo);
      }
      if (button !== activeButton) {
        toggleButtonInfo(info);
        activeButton = button;
        activeInfo = info;
      } else {
        activeButton = null;
        activeInfo = null;
      }
    });
  });

  const toggleButtonInfo = (infoDiv) => {
    infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
  };
};