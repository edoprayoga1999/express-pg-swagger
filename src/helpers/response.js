const response = {
    // for success execution
    // example: success(res, {
    //     code: 200,
    //     status: true,
    //     message: 'example message',
    //     data: [],
    //     pagination: {
    //         everything for pagination
    //     }
    // })
      success: (res, payload) => {
          const {
              code,
              status,
              message,
              data,
              pagination
          } = payload;
  
          const response = {
              code: code || 200,
              success: status || false,
              message
          };
          if (data) response.data = data
          if (pagination) response.pagination = pagination
  
          res.status(code).json(response);
      },

    // for failed execution
    // example: failed(res, {
    //     code: 500,
    //     error: 'Internal server error'
    // })
      failed: (res, payload) => {
          const { code, error } = payload;
  
          const response = {
              code: code || 500,
              error
          };
  
          res.status(code).json(response);
      }
  }
  
  module.exports = response;