function scene2() {
  console.log('playing scene 2')
  // Setup Stage
  const stage = document.querySelector('#stage');
  const castle = document.querySelector('#castle');
  const stageImg = stage.querySelector('#stage-img');
  const castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);
  // Setup Cast

  // Character 1
  const nedContainer = document.createElement('div');
  stage.append(nedContainer);
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  const ned = document.querySelector('#ned');
  nedContainer.append(ned);
  const leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);
  ned.style.width = '70%';
  ned.style.position = 'absolute';
  ned.style.top = 0;
  leather.style.position = 'absolute';
  leather.style.bottom = 0;
  nedContainer.style.height = '37%';
  nedContainer.style.top = '55%';
  nedContainer.style.left = '25%';
  ned.style.border = 'none';
  leather.style.border = 'none';
  nedContainer.style.border = 'none';
  nedContainer.style.background = 'none';
  // Character 2
  const joffContainer = document.createElement('div');
  stage.append(joffContainer);
  joffContainer.style.position = 'absolute';
  joffContainer.style.width = '10%';
  joffContainer.style.top = '10%';
  const joff = document.querySelector('#joffrey');
  joffContainer.append(joff);
  joffContainer.style.border = '2px solid red';
  joffContainer.style.background = 'yellow';
  const king = document.querySelector('#king');
  joffContainer.append(king);

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(() => {

  });

  // Stage direction 2

  frame(() => {

  });

}
