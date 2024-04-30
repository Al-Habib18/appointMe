#!/bin/bash

#go inside services directory
cd ./services
# Define the list of all services
services=("auth")


for service in "${services[@]}"; do 
    cd "$service"

    if [ true ];then
        echo Installing all dependencies.....
        #TODO: install all pacakge
        # npm install .
    else
        echo Warning: pacakage.json not found for service $service
    fi 

    touch .env
    cp .env.example .env


    cd ..         #go back to services directory
done

cd ..  #go back to appointme Derectory

cd ./api-gateway
npm install

echo "Dependency installation complete for all services and api-gateway"