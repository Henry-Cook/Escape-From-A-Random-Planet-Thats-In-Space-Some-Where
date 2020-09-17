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


Question.create!(question: "console.log(2 + 2)", answer: "4")
Question.create!(question: "console.log(5 + 2)", answer: "7")
Question.create!(question: "console.log(7 + 3)", answer: "10")
Question.create!(question: "console.log(2 + 1)", answer: "3")

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