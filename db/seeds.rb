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





















puts "#{Question.count} Questions Created"

admin = User.create!(username: 'admin', password: '123456')

puts "#{User.count} Users Created"

TimedScore.create!(score: 1, user: admin)
TimedScore.create!(score: 2, user: admin)
TimedScore.create!(score: 3, user: admin)
TimedScore.create!(score: 4, user: admin)
TimedScore.create!(score: 5, user: admin)
TimedScore.create!(score: 6, user: admin)
TimedScore.create!(score: 7, user: admin)
TimedScore.create!(score: 8, user: admin)
TimedScore.create!(score: 9, user: admin)
TimedScore.create!(score: 10, user: admin)
TimedScore.create!(score: 11, user: admin)
TimedScore.create!(score: 12, user: admin)
TimedScore.create!(score: 13, user: admin)
TimedScore.create!(score: 14, user: admin)
TimedScore.create!(score: 15, user: admin)
TimedScore.create!(score: 16, user: admin)
TimedScore.create!(score: 17, user: admin)
TimedScore.create!(score: 18, user: admin)


puts "#{TimedScore.count} Timed Scores Created"

UserSubmittedQuestion.create!(question: "console.log(1 + 1)", answer: "2", user: admin)

puts "#{UserSubmittedQuestion.count} User Submitted Questions Created"