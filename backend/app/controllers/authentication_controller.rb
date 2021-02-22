class AuthenticationController < ApplicationController

    def login
        @user = User.find_by(username: params[:username])
        if !@user
            render json: {message: "Incorrect username or password"},
            status: :unauthorized
        else
            if !@user.authenticate(params[:password])
                render json: {message: "Incorrect username or password"},
                status: :unauthorized
            else
                #dont send up to github
               # secret = "specific to app"
                 secret = Rails.application.secrets.secret_key_base
                #always send user id
                payload = {user_id: @user.id}
                token = JWT.encode(payload, secret)

                render json: { user: @user, token: token}
            end
        end

    end
end
