function status(request, response) {
  response.status(200).json({ chave: "Status page test" });
}

export default status;
