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
   answer: "cerium phaser turbine", prompt: 'The quantum bio-containers memorybank has been wiped clean! Write a function that returns the string "cerium phaser turbine"(exactly the way it\'s written!) if the bioContainers = true.'
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

let sheild = "off"
let strutsMaxHeat = 600
  
if (strutsMaxHeat < heatLevel && sheild === "off") {
  return "Systems Overheated"
} else {
  return "All Systems Normal"
}
}

electroCeramicLandingStruts(1000)',
   answer: "All Systems Normal", prompt:  'There\'s a series of nanowave pulse signatures thats overheating the electro-ceramic landing struts! The shielding must have gone down, fix it below!'
  )

  Question.create!(question: 'const deltaWaveRegulator = () => {

  }
  
  deltaWaveRegulator([1342, 3029, 5430, 22034, 9334,])',
   answer: "5", prompt:  'We need a new fucntion that takes in an array and outputs the length, make sure the input is the correct datastructure! This should help regulate the delta-wave prorulsion unit. Create it, and hurry!'
  )





















puts "#{Question.count} Questions Created"

admin = User.create!(username: 'admin', password: '123456')

puts "#{User.count} Users Created"

TimedScore.create!(score: 120, user: admin)
TimedScore.create!(score: 223, user: admin)
TimedScore.create!(score: 125, user: admin)
TimedScore.create!(score: 423, user: admin)
TimedScore.create!(score: 523, user: admin)



puts "#{TimedScore.count} Timed Scores Created"

UserSubmittedQuestion.create!(question: "console.log(1 + 1)", answer: "2", user: admin)

puts "#{UserSubmittedQuestion.count} User Submitted Questions Created"