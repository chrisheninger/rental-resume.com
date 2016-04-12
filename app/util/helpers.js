module.exports = {

  tryParseJSON(querystring) {
    let o;
    try {
      o = JSON.parse(querystring);
      if (o && typeof(o) === 'object' && o !== null) {
        return o;
      }
    } catch (e) {
      return false;
    }
    return false;
  },

};
