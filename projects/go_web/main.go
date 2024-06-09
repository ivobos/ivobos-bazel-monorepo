package main

import (
	"github.com/gorilla/mux"
	"github.com/ivobos/ivobos-bazel-monorepo/projects/go_hello_world"
	"log"
	"net/http"
)

func YourHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Received request")
	w.Write([]byte(go_hello_world.HelloWorld()))
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", YourHandler)
	log.Println("Going to listen to port 8000")
	log.Fatal(http.ListenAndServe(":8000", r))
}
