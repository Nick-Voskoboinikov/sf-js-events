/* Вообще, в Slack'е есть решение, но я решил написать своё */

const lightsColors = ['green','yellow','red'];  // available colors; yes, we can set up extra trafic light of i.e. 'purple' color :)
for (let i=0; i<(lightsColors.length);i++) {let bulb=document.createElement('div');document.querySelector('#trafficLight').appendChild(bulb);}  // how many loop iterations does it take to screw all the light bulbs? :)
const trafficLights=document.querySelectorAll('#trafficLight > div');  // get every lightbulb created beforehand
let issueTraficColor = (function () { /* what color have we got now? */
const traficLightsEnclosure=document.querySelector('#trafficLight');  // color change event attached to box children
let counter = -1;  //start value, because array el-s r looped from 0
return function (){
    counter = (counter==(lightsColors.length-1)) ? 0 : (counter+1);  // index add-up logic, defines where on the trafic light we r
    for (let lightBulb of trafficLights) {lightBulb.style.backgroundColor='';}  // switch off all ("other") trafic light bulbs
    traficLightsEnclosure.querySelector('div:nth-of-type('+(counter+1)+')').style.backgroundColor=lightsColors[counter];  // add correct color
}})();  // closure stop
for (let lightBulb of trafficLights) {lightBulb.addEventListener('click', () => {issueTraficColor();})}  // start the party onclick
