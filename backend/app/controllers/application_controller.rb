class ApplicationController < ActionController::API

    def verify_auth
        if !request.headers["Authorization"]
            render json: { message: "Unauthorized"}, status: :unauthorized
        else
            token = request.headers["Authorization"].split(" ")[1]
            secret = "specific to app"

            begin
                JWT.decode(token, secret)
                payload = decoded_token.first
                user_id = payload["user_id"]
                @user = User.find(user_id)
            rescue
                render json: { message: "Unauthorized"},
                status: :unauthorized
            end
        end
    end
end
