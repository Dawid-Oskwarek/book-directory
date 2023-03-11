const bookSchema = {
    type: 'object',
    required: ['name', 'genre'],
    properties: {
      name: { type: 'string' },
      genre: { type: 'string' },
    },
    additionalProperties: false
  };


  module.exports = {
    bookSchema
  }