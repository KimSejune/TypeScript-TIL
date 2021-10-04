enum enumResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: enumResponse): void {
  console.log(`${recipient}, ${message}`); // Test SJ, 1
}

respond('Test SJ', enumResponse.Yes);

