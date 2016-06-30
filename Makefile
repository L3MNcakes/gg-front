start:
	gulp && sudo docker build -t l3mncakes/village-cellauto . && sudo docker run --name vca -d -p 8080:80 l3mncakes/village-cellauto

stop:
	sudo docker stop vca && sudo docker rm vca
