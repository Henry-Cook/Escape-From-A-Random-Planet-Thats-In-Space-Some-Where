# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

UserSubmittedQuestion.destroy_all
Question.destroy_all
TimedScore.destroy_all
User.destroy_all


Question.create!(question: ' let bioContainers = true

  const quantumMemoryBank = () => {

  }
    
  quantumMemoryBank()',
   answer: "cerium phaser turbine", prompt: 'The quantum bio-containers memorybank has been wiped clean! Write a function that returns the string "cerium phaser turbine" (exactly the way it\'s written!) if the bioContainers = true.'
  )
  

Question.create!(question: 'const status = "offline";

const berylliumNeogenic = () => {
  status = "online";
  return status;
};
  
berylliumNeogenic();',
 answer: "online", prompt: 'The beryllium neogenic is offline, fix the bug and bring it back online!'
)


Question.create!(question: 'const OsmiumPulseThrusters = () => {  
  let dilithiumVacuum = "stable";  
  let warpNode = "maximum";  
  let quantumImpulser = "Blow Up Ship";  
  if (dilithiumVacuum === "stable" && warpNode === "maximum") {  
    console.log("stabilized"); 
    } else { 
      return quantumImpulser; 
      } 
    } 

    OsmiumPulseThrusters() ;',
 answer: "stabilized", prompt: 'I\'m detecting a destabilization in the osmium pulse thruster. It seems like the function below isn\'t returning what it should! Fix it so we don\'t die!'
)

Question.create!(question: 'const electroCeramicLandingStruts = (heatLevel) => {

let shield = "off"
let strutsMaxHeat = 600
  
if (strutsMaxHeat < heatLevel && shield === "off") {
  return "Systems Overheated"
} else {
  return "All Systems Normal"
}
}

electroCeramicLandingStruts(1000)',
   answer: "All Systems Normal", prompt:  'There\'s a series of nanowave pulse signatures that are overheating the electro-ceramic landing struts! The shielding must have gone down, fix it below!'
  )

  Question.create!(question: 'const deltaWaveRegulator = () => {

  }
  
  deltaWaveRegulator([1342, 3029, 5430, 22034, 9334,])',
   answer: "5", prompt:  'We need a new function that takes in an array and outputs the length, make sure the input is the correct datastructure! This should help regulate the delta-wave prorulsion unit. Create it, and hurry!'
  )


  Question.create!(question: 'const degaussInitiator = () => {
  const solarSailCalibration = [223, 443, 858, 538, 367];
  const rubidiumCollector = solarSailCalibration.splice(1);
  
  return solarSailCalibration;
  };
  
  degaussInitiator();
  ',
   answer: "443,858,538,367", prompt:  'Oh no! We need to degauss the zirconium gamma-wave brackets! We could blow up in seconds if we don\'t! See why the function below isn\'t returning [443, 858, 538, 367] like it should.'
  )

  Question.create!(question: 'const rubidiumCapacitorFormula = (crystalCore) => {
  let theraMagneticImpulser = 19338;
  let lithiumWrap = 32098;
  let quantumCoolRate;
  
  if (crystalCore > 2000) {
    quantumCoolRate = 19338;
    return theraMagneticImpulser - quantumCoolRate;
  } else {
    quantumCoolRate = 233;
    theraMagneticImpulser += quantumCoolRate;
  }
  
  if (theraMagneticImpulser === 19571) {
    return "Self Destruct";
  }
  };
  
  rubidiumCapacitorFormula(1239);
    ',
     answer: "0", prompt:  'The rubidium capacitor formula is off, we should be getting 0 but instead it\'s setting off the self destruct! Fix it quick!'
    )
Question.create!(question: 'const erbiumIonScrubber = () => {

}

erbiumIonScrubber(["kryptonian flow cannon", "nitrogen phaser centrifuge", "neutonium ion flinger", "boron antigravity portal"]);',
answer: "nitrogen phaser centrifuge", prompt:  ' We are almost there, however right now we need to uncouple the nitrogen phaser centrifuge from the erbium ion scrubber. It\'s not too bad, write a function that pulls it out of the array and returns it.'
)
  

Question.create!(question: 'const tungstenWarp = () => {
let pulseSplitter = 54320;
const tantulumDrive = [994302, 109427, 204225, 453322]
        
if (pulseSplitter > 1999) {
  return "online"
} else {
  return "offline"
}}',
answer: "online", prompt:  '*DANGER DANGER* That\'s the computer system letting us know that the tungsten warp is offline, theres no way we can get to space without it, fix the function! Our lives depened on it!'
)
  
Question.create!(question: 'const antimatterParticleTrace = (trace) => {
const cloaking = "full defragmentor" 
            
if (trace = "on") {
  return "cloaking activated"
}
            
            
}
            
selfDestruct("on")',
answer: "cloaking activated", prompt:  'Okay we just about made it. Fix the antimatter particle trace so those aliens can\'t trace our ship when we leave the atmosphere. This should be easy for you.'
)
        

puts "#{Question.count} Questions Created"

admin = User.create!(username: 'admin', password: '123456')

puts "#{User.count} Users Created"
