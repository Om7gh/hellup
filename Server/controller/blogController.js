const Blogs = require("../model/blogSchema");
const ApiFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const ErrorHandler = require("../utils/handleErrors");

exports.checkId = async (req, res, next, value) => {
  if (!req.params.id) {
    return res.status(404).json({
      status: "failed",
      message: "can't find blog with this id" + value,
    });
  }
  next();
};

exports.createBlogs = catchAsync(async (req, res, next) => {
  const blog = await Blogs.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog,
    },
  });
});
exports.getBlogs = catchAsync(async (req, res, next) => {
  let apiFeatures = new ApiFeatures(Blogs.find(), req.query)
    .filter()
    .pagination()
    .fields()
    .sort();
  const blog = await apiFeatures.query;

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});
exports.getSingleBlogs = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blogs.findById(id);

  if (!blog) {
    return next(new ErrorHandler("No Blog found with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});
exports.updateBlogs = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blogs.findByIdAndUpdate(id, req.body, { new: true });

  if (!blog) {
    return next(new ErrorHandler("No Blog found with this ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});
exports.deleteBlogs = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blogs.findByIdAndDelete(id);

  if (!blog) {
    return next(new ErrorHandler("No Blog found with this ID", 404));
  }

  res.status(203).json({
    status: "success",
    data: null,
  });
});
