class UsersController < ApplicationController
    
    #before_action :verify_auth, only: [:index, :update, :destroy]


    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.new(user_params)

        if @user.valid?
            @user.save
        render json: @user
        else
            render json: { errors: @user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # Strong Params################
    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
