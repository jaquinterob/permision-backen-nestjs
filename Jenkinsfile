pipeline {
  agent any
  
  environment {
    PORT = '5000' 
    IMAGE_NAME = 'permision_back_nest_image' 
    APP_NAME = 'PERMISION_BACK_NEST_APP' 
  }
  
  stages {
    stage('Stop Docker container') {
      steps {
        script {
          try {
            sh "docker stop $APP_NAME"
          } catch (Exception e) {
            echo "No running container found with the name $APP_NAME"
          }
        }
      }
    }
    
    stage('Remove Docker image and container') {
      steps {
        script {
          try {
            sh "docker rm $APP_NAME"
            sh "docker rmi $IMAGE_NAME"
          } catch (Exception e) {
            echo "No image or container found with the specified names"
          }
        }
      }
    }
    
    stage('Docker build') {
      steps {
        sh "docker build -t $IMAGE_NAME ."
      }
    }
    
    stage('Install Dependencies') {
      steps {
        sh "docker run -dp $PORT:3000 --name $APP_NAME $IMAGE_NAME"
      }
    }
  }
}