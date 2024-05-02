#!/bin/bash

#go inside services directory
cd ./services
# Define the list of all services
services=("auth")


for service in "${services[@]}"; do 
    cd "$service"

    if [ true ];then
        echo Installing all dependencies.....
        npm install .
        touch .env
        cp .env.example .env
    else
        echo Warning: pacakage.json not found for service $service
    fi 


    cd ..         #go back to services directory
done

cd ..  #go back to appointme Derectory

cd ./api-gateway
npm install

echo "Dependency installation complete for all services and api-gateway"