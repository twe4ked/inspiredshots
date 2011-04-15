Inspiredshots::Application.routes.draw do
  get "shots/index"
  root :to => "shots#index"
end
