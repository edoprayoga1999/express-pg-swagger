const { exampleModel } = require("../models");
const { success, failed } = require("../helpers/response");
const {} = exampleModel; // destructure exampleModel

const exampleController = {
  getData: (req, res) => {
    // #swagger.tags = ['Example Controller']
    // #swagger.description = 'Some description...'
    // #swagger.summary = 'Some summary...'
    /*
      #swagger.responses[200] = {
        description: 'Success'
    	}
			#swagger.responses[500] = {
        description: 'Error'
    	}
    */
    try {
      const { page, search } = req.query;
      success(res, {
        code: 200,
        status: true,
        message: "Get data success",
        data: {
          meet: "Hello",
        },
      });
    } catch (error) {
      failed(res, {
        code: 500,
        error: error.message,
      });
    }
  },
  postData: (req, res) => {
    // #swagger.tags = ['Example Controller']
    // #swagger.description = 'Some description...'
    // #swagger.summary = 'Some summary...'
    /*
      #swagger.responses[200] = {
        description: 'Success'
    	}
			#swagger.responses[500] = {
        description: 'Error'
    	}
    */
    try {
      const { example_key1, example_key2 } = req.body;
      success(res, {
        code: 200,
        status: true,
        message: "Post data success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        error: error.message,
      });
    }
  },
  putData: (req, res) => {
    // #swagger.tags = ['Example Controller']
    // #swagger.description = 'Some description...'
    // #swagger.summary = 'Some summary...'
    /*
      #swagger.responses[200] = {
        description: 'Success'
    	}
			#swagger.responses[500] = {
        description: 'Error'
    	}
    */
    try {
      const { example_key1, example_key2, id } = req.body;
      success(res, {
        code: 200,
        status: true,
        message: "Update data success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        error: error.message,
      });
    }
  },
  deleteData: (req, res) => {
    // #swagger.tags = ['Example Controller']
    // #swagger.description = 'Some description...'
    // #swagger.summary = 'Some summary...'
    /*
      #swagger.responses[200] = {
        description: 'Success'
    	}
			#swagger.responses[500] = {
        description: 'Error'
    	}
    */
    try {
      const { paramsId } = req.params;
      success(res, {
        code: 200,
        status: true,
        message: "Delete data success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        error: error.message,
      });
    }
  },
};

module.exports = exampleController;