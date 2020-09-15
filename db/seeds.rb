# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.destroy_all
TimedScore.destroy_all
User.destroy_all


Question.create!(question: "console.log(2 + 2)", answer: "4")
Question.create!(question: "console.log(5 + 2)", answer: "7")
Question.create!(question: "console.log(7 + 3)", answer: "10")
Question.create!(question: "console.log(2 + 1)", answer: "3")

puts "#{Question.count} Questions Created"

admin = User.create!(username: 'admin', password: '123456')

puts "#{User.count} Users Created"

TimedScore.create!(score: '10:15:01', user: admin)

puts "#{TimedScore.count} Timed Scores Created"

UserSubmittedQuestion.create!(question: "console.log(1 + 1)", answer: "2", user: admin)

puts "#{UserSubmittedQuestion.count} User Submitted Questions Created"