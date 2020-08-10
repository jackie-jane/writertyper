Rails.application.routes.draw do
  resources :authors do
    resources :texts do
      resources :scores
    end
  end
end