export default function GetValue(path = [], data) {
  const variable = path.join('.')
  return findValue(variable, data)
}

function findValue(variable, data = {}) {
  const variablePath = variable.split('.')

  if(variablePath.length == 1){
    return data?.[variablePath[0]]
  }

  return findValue(variablePath.slice(1).join('.'), data?.[variablePath[0]])
}