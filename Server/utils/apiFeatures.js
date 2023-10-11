class ApiFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const removedFields = ["sort", "page", "fields", "limit"];

    removedFields.forEach((el) => delete queryObj[el]);

    // advanced Filttring
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(lt|lte|gt|gte)\b/g, (query) => `$${query}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortedBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortedBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  pagination() {
    if (this.queryString.page) {
      const page = Number(this.queryString.page) || 1;
      const limit = this.queryString.limit || 1;
      const skip = (page - 1) * limit;

      this.query = this.query.skip(skip).limit(limit);
    }
    return this;
  }

  fields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }
}

module.exports = ApiFeature;
