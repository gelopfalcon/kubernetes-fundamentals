pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'kubectl config view'
                sh 'sudo kubectl get nodes'
            }
        }
    }
}
