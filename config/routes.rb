Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  resources :questions
  resources :user
  resources :user_submitted_questions
  resources :timed_scores

  get "timedscores", controller: 'timed_scores', action: :index
  get "timedscores/:id", controller: 'timed_scores', action: :get_users_scores 
  
  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
