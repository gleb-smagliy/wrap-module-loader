var СoncatSource = require("webpack-sources").ConcatSource;

var lineSeparator = '\n';

module.exports = function(source)
{
	this.cacheable();

	var query = this.query || {};
	var before = query.before || "";
	var after = query.after || "";

	return new СoncatSource(before, lineSeparator, source, lineSeparator, after).source();
};