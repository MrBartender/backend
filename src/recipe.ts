export const get = async (event: any, _context: any): Promise<any> => {
  return {
    input: event,
    message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!'
  }
}
