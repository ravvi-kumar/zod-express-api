type MessageResponse = {
  message: string;
};

export default interface ErrorResponse extends MessageResponse {
  stack?: string;
}
