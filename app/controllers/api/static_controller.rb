class Api::StaticController < ApplicationController

    def test_api
     render json: 'HELLO!!!'
    end
end
