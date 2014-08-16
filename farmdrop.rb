require 'sinatra/base'
require 'sinatra/assetpack'

class Farmdrop < Sinatra::Base
  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__) + '/app'
  set :views, settings.root + '/app/views'

  register Sinatra::AssetPack

  assets do
    serve '/js', from: 'app/assets/javascripts'

    js :application, [
      '/js/*.js',
      '/js/**/*.js'
    ]

    js_compression :jsmin
  end

  get '/' do
    erb :'application/index'
  end
end
