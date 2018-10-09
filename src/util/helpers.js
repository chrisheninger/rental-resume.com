module.exports = {
  tryParseJSON(querystring) {
    let o;
    try {
      o = JSON.parse(decodeURIComponent(querystring.split("?data=")[1]));
      if (o && typeof o === "object" && o !== null) {
        return o;
      }
    } catch (e) {
      return false;
    }
    return false;
  },

  numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  stateOptions: [
    {
      text: "State*",
      value: "",
      disabled: true
    },
    {
      text: "AL",
      value: "AL"
    },
    {
      text: "AK",
      value: "AK"
    },
    {
      text: "AZ",
      value: "AZ"
    },
    {
      text: "AR",
      value: "AR"
    },
    {
      text: "CA",
      value: "CA"
    },
    {
      text: "CO",
      value: "CO"
    },
    {
      text: "CT",
      value: "CT"
    },
    {
      text: "DE",
      value: "DE"
    },
    {
      text: "DC",
      value: "DC"
    },
    {
      text: "FL",
      value: "FL"
    },
    {
      text: "GA",
      value: "GA"
    },
    {
      text: "HI",
      value: "HI"
    },
    {
      text: "ID",
      value: "ID"
    },
    {
      text: "IL",
      value: "IL"
    },
    {
      text: "IN",
      value: "IN"
    },
    {
      text: "IA",
      value: "IA"
    },
    {
      text: "KS",
      value: "KS"
    },
    {
      text: "KY",
      value: "KY"
    },
    {
      text: "LA",
      value: "LA"
    },
    {
      text: "ME",
      value: "ME"
    },
    {
      text: "MD",
      value: "MD"
    },
    {
      text: "MA",
      value: "MA"
    },
    {
      text: "MI",
      value: "MI"
    },
    {
      text: "MN",
      value: "MN"
    },
    {
      text: "MS",
      value: "MS"
    },
    {
      text: "MO",
      value: "MO"
    },
    {
      text: "MT",
      value: "MT"
    },
    {
      text: "NE",
      value: "NE"
    },
    {
      text: "NV",
      value: "NV"
    },
    {
      text: "NH",
      value: "NH"
    },
    {
      text: "NJ",
      value: "NJ"
    },
    {
      text: "NM",
      value: "NM"
    },
    {
      text: "NY",
      value: "NY"
    },
    {
      text: "NC",
      value: "NC"
    },
    {
      text: "ND",
      value: "ND"
    },
    {
      text: "OH",
      value: "OH"
    },
    {
      text: "OK",
      value: "OK"
    },
    {
      text: "OR",
      value: "OR"
    },
    {
      text: "PA",
      value: "PA"
    },
    {
      text: "RI",
      value: "RI"
    },
    {
      text: "SC",
      value: "SC"
    },
    {
      text: "SD",
      value: "SD"
    },
    {
      text: "TN",
      value: "TN"
    },
    {
      text: "TX",
      value: "TX"
    },
    {
      text: "UT",
      value: "UT"
    },
    {
      text: "VT",
      value: "VT"
    },
    {
      text: "VA",
      value: "VA"
    },
    {
      text: "WA",
      value: "WA"
    },
    {
      text: "WV",
      value: "WV"
    },
    {
      text: "WI",
      value: "WI"
    },
    {
      text: "WY",
      value: "WY"
    }
  ],

  missingSection(sectionName) {
    const app = document.getElementById("app");
    const missingClass = "missing--";
    app.classList.toggle(missingClass + sectionName);
  }
};
