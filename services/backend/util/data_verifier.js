function amount_verify(param_amount, received_amount) {
  return param_amount === received_amount;
}

function name_verify(params, names) {
  names.forEach((name, index, array) => {
    if (!params.includes(name)) {
      return false;
    }
    if (index == array.length - 1) {
      return true;
    }
  });
  return true;
}

function data_verify(params) {
  params.forEach((param, index, array) => {
    if ((param + "").length == 0) {
      return false;
    }
    if (index == array.length - 1) {
      return true;
    }
  });
  return true;
}

function verify({
  param_data = [],
  params_wanted = [],
  param_received = [],
  param_amount = 0,
}) {
  let amount = amount_verify(param_amount, param_received.length);
  let name = name_verify(param_received, params_wanted);
  let data = data_verify(param_data);
  let is_valid = amount && name && data;
  return is_valid;
}

module.exports = { verify };
