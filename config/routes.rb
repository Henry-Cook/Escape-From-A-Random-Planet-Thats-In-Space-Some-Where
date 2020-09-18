Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  resources :questions
  resources :user

  get "timedscores", controller: 'timed_scores', action: :index
  get "timedscores/:id", controller: 'timed_scores', action: :get_users_scores 
  post "timedscores", controller: 'timed_scores', action: :create

  get "userquestions", controller: 'user_submitted_questions', action: :index
  get "userquestions/:id", controller: 'user_submitted_questions', action: :users_questions
  post "userquestions", controller: 'email_preview', action: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
