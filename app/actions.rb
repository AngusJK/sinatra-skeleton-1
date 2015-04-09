# Homepage (Root path)
require 'sinatra/json'

get '/' do
  erb :index
end

get '/index' do
  erb :index
end

get '/list' do
  @contact = Contact.all
  erb :list
end

get '/contacts' do
  contacts = Contact.all
  content_type :json
  contacts.to_json
end

get '/search' do
  @input = '%' + params[:input] + '%'

  @result = Contact.where('first_name like ?', @input)

  json @result
end

post '/create' do
  @first_name = params[:first_name]
  @last_name = params[:last_name]
  @email = params[:email]
  @phone = params[:phone]

  Contact.create(:first_name => @first_name,
              :last_name => @last_name,
              :email => @email,
              :phone => @phone)
  
end